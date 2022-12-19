window.BENCHMARK_DATA = {
  "lastUpdate": 1671471274577,
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
          "id": "fe17472754912f56f1e89f56efa889633ac24985",
          "message": "Merge pull request #874 from TeoZosa/ci/group=build-prs-under-ci-build-system-label\n\n👷  Group `build` PRs in release notes under \"Continuous Integration Build System\" label\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0407f3a",
          "timestamp": "2022-12-19T05:08:24Z",
          "tree_id": "2f443f229820c94cf2b2dba97e2fb4837c3a007c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fe17472754912f56f1e89f56efa889633ac24985"
        },
        "date": 1671427347011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.2039576318513,
            "unit": "iter/sec",
            "range": "stddev: 0.000630603086283005",
            "extra": "mean: 3.633668674698822 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 573.2282634478015,
            "unit": "iter/sec",
            "range": "stddev: 0.00042830721169840816",
            "extra": "mean: 1.744505747126442 msec\nrounds: 696"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1564.2878116340867,
            "unit": "iter/sec",
            "range": "stddev: 0.00010744524793553796",
            "extra": "mean: 639.2685492801863 usec\nrounds: 1806"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "7e8af62b721cbb858bccf26e9dac8caab9053e1d",
          "message": "Merge pull request #875 from TeoZosa/dependabot/pip/docs/importlib-metadata-5.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5b90cb7",
          "timestamp": "2022-12-19T14:33:52Z",
          "tree_id": "e96e06ea8144f63ef9719d6bc09efdceb95a84c3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7e8af62b721cbb858bccf26e9dac8caab9053e1d"
        },
        "date": 1671470618406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 319.75396253503635,
            "unit": "iter/sec",
            "range": "stddev: 0.00020646883232588033",
            "extra": "mean: 3.12740455840458 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 668.6338721100566,
            "unit": "iter/sec",
            "range": "stddev: 0.00009404205739423814",
            "extra": "mean: 1.4955868102287837 msec\nrounds: 743"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1667.7622988464327,
            "unit": "iter/sec",
            "range": "stddev: 0.00018981558091467696",
            "extra": "mean: 599.605831533478 usec\nrounds: 1852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "cc679f227fd3707192a06ce38adb047b37c6e31d",
          "message": "Merge pull request #879 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.19.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8167d26",
          "timestamp": "2022-12-19T14:51:58Z",
          "tree_id": "e96e06ea8144f63ef9719d6bc09efdceb95a84c3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cc679f227fd3707192a06ce38adb047b37c6e31d"
        },
        "date": 1671471261608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.3088241353391,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317678648838011",
            "extra": "mean: 3.3977914285714585 msec\nrounds: 350"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 653.2421463098599,
            "unit": "iter/sec",
            "range": "stddev: 0.0001056081362177162",
            "extra": "mean: 1.530825905292489 msec\nrounds: 718"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1622.5001031439963,
            "unit": "iter/sec",
            "range": "stddev: 0.00004460774012482488",
            "extra": "mean: 616.3327805417406 usec\nrounds: 1809"
          }
        ]
      }
    ]
  }
}