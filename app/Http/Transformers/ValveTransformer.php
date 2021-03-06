<?php
/**
 * Created by PhpStorm.
 * User: matthias
 * Date: 23.07.2016
 * Time: 15:18
 */

namespace App\Http\Transformers;

/**
 * Class ValveTransformer
 * @package App\Http\Transformers
 */
class ValveTransformer extends Transformer
{
    /**
     * @param $item
     * @return array
     */
    public function transform($item)
    {
        $return = [
            'id'    => $item['id'],
            'name' => $item['name'],
            'model' => $item['model'],
            'controlunit_id' => $item['controlunit_id'],
            'terrarium_id' => $item['terrarium_id'],
            'pump_id' => $item['pump_id'],
            'timestamps' => $this->parseTimestamps($item)
        ];

        $return = $this->addCiliatusSpecificFields($return, $item);

        return $return;
    }
}