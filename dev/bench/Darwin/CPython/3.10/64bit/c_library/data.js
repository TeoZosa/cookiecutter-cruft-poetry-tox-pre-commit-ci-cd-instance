window.BENCHMARK_DATA = {
  "lastUpdate": 1673681721646,
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
          "id": "1848c87a7029a568aacdefd9dde57a895255b142",
          "message": "Merge pull request #877 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-5.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@19f687d",
          "timestamp": "2022-12-19T15:02:00Z",
          "tree_id": "e96e06ea8144f63ef9719d6bc09efdceb95a84c3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1848c87a7029a568aacdefd9dde57a895255b142"
        },
        "date": 1671472139211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.56435770394,
            "unit": "iter/sec",
            "range": "stddev: 0.00017902035998738553",
            "extra": "mean: 3.052835195530713 msec\nrounds: 358"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 681.7762874150034,
            "unit": "iter/sec",
            "range": "stddev: 0.00007688983671936495",
            "extra": "mean: 1.4667567917205824 msec\nrounds: 773"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1615.5582302662133,
            "unit": "iter/sec",
            "range": "stddev: 0.00007520585348901066",
            "extra": "mean: 618.9810935104574 usec\nrounds: 1957"
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
          "id": "56b8a25bf0810418c8ed7c49458f3d4944c446be",
          "message": "Merge pull request #878 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f1c8269",
          "timestamp": "2022-12-19T15:10:41Z",
          "tree_id": "c7843a3237623be7e402cbb80b047a87cd427c2a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/56b8a25bf0810418c8ed7c49458f3d4944c446be"
        },
        "date": 1671473054424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 333.9502135889916,
            "unit": "iter/sec",
            "range": "stddev: 0.00013998932883125452",
            "extra": "mean: 2.9944583333333266 msec\nrounds: 360"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 660.5573114182897,
            "unit": "iter/sec",
            "range": "stddev: 0.00006808351378059831",
            "extra": "mean: 1.5138731836195851 msec\nrounds: 757"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1780.8833851865431,
            "unit": "iter/sec",
            "range": "stddev: 0.000021292856778275692",
            "extra": "mean: 561.5190799790928 usec\nrounds: 1913"
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
          "id": "7c75909c63544bea782771299c8cae5594a76959",
          "message": "Merge pull request #881 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.19.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ee84a49",
          "timestamp": "2022-12-20T14:12:55Z",
          "tree_id": "472e695dfdfb5308c05968ff497c4435eb30a082",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7c75909c63544bea782771299c8cae5594a76959"
        },
        "date": 1671547048678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 320.87909613425165,
            "unit": "iter/sec",
            "range": "stddev: 0.00014352115940870474",
            "extra": "mean: 3.116438596491225 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 640.9466073113335,
            "unit": "iter/sec",
            "range": "stddev: 0.0002183955274030021",
            "extra": "mean: 1.5601923601637224 msec\nrounds: 733"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1693.0908029410007,
            "unit": "iter/sec",
            "range": "stddev: 0.00005180738629437343",
            "extra": "mean: 590.6357758620741 usec\nrounds: 1856"
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
          "id": "e19538cb5f4b29de48393ea2c20caf103d204bb8",
          "message": "Merge pull request #884 from TeoZosa/dependabot/github_actions/actions/setup-python-4.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@34ad393",
          "timestamp": "2022-12-22T14:09:50Z",
          "tree_id": "dd36aa2d87c9add84921c03e4b6f1b0961babcd7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e19538cb5f4b29de48393ea2c20caf103d204bb8"
        },
        "date": 1671718752428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.49966809850264,
            "unit": "iter/sec",
            "range": "stddev: 0.00017057592606735435",
            "extra": "mean: 3.4071588785047138 msec\nrounds: 321"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 607.3944424708174,
            "unit": "iter/sec",
            "range": "stddev: 0.00017324079269002995",
            "extra": "mean: 1.6463766048502257 msec\nrounds: 701"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1717.1189210677185,
            "unit": "iter/sec",
            "range": "stddev: 0.000060416300971594115",
            "extra": "mean: 582.3708467309835 usec\nrounds: 1866"
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
          "id": "f31b1ee2a1d45d6c3df077794516fc82f0ddde2c",
          "message": "Merge pull request #886 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.21.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c9a7462",
          "timestamp": "2022-12-26T14:10:11Z",
          "tree_id": "afd1adf1a51b1edbe408e689d44f22d5dc6a9693",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f31b1ee2a1d45d6c3df077794516fc82f0ddde2c"
        },
        "date": 1672065362460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.36622375100274,
            "unit": "iter/sec",
            "range": "stddev: 0.00016875117755355172",
            "extra": "mean: 3.3072477064220496 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 610.036953823555,
            "unit": "iter/sec",
            "range": "stddev: 0.00019831976146714902",
            "extra": "mean: 1.6392449567723018 msec\nrounds: 694"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1653.3020823127702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006750493705270397",
            "extra": "mean: 604.8501424501447 usec\nrounds: 1755"
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
          "id": "fb43f5be8d870019d349cdaf498e5462a574ddce",
          "message": "Merge pull request #889 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.12.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6ea25b7",
          "timestamp": "2022-12-29T14:16:29Z",
          "tree_id": "6ea4bc0f09782059da00db33b12b8642036a70d8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fb43f5be8d870019d349cdaf498e5462a574ddce"
        },
        "date": 1672324723597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.6822152647919,
            "unit": "iter/sec",
            "range": "stddev: 0.0006100125069058682",
            "extra": "mean: 3.806881249999999 msec\nrounds: 320"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 575.6610838457382,
            "unit": "iter/sec",
            "range": "stddev: 0.00012539198594108903",
            "extra": "mean: 1.7371332335328982 msec\nrounds: 668"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1587.7452793518642,
            "unit": "iter/sec",
            "range": "stddev: 0.00004746023316642779",
            "extra": "mean: 629.8239478364006 usec\nrounds: 1687"
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
          "id": "6815edecc2ef0fec06ac611b2c738eb29eedd036",
          "message": "Merge pull request #891 from TeoZosa/dependabot/pip/cruft-2.12.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5b5d4c1",
          "timestamp": "2022-12-29T14:25:39Z",
          "tree_id": "1328a4d0047e470680f38cfb24d9cd1f32be9edb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6815edecc2ef0fec06ac611b2c738eb29eedd036"
        },
        "date": 1672326390100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 249.6969658657927,
            "unit": "iter/sec",
            "range": "stddev: 0.0004509804462160207",
            "extra": "mean: 4.004854430379746 msec\nrounds: 316"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 378.6189374570623,
            "unit": "iter/sec",
            "range": "stddev: 0.007657920929878759",
            "extra": "mean: 2.6411779788838645 msec\nrounds: 663"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1448.1636528123422,
            "unit": "iter/sec",
            "range": "stddev: 0.00011295281489634116",
            "extra": "mean: 690.5296912113449 usec\nrounds: 1684"
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
          "id": "88739c708a85004674be9ee4cca2ee43800c0788",
          "message": "Merge pull request #892 from TeoZosa/dependabot/pip/typer-0.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@46ae7df",
          "timestamp": "2022-12-29T14:34:21Z",
          "tree_id": "1fc1efde27632593708e579dbaa1b3e94a7d3aed",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/88739c708a85004674be9ee4cca2ee43800c0788"
        },
        "date": 1672330041914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.4168549892621,
            "unit": "iter/sec",
            "range": "stddev: 0.0001812856900380559",
            "extra": "mean: 3.1804910714285715 msec\nrounds: 336"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 640.4156064081094,
            "unit": "iter/sec",
            "range": "stddev: 0.00011338369837601373",
            "extra": "mean: 1.5614859943977426 msec\nrounds: 714"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1704.745509830373,
            "unit": "iter/sec",
            "range": "stddev: 0.00016773570500825576",
            "extra": "mean: 586.5978201634933 usec\nrounds: 1835"
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
          "id": "5d21f5f21444b9d48d22ed9db6e210b1e3064de1",
          "message": "Merge pull request #890 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.0.19\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9154358",
          "timestamp": "2022-12-30T12:16:29Z",
          "tree_id": "0781df045e47f3b6d6038dff68bfb3c05d314aef",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5d21f5f21444b9d48d22ed9db6e210b1e3064de1"
        },
        "date": 1672402776426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.9483184519639,
            "unit": "iter/sec",
            "range": "stddev: 0.00013999375920740754",
            "extra": "mean: 3.1451652421652336 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 649.0616749309343,
            "unit": "iter/sec",
            "range": "stddev: 0.00011972675282887686",
            "extra": "mean: 1.540685636856326 msec\nrounds: 738"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1719.5233996811407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000932746838266536",
            "extra": "mean: 581.5564941921899 usec\nrounds: 1894"
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
          "id": "b03387ed45d644095057a8d955b6675bb1b8a230",
          "message": "Merge pull request #885 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-gh-actions-3.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e25f0b5",
          "timestamp": "2022-12-30T12:22:59Z",
          "tree_id": "afc9628d6f040f353a3466bace7e7b149335776a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b03387ed45d644095057a8d955b6675bb1b8a230"
        },
        "date": 1672404337498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.81183668362056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006692090472905977",
            "extra": "mean: 3.9399265734265647 msec\nrounds: 286"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 582.8836097311028,
            "unit": "iter/sec",
            "range": "stddev: 0.0001657482642909245",
            "extra": "mean: 1.7156083707025531 msec\nrounds: 669"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1623.517187635267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000841550989577601",
            "extra": "mean: 615.9466666666765 usec\nrounds: 1725"
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
          "id": "7b7f50bea09058ba1b7c7860940f6647acaf4444",
          "message": "Merge pull request #882 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-e8d1546\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f1e5cf",
          "timestamp": "2022-12-30T12:24:39Z",
          "tree_id": "afc9628d6f040f353a3466bace7e7b149335776a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7b7f50bea09058ba1b7c7860940f6647acaf4444"
        },
        "date": 1672404930432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.7903655506424,
            "unit": "iter/sec",
            "range": "stddev: 0.00031565804695559525",
            "extra": "mean: 3.511354740061165 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 570.5809460846759,
            "unit": "iter/sec",
            "range": "stddev: 0.00022252613080726627",
            "extra": "mean: 1.752599708879162 msec\nrounds: 687"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1472.2129102255672,
            "unit": "iter/sec",
            "range": "stddev: 0.00010400146748829776",
            "extra": "mean: 679.2495793606264 usec\nrounds: 1783"
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
          "id": "cfd274c5a5d3467c7779956255e20d715eb63d2b",
          "message": "Merge pull request #893 from TeoZosa/fix/tox-parallel-mode\n\n💚 Fix tox parallel command\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e4560fb",
          "timestamp": "2022-12-30T13:06:30Z",
          "tree_id": "efcb1374642ae17c93804a0cd24ae0a3c589af5c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cfd274c5a5d3467c7779956255e20d715eb63d2b"
        },
        "date": 1672406528497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 346.5775931029143,
            "unit": "iter/sec",
            "range": "stddev: 0.00014159232777537396",
            "extra": "mean: 2.885356756756792 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 703.0576731481293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279488158181174",
            "extra": "mean: 1.4223584183673466 msec\nrounds: 784"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1835.9575199652122,
            "unit": "iter/sec",
            "range": "stddev: 0.00003567213667420936",
            "extra": "mean: 544.6749116607817 usec\nrounds: 1981"
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
          "id": "ec1e6503c3e2fa8401ddbc83d978d26e7f35b986",
          "message": "Merge pull request #894 from TeoZosa/fix/python-310-and-311-benchmark-environments\n\n🔧  Add Python 3.10 & 3.11 to benchmark suite\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@198565e",
          "timestamp": "2022-12-30T13:28:53Z",
          "tree_id": "29c3737da4ef8c4731e298e94760831050bd8f98",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ec1e6503c3e2fa8401ddbc83d978d26e7f35b986"
        },
        "date": 1672429154181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.30455891634483,
            "unit": "iter/sec",
            "range": "stddev: 0.00042712853975553425",
            "extra": "mean: 3.4328333333333596 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 578.5883943838494,
            "unit": "iter/sec",
            "range": "stddev: 0.00046105755008693614",
            "extra": "mean: 1.7283443804034826 msec\nrounds: 694"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1479.1762074924827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003646052522222305",
            "extra": "mean: 676.0519774011319 usec\nrounds: 1770"
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
          "id": "eb27e9d4adef73edff8d932066d87ba7bcc9197f",
          "message": "Merge pull request #899 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f961beb",
          "timestamp": "2022-12-30T14:26:01Z",
          "tree_id": "d1d4bf33df1ec10b310de4eab3f8e52276b0bf7d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/eb27e9d4adef73edff8d932066d87ba7bcc9197f"
        },
        "date": 1672439733030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.4721044475641,
            "unit": "iter/sec",
            "range": "stddev: 0.00028433297486122857",
            "extra": "mean: 3.284373134328367 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 647.1030712718283,
            "unit": "iter/sec",
            "range": "stddev: 0.00019332722415593508",
            "extra": "mean: 1.5453488700564837 msec\nrounds: 708"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1733.2709232216457,
            "unit": "iter/sec",
            "range": "stddev: 0.000041571967961727664",
            "extra": "mean: 576.9438502673843 usec\nrounds: 1870"
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
          "id": "5752fc476fb7116d99125ebbdb4b0f0b817ffe76",
          "message": "Merge pull request #901 from TeoZosa/dependabot/pip/docs/pygments-2.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@88db6af",
          "timestamp": "2023-01-02T14:31:39Z",
          "tree_id": "ed97a85e814b01769fd9c0d8024d16caf38005a7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5752fc476fb7116d99125ebbdb4b0f0b817ffe76"
        },
        "date": 1672679301211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.2879428076531,
            "unit": "iter/sec",
            "range": "stddev: 0.0017197057047343863",
            "extra": "mean: 3.3980325203251738 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 669.8722810940762,
            "unit": "iter/sec",
            "range": "stddev: 0.00014934069570324756",
            "extra": "mean: 1.492821882951686 msec\nrounds: 786"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1778.634257197439,
            "unit": "iter/sec",
            "range": "stddev: 0.00006385472346992465",
            "extra": "mean: 562.2291350531398 usec\nrounds: 1977"
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
          "id": "fe74cda663c3948f469819e1a502bdc7ed309583",
          "message": "Merge pull request #904 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.1.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0242914",
          "timestamp": "2023-01-02T15:07:22Z",
          "tree_id": "ea2a6a0046942be2f8443815fbdf3d582f406c17",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fe74cda663c3948f469819e1a502bdc7ed309583"
        },
        "date": 1672685632823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 316.3780524025368,
            "unit": "iter/sec",
            "range": "stddev: 0.00017276487177362947",
            "extra": "mean: 3.1607755102040755 msec\nrounds: 343"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 654.5718144622434,
            "unit": "iter/sec",
            "range": "stddev: 0.00007132207230251623",
            "extra": "mean: 1.5277162534435424 msec\nrounds: 726"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1713.641573741587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000319163597259294",
            "extra": "mean: 583.5526024363352 usec\nrounds: 1806"
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
          "id": "7b7a817743298f6dc63c867095dadf0c9309af10",
          "message": "Merge pull request #903 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/pygments-2.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@70a7ef1",
          "timestamp": "2023-01-02T15:09:16Z",
          "tree_id": "ea2a6a0046942be2f8443815fbdf3d582f406c17",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7b7a817743298f6dc63c867095dadf0c9309af10"
        },
        "date": 1672686720906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 331.83794702923586,
            "unit": "iter/sec",
            "range": "stddev: 0.00023746832155635143",
            "extra": "mean: 3.013519125683047 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 698.6621287745401,
            "unit": "iter/sec",
            "range": "stddev: 0.0000908429698308456",
            "extra": "mean: 1.4313070063694582 msec\nrounds: 785"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1824.2707484534158,
            "unit": "iter/sec",
            "range": "stddev: 0.000020849976177649233",
            "extra": "mean: 548.1642463695601 usec\nrounds: 1997"
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
          "id": "9b32b2cece43cac66256427f8cea161ff90199fc",
          "message": "Merge pull request #907 from TeoZosa/dependabot/pip/pygments-2.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ffb2315",
          "timestamp": "2023-01-02T15:50:06Z",
          "tree_id": "98d20a4b303c203f5882091d8220bc7f2be45ef3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9b32b2cece43cac66256427f8cea161ff90199fc"
        },
        "date": 1672692466715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.9244619247489,
            "unit": "iter/sec",
            "range": "stddev: 0.00044654573099004667",
            "extra": "mean: 3.7047401812688827 msec\nrounds: 331"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 575.9059908371079,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951810443807502",
            "extra": "mean: 1.7363945086705044 msec\nrounds: 692"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1521.5577678363218,
            "unit": "iter/sec",
            "range": "stddev: 0.00008733610165626543",
            "extra": "mean: 657.2211855104359 usec\nrounds: 1822"
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
          "id": "61735f45cd8575135e7fcc0c9f597836870bb681",
          "message": "Merge pull request #906 from TeoZosa/dependabot/pip/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 5.2.0 to 6.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7260246",
          "timestamp": "2023-01-03T02:36:58Z",
          "tree_id": "6995670456d6112476c25beb92ecd57863f9b5f1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/61735f45cd8575135e7fcc0c9f597836870bb681"
        },
        "date": 1672767039800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.536336071946,
            "unit": "iter/sec",
            "range": "stddev: 0.000334535122994544",
            "extra": "mean: 3.5646006289307968 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 610.2387602737871,
            "unit": "iter/sec",
            "range": "stddev: 0.00013648850976017625",
            "extra": "mean: 1.6387028571429063 msec\nrounds: 700"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1619.9721100385404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000704601357989614",
            "extra": "mean: 617.2945779765364 usec\nrounds: 1789"
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
          "id": "bc42ecf138fb92ac89e510315a4471f9f2c9917f",
          "message": "Merge pull request #900 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 5.2.0 to 6.0.0 in /docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b178d4e",
          "timestamp": "2023-01-03T02:47:54Z",
          "tree_id": "6995670456d6112476c25beb92ecd57863f9b5f1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bc42ecf138fb92ac89e510315a4471f9f2c9917f"
        },
        "date": 1672778021580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 315.6436552068771,
            "unit": "iter/sec",
            "range": "stddev: 0.00034093067224181124",
            "extra": "mean: 3.1681295774647724 msec\nrounds: 355"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 668.241720923272,
            "unit": "iter/sec",
            "range": "stddev: 0.00012966589750080786",
            "extra": "mean: 1.4964644808743104 msec\nrounds: 732"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1669.3752360967217,
            "unit": "iter/sec",
            "range": "stddev: 0.00007260806724482769",
            "extra": "mean: 599.026497085321 usec\nrounds: 1887"
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
          "id": "fae36059f38cb5cd0e707405620f4a9b1ef23a6e",
          "message": "Merge pull request #908 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/sphinxcontrib-confluencebuilder-2.0.0\n\n⬆️ Bump sphinxcontrib-confluencebuilder from 1.9.0 to 2.0.0 in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a551aed",
          "timestamp": "2023-01-03T02:53:52Z",
          "tree_id": "0d00e0dff25e5d474c34ceb40ccfdbee81cb0e01",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fae36059f38cb5cd0e707405620f4a9b1ef23a6e"
        },
        "date": 1672781518875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 318.2491638682421,
            "unit": "iter/sec",
            "range": "stddev: 0.00010282146427158665",
            "extra": "mean: 3.1421920731707207 msec\nrounds: 328"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 664.6820421877095,
            "unit": "iter/sec",
            "range": "stddev: 0.00006824754876690923",
            "extra": "mean: 1.5044787379972497 msec\nrounds: 729"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1725.241552755183,
            "unit": "iter/sec",
            "range": "stddev: 0.000024465950853845355",
            "extra": "mean: 579.6289791438284 usec\nrounds: 1822"
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
          "id": "b77a5b9a4fe3f1313c531e345646a0d9c833c3d8",
          "message": "Merge pull request #909 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.22.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6dc1076",
          "timestamp": "2023-01-03T14:18:36Z",
          "tree_id": "633ec7e30889c661b228f528f8c7f09592baae80",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b77a5b9a4fe3f1313c531e345646a0d9c833c3d8"
        },
        "date": 1672789453530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.3808980579188,
            "unit": "iter/sec",
            "range": "stddev: 0.00028445929456159244",
            "extra": "mean: 3.431933962264151 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 637.3573970140436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001005713696737991",
            "extra": "mean: 1.5689784172662011 msec\nrounds: 695"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1667.2994388368838,
            "unit": "iter/sec",
            "range": "stddev: 0.000022963381022822875",
            "extra": "mean: 599.7722884724323 usec\nrounds: 1761"
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
          "id": "807840626c3c3967b09a37615d662939d2a5e475",
          "message": "Merge pull request #910 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.1.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@feb74e8",
          "timestamp": "2023-01-03T14:26:03Z",
          "tree_id": "633ec7e30889c661b228f528f8c7f09592baae80",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/807840626c3c3967b09a37615d662939d2a5e475"
        },
        "date": 1672791041319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 310.9095645305435,
            "unit": "iter/sec",
            "range": "stddev: 0.00023358573132410625",
            "extra": "mean: 3.216369369369339 msec\nrounds: 333"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 670.846459781618,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518526357982045",
            "extra": "mean: 1.4906540616246704 msec\nrounds: 714"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1612.0246484867248,
            "unit": "iter/sec",
            "range": "stddev: 0.00014197904977430764",
            "extra": "mean: 620.3379091868986 usec\nrounds: 1894"
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
          "id": "004120e32285cc3062d2dc1302e652928acc3a21",
          "message": "Merge pull request #915 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.2.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@782f1bc",
          "timestamp": "2023-01-05T14:20:25Z",
          "tree_id": "eed8e22e6360d42ae0c9ee72096434b562bbf9b0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/004120e32285cc3062d2dc1302e652928acc3a21"
        },
        "date": 1672931196156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 316.21105438927543,
            "unit": "iter/sec",
            "range": "stddev: 0.00034979705107667945",
            "extra": "mean: 3.1624447852760325 msec\nrounds: 326"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 654.4890430574352,
            "unit": "iter/sec",
            "range": "stddev: 0.00008732832711608105",
            "extra": "mean: 1.527909459459422 msec\nrounds: 740"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1644.073937264746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000844454287376815",
            "extra": "mean: 608.2451508620743 usec\nrounds: 1856"
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
          "id": "6a6e5333594736c44537014ad628e9339859cad1",
          "message": "Merge pull request #922 from TeoZosa/dependabot/pip/gitpython-3.1.30\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@205f2f9",
          "timestamp": "2023-01-07T05:18:11Z",
          "tree_id": "a2b1649c5c5e7fe99aca16e7e03a6b27cd0663bc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6a6e5333594736c44537014ad628e9339859cad1"
        },
        "date": 1673069320586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.51583258727516,
            "unit": "iter/sec",
            "range": "stddev: 0.00030989793421161335",
            "extra": "mean: 3.527139880952392 msec\nrounds: 336"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 539.6832220700518,
            "unit": "iter/sec",
            "range": "stddev: 0.0003550925050413429",
            "extra": "mean: 1.8529388335704056 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1598.5392934866818,
            "unit": "iter/sec",
            "range": "stddev: 0.00010476350168561036",
            "extra": "mean: 625.5711098717084 usec\nrounds: 1793"
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
          "id": "a27d13a56b3b7660d68b03b68c08a8c38a3cf4fa",
          "message": "Merge pull request #923 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.2.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@92b79a9",
          "timestamp": "2023-01-07T05:27:59Z",
          "tree_id": "a00ebcb3dd8f9c7842859bc2e7d93613a7d1f8c6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a27d13a56b3b7660d68b03b68c08a8c38a3cf4fa"
        },
        "date": 1673069900093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 336.97345563945566,
            "unit": "iter/sec",
            "range": "stddev: 0.0004306804020683428",
            "extra": "mean: 2.967592797783897 msec\nrounds: 361"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 631.1265732119051,
            "unit": "iter/sec",
            "range": "stddev: 0.0003175356610946601",
            "extra": "mean: 1.5844682230869134 msec\nrounds: 771"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1747.869978438982,
            "unit": "iter/sec",
            "range": "stddev: 0.00012179795160686138",
            "extra": "mean: 572.1249362570421 usec\nrounds: 1961"
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
          "id": "7be913f0b9b301d77804680f303cf2874d7002a5",
          "message": "Merge pull request #943 from TeoZosa/ci/unpin-nbqa-deps\n\n📌 Unpin `nbqa` deps\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@39b2ebd",
          "timestamp": "2023-01-14T07:26:18Z",
          "tree_id": "f5f830f3c44d665f1176b5afd30184b74647aaa4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7be913f0b9b301d77804680f303cf2874d7002a5"
        },
        "date": 1673681717642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.62257675878953,
            "unit": "iter/sec",
            "range": "stddev: 0.0001396796133373376",
            "extra": "mean: 3.1483908045976996 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 626.401377589152,
            "unit": "iter/sec",
            "range": "stddev: 0.00015601570197716446",
            "extra": "mean: 1.5964204993429725 msec\nrounds: 761"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1669.7290585092178,
            "unit": "iter/sec",
            "range": "stddev: 0.00004614329934554695",
            "extra": "mean: 598.8995609220748 usec\nrounds: 1822"
          }
        ]
      }
    ]
  }
}