window.BENCHMARK_DATA = {
  "lastUpdate": 1671079503092,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
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
          "id": "6ea74d3c94a45b88eb7702d574d76b5945728e73",
          "message": "Merge pull request #870 from TeoZosa/ci/fix-benchmarks-gh-pages-publishing\n\n💚 Fix benchmarks not being published on pushes to `master`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@858a704",
          "timestamp": "2022-12-14T11:21:39Z",
          "tree_id": "5c3ad8c622a604eb8700975c5cea442686d6e8b2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6ea74d3c94a45b88eb7702d574d76b5945728e73"
        },
        "date": 1671017155593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 440.0454591202191,
            "unit": "iter/sec",
            "range": "stddev: 0.0001729706396113046",
            "extra": "mean: 2.2724924874791244 msec\nrounds: 599"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 883.5636422936622,
            "unit": "iter/sec",
            "range": "stddev: 0.00008427223766673949",
            "extra": "mean: 1.1317803858520912 msec\nrounds: 1244"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2391.729517134617,
            "unit": "iter/sec",
            "range": "stddev: 0.000040567863661345247",
            "extra": "mean: 418.10747947704306 usec\nrounds: 3289"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "b58548787d55216f8f5ed51d067b5fd4c5e7e739",
          "message": ":memo: Fix self-documenting Makefile demo in Sphinx docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0de6924",
          "timestamp": "2022-12-15T04:29:11Z",
          "tree_id": "4505b996c9023b9fd24066ac0b4dc136ab3c795b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b58548787d55216f8f5ed51d067b5fd4c5e7e739"
        },
        "date": 1671079497185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 418.80016972912233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003980140854649903",
            "extra": "mean: 2.3877736263736344 msec\nrounds: 455"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.00585679012,
            "unit": "iter/sec",
            "range": "stddev: 0.00002679487045381924",
            "extra": "mean: 1.169582631578946 msec\nrounds: 950"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2288.58773331505,
            "unit": "iter/sec",
            "range": "stddev: 0.000017594799581478168",
            "extra": "mean: 436.95069472013927 usec\nrounds: 2519"
          }
        ]
      }
    ]
  }
}