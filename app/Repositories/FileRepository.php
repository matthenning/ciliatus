<?php

namespace App\Repositories;

use App\Event;
use App\File;
use App\Property;

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

    }

    /**
     * @return File
     */
    public function show()
    {
        $file = $this->scope;

        $file->path_external = $file->path_external();
        if (!is_null($file->thumb())) {
            $file->thumb = (new FileRepository($file->thumb()))->show();
        }
        $file->icon = $file->icon();
        $file->url = $file->url();

        return $file;
    }

}