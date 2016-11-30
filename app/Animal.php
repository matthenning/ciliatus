<?php

namespace App;

use App\Events\AnimalDeleted;
use App\Events\AnimalUpdated;
use App\Repositories\AnimalRepository;
use Auth;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Animal
 * @package App
 */
class Animal extends CiliatusModel
{
    use Traits\Uuids;

    /**
     * @var array
     */
    protected  $dates = ['created_at', 'updated_at', 'birth_date', 'death_date'];

    /**
     * @var array
     */
    protected $fillable = ['display_name'];

    /**
     * @var array
     */
    protected  $casts = [
        'notifications_enabled' =>  'boolean'
    ];

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;


    /**
     * @param array $attributes
     * @return CiliatusModel|Animal
     */
    public static function create(array $attributes = [])
    {
        $new = parent::create($attributes);
        Log::create([
            'target_type'   =>  explode('\\', get_class($new))[count(explode('\\', get_class($new)))-1],
            'target_id'     =>  $new->id,
            'action'        => 'create'
        ]);

        return $new;
    }

    /**
     *
     */
    public function delete()
    {
        Log::create([
            'target_type'   =>  explode('\\', get_class($this))[count(explode('\\', get_class($this)))-1],
            'target_id'     =>  $this->id,
            'action'        => 'delete'
        ]);

        broadcast(new AnimalDeleted($this));

        parent::delete();
    }


    /**
     * @param array $options
     * @return bool
     */
    public function save(array $options = [])
    {
        $result = parent::save($options);

        broadcast(new AnimalUpdated((new AnimalRepository($this))->show()));

        return $result;
    }

    /**
     * @return mixed
     */
    public function terrarium()
    {
        return $this->belongsTo('App\Terrarium');
    }

    /**
     * @return mixed
     */
    public function files()
    {
        return $this->hasMany('App\File', 'belongsTo_id')->where('belongsTo_type', 'Animal');
    }

    /**
     * @return mixed
     */
    public function properties()
    {
        return $this->hasMany('App\Property', 'belongsTo_id')->where('belongsTo_type', 'Animal');
    }

    /**
     * @return string
     */
    public function icon()
    {
        return 'pets';
    }

    /**
     * @return \Illuminate\Contracts\Routing\UrlGenerator|string
     */
    public function url()
    {
        return url('animals/' . $this->id);
    }

    /**
     * @return string
     */
    public function gender_icon()
    {
        switch ($this->gender) {
            case 'male':
                return 'mars';
                break;
            case 'female':
                return 'venus';
                break;
            default:
                return 'genderless';
        }
    }

    /**
     * @return array
     */
    public function getAge()
    {
        if (is_null($this->death_date)) {
            $compare_at = Carbon::now();
        }
        else {
            $compare_at = $this->death_date;
        }
        if ($compare_at->diffInYears($this->birth_date) >= 2) {
            $amount = $compare_at->diffInYears($this->birth_date);
            return [$amount, 'years'];

        }
        if ($compare_at->diffInMonths($this->birth_date) > 1) {
            $amount = $compare_at->diffInMonths($this->birth_date);
            return [$amount, 'months'];
        }

        $amount = $compare_at->diffInDays($this->birth_date);
        return [$amount, 'days'];
    }

    /**
     *
     */
    public function last_feeding()
    {
        return $this->properties()->where('type', 'AnimalFeeding')
                           ->where('belongsTo_id', $this->id)
                           ->orderBy('created_at', 'DESC')
                           ->limit(1)->get()->first();
    }
}
