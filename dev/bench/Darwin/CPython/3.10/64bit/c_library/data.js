window.BENCHMARK_DATA = {
  "lastUpdate": 1671361896147,
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
        "date": 1671035623833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.2453318852082,
            "unit": "iter/sec",
            "range": "stddev: 0.0003292112627894183",
            "extra": "mean: 3.4101139601139607 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 615.8521886603115,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005966455586702",
            "extra": "mean: 1.6237662517289106 msec\nrounds: 723"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1576.6371510537613,
            "unit": "iter/sec",
            "range": "stddev: 0.0001098184623873407",
            "extra": "mean: 634.2613449972557 usec\nrounds: 1829"
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
        "date": 1671079441751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.24791993812505,
            "unit": "iter/sec",
            "range": "stddev: 0.0001382732742437143",
            "extra": "mean: 3.7558978873239504 msec\nrounds: 284"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 542.1535966395779,
            "unit": "iter/sec",
            "range": "stddev: 0.00010661077767739778",
            "extra": "mean: 1.8444957410561953 msec\nrounds: 587"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1430.3521496190508,
            "unit": "iter/sec",
            "range": "stddev: 0.00003344192866341319",
            "extra": "mean: 699.1285329744373 usec\nrounds: 1486"
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
          "id": "094412a8ffab585bab8f56cd373d7fc78ef950d4",
          "message": "Merge pull request #872 from TeoZosa/fix/flaky-documentation-build-test-ci-job\n\n💚  Fix flaky documentation building CI job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@adf609c",
          "timestamp": "2022-12-16T11:03:40Z",
          "tree_id": "ad4751bef3bdf740515f4d929e4ba4835b7d9655",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/094412a8ffab585bab8f56cd373d7fc78ef950d4"
        },
        "date": 1671189446696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.5876126250366,
            "unit": "iter/sec",
            "range": "stddev: 0.00015577327622365034",
            "extra": "mean: 3.779466431095402 msec\nrounds: 283"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 536.9432254611955,
            "unit": "iter/sec",
            "range": "stddev: 0.00009840598755953997",
            "extra": "mean: 1.8623942953020258 msec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1388.082007707584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000270485598963983",
            "extra": "mean: 720.4185303514589 usec\nrounds: 1565"
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
          "id": "5828143d07afeab289c904a17618fd20f318c87e",
          "message": "Merge pull request #873 from TeoZosa/lint/configure-black-for-line-length-120\n\n🔧 Configure Black with a max line length of 120\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@eed7f2b",
          "timestamp": "2022-12-18T11:07:40Z",
          "tree_id": "b28cd9140de645ae68e331f001e8ac7a1356cb44",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5828143d07afeab289c904a17618fd20f318c87e"
        },
        "date": 1671361892885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.51716416825474,
            "unit": "iter/sec",
            "range": "stddev: 0.00035182646233068764",
            "extra": "mean: 3.294706586826338 msec\nrounds: 334"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 662.1116612670445,
            "unit": "iter/sec",
            "range": "stddev: 0.00006798022212397703",
            "extra": "mean: 1.5103192686356834 msec\nrounds: 711"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1744.1538898732629,
            "unit": "iter/sec",
            "range": "stddev: 0.000042764626559263205",
            "extra": "mean: 573.3439037725416 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}