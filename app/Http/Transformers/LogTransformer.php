<?php
/**
 * Created by PhpStorm.
 * User: matthias
 * Date: 23.07.2016
 * Time: 15:18
 */

namespace App\Http\Transformers;

/**
 * Class LogTransformer
 * @package App\Http\Transformers
 */
class LogTransformer extends Transformer
{
    /**
     * @param $item
     * @return array
     */
    public function transform($item)
    {
        $return = [
            'id'    =>  $item['id'],
            'class' =>  'Log',
            'type'  =>  $item['type'],
            'action'=>  $item['action'],
            'description'   =>  $item['description'],
            'source_type' => $item['source_type'],
            'source'    => isset($item['source']) ? $item['source'] : null,
            'source_name' => $item['source_name'],
            'target_type' => $item['target_type'],
            'target'    => isset($item['target']) ? $item['target'] : null,
            'target_name' => $item['target_name'],
            'associated_type' => $item['associatedWith_type'],
            'associated'    => isset($item['associated']) ? $item['associated'] : null,
            'associated_name' => $item['associatedWith_name'],
            'timestamps' => $this->parseTimestamps($item)
        ];

        $return = $this->addCiliatusSpecificFields($return, $item);

        return $return;
    }
}