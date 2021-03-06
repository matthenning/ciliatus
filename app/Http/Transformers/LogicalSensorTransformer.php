<?php
/**
 * Created by PhpStorm.
 * User: matthias
 * Date: 23.07.2016
 * Time: 15:18
 */

namespace App\Http\Transformers;


/**
 * Class LogicalSensorTransformer
 * @package App\Http\Transformers
 */
class LogicalSensorTransformer extends Transformer
{
    /**
     * @param $item
     * @return array
     */
    public function transform($item)
    {
        $return = [
            'id'    => $item['id'],
            'physical_sensor_id' => $item['physical_sensor_id'],
            'type'  => $item['type'],
            'name' => $item['name'],
            'adjusted_value' => $item['adjusted_value'],
            'adjusted_value_lowerlimit' => $item['adjusted_value_lowerlimit'],
            'adjusted_value_upperlimit' => $item['adjusted_value_upperlimit'],
            'timestamps' => $this->parseTimestamps($item)
        ];

        $return = $this->addCiliatusSpecificFields($return, $item);


        if (isset($item['current_threshold_id'])) {
            $return['current_threshold_id'] = $item['current_threshold_id'];
        }

        if (isset($item['rawvalue_adjustment'])) {
            $return['rawvalue_adjustment'] = $item['rawvalue_adjustment'];
        }

        return $return;
    }
}