window.BENCHMARK_DATA = {
  "lastUpdate": 1612203733779,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "920d21140c781698580f0d4fa5814386d1792ba1",
          "message": ":memo: Add link to local `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f4a97d4",
          "timestamp": "2021-02-01T18:16:28Z",
          "tree_id": "81984a4d20b329926b9090248c08155012eacdf0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/920d21140c781698580f0d4fa5814386d1792ba1"
        },
        "date": 1612203663073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 989.1891602690824,
            "unit": "iter/sec",
            "range": "stddev: 0.00015207533529255584",
            "extra": "mean: 1.0109289913043293 msec\nrounds: 460"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1357.0358459017555,
            "unit": "iter/sec",
            "range": "stddev: 0.00017625761379003491",
            "extra": "mean: 736.9002101307768 usec\nrounds: 1066"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9130.370491387228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004155617909277769",
            "extra": "mean: 109.52458073232737 usec\nrounds: 1858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "373163c133a7421a9de8d49d0dc19a8e440ad950",
          "message": "Merge pull request #54 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.0.1\n\n⬆️ Bump pip from 21.0 to 21.0.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3948eba",
          "timestamp": "2021-02-01T18:17:17Z",
          "tree_id": "c6e73ce4e17ea70930555d4f9f28a6b893ff8d45",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/373163c133a7421a9de8d49d0dc19a8e440ad950"
        },
        "date": 1612203732869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1134.1593587780342,
            "unit": "iter/sec",
            "range": "stddev: 0.00006748205855723297",
            "extra": "mean: 881.7103101608401 usec\nrounds: 561"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1673.5841968425843,
            "unit": "iter/sec",
            "range": "stddev: 0.00004647647780929776",
            "extra": "mean: 597.5199824942295 usec\nrounds: 1371"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14075.426336502242,
            "unit": "iter/sec",
            "range": "stddev: 0.000012474987661272421",
            "extra": "mean: 71.04580536979323 usec\nrounds: 1192"
          }
        ]
      }
    ]
  }
}