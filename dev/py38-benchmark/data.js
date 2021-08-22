window.BENCHMARK_DATA = {
  "lastUpdate": 1629667448823,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "422f2448dbf1865ddee856d5f32c477b49888f9e",
          "message": ":art: Enforce boilerplate-first dependency declaration ordering\n\nThis makes it easier to follow along. Additionally, since new\nproject-specific dependencies added via the `poetry add` command are\nadded to the end of the `tool.poetry.dependencies` section, they will\nnow automatically be grouped with other project-specific dependencies.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c51dd1",
          "timestamp": "2021-08-22T21:14:46Z",
          "tree_id": "b66fa613c043057e1efc6137bb98263c4840fa92"
        },
        "date": 1629667446570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.3584052448314,
            "unit": "iter/sec",
            "range": "stddev: 0.00035293767188809366",
            "extra": "mean: 3.5290994778713753 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 792.0903464398339,
            "unit": "iter/sec",
            "range": "stddev: 0.00026472746799403266",
            "extra": "mean: 1.2624822464945402 msec\nrounds: 499"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1681.5384936110713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248057475829319",
            "extra": "mean: 594.6934927742982 usec\nrounds: 692"
          }
        ]
      }
    ]
  }
}