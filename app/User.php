<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User
 * @package App
 */
class User extends Authenticatable
{
    use Traits\Uuids;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function abilities()
    {
        return $this->hasMany('App\UserAbility');
    }

    /**
     * @param $ability
     * @return bool
     */
    public function hasAbility($ability)
    {
        return $this->abilities()->where('name', $ability)->get()->count() > 0;
    }

    /**
     *
     */
    public function grantFullAbilities()
    {
        foreach (UserAbility::abilities() as $a) {
            $ua = $this->abilities()->where('name', $a)->first();
            if (is_null($ua)) {
                $ua = UserAbility::create(['user_id' => $this->id]);
                $ua->name = $a;
                $ua->save();
            }
        }
    }
    public function icon()
    {
        return 'circle-o';
    }

    public function url()
    {
        return url('users/' . $this->id);
    }

}