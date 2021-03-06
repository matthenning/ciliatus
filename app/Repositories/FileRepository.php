<?php

namespace App\Repositories;

use App\File;

/**
 * Class FileRepository
 * @package App\Repositories
 */
class FileRepository extends Repository {

    /**
     * FileRepository constructor.
     * @param File $scope
     */
    public function __construct(File $scope = null)
    {

        $this->scope = $scope ? : new File();
        $this->addCiliatusSpecificFields();

    }

    /**
     * @param bool $exclude_models
     * @return File
     */
    public function show($exclude_models = false)
    {
        $file = $this->scope;

        if (!$exclude_models) {
            $file->models = $file->getModels();
        }
        $file->path_external = $file->path_external();
        if (!is_null($file->thumb())) {
            $file->thumb = (new FileRepository($file->thumb()))->show();
        }

        return $file;
    }

}