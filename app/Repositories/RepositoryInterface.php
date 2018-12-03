<?php
/**
 * Created by PhpStorm.
 * User: AnhDT39
 * Date: 12/20/2017
 * Time: 11:39 AM
 */

namespace App\Repositories;


/**
 * Interface RepositoryInterface
 * @package App\Repositories\ContractsRepository
 */
interface RepositoryInterface
{
    public function all($columns = array('*'));

    public function paginate($limit = null, $columns = array('*'));

    public function find($id, $columns = array('*'));

    public function findByField($field, $value, $columns = array('*'));

    public function findWhere(array $where, $columns = array('*'));

    public function findWhereIn($field, array $values, $columns = array('*'));

    public function findWhereNotIn($field, array $values, $columns = array('*'));

    public function create(array $attributes);

    public function update(array $attributes, $id);

    public function delete($id);

    public function with($relations);

//    public function hidden(array $fields);

//    public function visible(array $fields);

//    public function scopeQuery(\Closure $scope);

//    public function getFieldsSearchable();

//    public function setPresenter($presenter);

//    public function skipPresenter($status = true);
}