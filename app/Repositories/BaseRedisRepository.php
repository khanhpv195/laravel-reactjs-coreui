<?php
/**
 * Created by PhpStorm.
 * User: AnhDT39
 * Date: 12/20/2017
 * Time: 3:35 PM
 */

namespace App\Repositories;

abstract class BaseRedisRepository implements RepositoryInterface
{

    public function all($columns = array('*'))
    {
        return "create by RedisRepository";
    }

    public function paginate($limit = null, $columns = array('*'))
    {
        // TODO: Implement paginate() method.
    }

    public function find($id, $columns = array('*'))
    {
        // TODO: Implement find() method.
    }

    public function findByField($field, $value, $columns = array('*'))
    {
        // TODO: Implement findByField() method.
    }

    public function findWhere(array $where, $columns = array('*'))
    {
        // TODO: Implement findWhere() method.
    }

    public function findWhereIn($field, array $values, $columns = array('*'))
    {
        // TODO: Implement findWhereIn() method.
    }

    public function findWhereNotIn($field, array $values, $columns = array('*'))
    {
        // TODO: Implement findWhereNotIn() method.
    }

    public function create(array $attributes)
    {
        // TODO: Implement create() method.
    }

    public function update(array $attributes, $id)
    {
        // TODO: Implement update() method.
    }

    public function delete($id)
    {
        // TODO: Implement delete() method.
    }

    public function with($relations)
    {
        // TODO: Implement with() method.
    }
}