<?php
/**
 * Created by PhpStorm.
 * User: AnhDT39
 * Date: 12/20/2017
 * Time: 11:38 AM
 */

namespace App\Repositories;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;

/**
 * Class BaseEloquentRepository
 * @package App\Repositories\ContractsRepository
 */
abstract class BaseEloquentRepository implements RepositoryInterface
{
    /**
     * @var Application
     */
    protected $app;

    /**
     * @var
     */
    protected $model;

    /**
     * @return mixed
     */
    abstract public function model();

    /**
     * BaseEloquentRepository constructor.
     * @param Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->makeModel();
        $this->boot();
    }

    /**
     *
     */
    public function boot()
    {
    }

    /**
     * @return Model|mixed
     */
    public function makeModel()
    {
        $model = $this->app->make($this->model());

        if (!$model instanceof Model) {
            throw new RepositoryException("Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model");
        }

        return $this->model = $model;
    }

    /**
     *
     */
    public function resetModel()
    {
        $this->makeModel();
    }

    /**
     * @param array $columns
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all($columns = array('*'))
    {
        if ($this->model instanceof Builder) {
            $results = $this->model->get($columns);
        } else {
            $results = $this->model->all($columns);
        }

        $this->resetModel();

        return $results;
    }

    /**
     * @param null $limit
     * @param array $columns
     * @return mixed
     */
    public function paginate($limit = null, $columns = array('*'))
    {
        $limit = is_null($limit) ? config('repository.pagination.limit', 20) : $limit;
        $results = $this->model->paginate($limit, $columns);
        $this->resetModel();

        return $results;
    }

    /**
     * @param $id
     * @param array $columns
     * @return mixed
     */
    public function find($id, $columns = array('*'))
    {
        $results = $this->model->findOrFail($id, $columns);
        $this->resetModel();

        return $results;
    }

    /**
     * @param $field
     * @param $value
     * @param array $columns
     * @return mixed
     */
    public function findByField($field, $value, $columns = array('*'))
    {
        $results = $this->model->where($field, '=', $value)->get($columns);
        $this->resetModel();

        return $results;
    }

    /**
     * @param array $where
     * @param array $columns
     * @return mixed
     */
    public function findWhere(array $where, $columns = array('*'))
    {
        foreach ($where as $field => $value) {
            if (is_array($value)) {
                list($field, $condition, $val) = $value;
                $this->model = $this->model->where($field, $condition, $val);
            } else {
                $this->model = $this->model->where($field, '=', $value);
            }
        }

        $results = $this->model->get($columns);
        $this->resetModel();

        return $results;
    }

    /**
     * @param $field
     * @param array $values
     * @param array $columns
     * @return mixed
     */
    public function findWhereIn($field, array $values, $columns = array('*'))
    {
        $results = $this->model->whereIn($field, $values)->get($columns);
        $this->resetModel();

        return $results;
    }

    /**
     * @param $field
     * @param array $values
     * @param array $columns
     * @return mixed
     */
    public function findWhereNotIn($field, array $values, $columns = array('*'))
    {
        $results = $this->model->whereNotIn($field, $values)->get($columns);
        $this->resetModel();

        return $results;
    }

    /**
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes)
    {
        // TODO validation
//        if (!is_null($this->validator)) {
//            $this->validator->with($attributes)
//                ->passesOrFail(ValidatorInterface::RULE_CREATE);
//        }

        $model = $this->model->newInstance($attributes);
        // cmt lại do muốn trả về 1 Object
        //$model = $model->save();
        $model->save();
//        $this->resetModel();

        //TODO RepositoryEntityCreated
//        event(new RepositoryEntityCreated($this, $model));

        return $model;
    }

    /**
     * @param array $attributes
     * @param $id
     * @return mixed
     */
    public function update(array $attributes, $id)
    {
        // TODO: validation
//        if ( !is_null($this->validator) ) {
//            $this->validator->with($attributes)
//                ->setId($id)
//                ->passesOrFail( ValidatorInterface::RULE_UPDATE );
//        }
        $model = $this->model->findOrFail($id);
        $model->fill($attributes);
        $model->save();

        $this->resetModel();

        //TODO RepositoryEntityUpdated
//        event(new RepositoryEntityUpdated($this, $model));

        return $model;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        $model = $this->find($id);
        $originalModel = clone $model;

        $this->resetModel();
        $deleted = $model->delete();

        //TODO RepositoryEntityDeleted
//        event(new RepositoryEntityDeleted($this, $originalModel));

        return $deleted;
    }

    /**
     * @param $relations
     * @return $this
     */
    public function with($relations)
    {
        $this->model = $this->model->with($relations);
        return $this;
    }
}