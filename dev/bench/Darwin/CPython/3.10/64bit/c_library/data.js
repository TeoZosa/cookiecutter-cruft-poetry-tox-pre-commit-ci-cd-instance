window.BENCHMARK_DATA = {
  "lastUpdate": 1677809807199,
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
          "id": "81965ee977478c6e0eb220b3003982de3cf08a5a",
          "message": "Merge pull request #944 from TeoZosa/ci/migrate-linters-to-ruff\n\n🏗️ Migrate linters to `ruff`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e43e5a9",
          "timestamp": "2023-01-14T08:29:37Z",
          "tree_id": "b5e29000088cf36751adef7dfd6a82fbb07408e0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/81965ee977478c6e0eb220b3003982de3cf08a5a"
        },
        "date": 1673691453018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 324.7300385699773,
            "unit": "iter/sec",
            "range": "stddev: 0.00011371336730127532",
            "extra": "mean: 3.0794810495626703 msec\nrounds: 343"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 657.2316611238026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008032224421824668",
            "extra": "mean: 1.5215335157318755 msec\nrounds: 731"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1730.4246866503577,
            "unit": "iter/sec",
            "range": "stddev: 0.000022475206044487987",
            "extra": "mean: 577.8928188638677 usec\nrounds: 1866"
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
          "id": "6b560cd137cbfdd0ee698f474e04c284fe57c413",
          "message": "Merge pull request #942 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.2.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@56fe5cb",
          "timestamp": "2023-01-14T08:45:40Z",
          "tree_id": "7a469ed2faeaf93e17e67df117c1e8ef71be8765",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6b560cd137cbfdd0ee698f474e04c284fe57c413"
        },
        "date": 1673696324429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.7332282849683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002886892739050378",
            "extra": "mean: 3.487562310030407 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 606.8360953044705,
            "unit": "iter/sec",
            "range": "stddev: 0.0004295364599841873",
            "extra": "mean: 1.6478914285714426 msec\nrounds: 700"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1695.471713735738,
            "unit": "iter/sec",
            "range": "stddev: 0.00001679652576302777",
            "extra": "mean: 589.8063600227443 usec\nrounds: 1761"
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
          "id": "595f791049ed012bb8e1944eb014de4f1ac558de",
          "message": "Merge pull request #941 from TeoZosa/dependabot/github_actions/actions/setup-python-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@575ef3f",
          "timestamp": "2023-01-14T09:00:10Z",
          "tree_id": "95728a899d9e62959766a05f4885d7b9958c50d8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/595f791049ed012bb8e1944eb014de4f1ac558de"
        },
        "date": 1673698586487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.5876942060686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498958446720789",
            "extra": "mean: 3.406137313432838 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 616.3748525966244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836298373851621",
            "extra": "mean: 1.6223893557423121 msec\nrounds: 714"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1678.7042794540478,
            "unit": "iter/sec",
            "range": "stddev: 0.000063153743407789",
            "extra": "mean: 595.6975342466051 usec\nrounds: 1825"
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
          "id": "ee9d4194b5e8e8116b15cb371c5ca7e9e111d526",
          "message": "Merge pull request #928 from TeoZosa/dependabot/pip/hypothesis-6.62.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b9f52ef",
          "timestamp": "2023-01-14T09:07:20Z",
          "tree_id": "95728a899d9e62959766a05f4885d7b9958c50d8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ee9d4194b5e8e8116b15cb371c5ca7e9e111d526"
        },
        "date": 1673701135444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.2130051687607,
            "unit": "iter/sec",
            "range": "stddev: 0.00009741599476865706",
            "extra": "mean: 3.2657006172839655 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 632.661637723849,
            "unit": "iter/sec",
            "range": "stddev: 0.00005401242705590276",
            "extra": "mean: 1.5806237337192408 msec\nrounds: 691"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1649.0311941734806,
            "unit": "iter/sec",
            "range": "stddev: 0.00002181556487920265",
            "extra": "mean: 606.4166666666455 usec\nrounds: 1740"
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
          "id": "fc68bd72362e49bde481499c399808df9be2dd15",
          "message": "Merge pull request #931 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@774388e",
          "timestamp": "2023-01-14T09:09:39Z",
          "tree_id": "95728a899d9e62959766a05f4885d7b9958c50d8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fc68bd72362e49bde481499c399808df9be2dd15"
        },
        "date": 1673705123118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.7391226325505,
            "unit": "iter/sec",
            "range": "stddev: 0.00016211228163586153",
            "extra": "mean: 3.451380645161296 msec\nrounds: 310"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 555.8183538316056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003262665133810426",
            "extra": "mean: 1.7991489361701913 msec\nrounds: 658"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1487.9911765044728,
            "unit": "iter/sec",
            "range": "stddev: 0.00007823823236987259",
            "extra": "mean: 672.0469958357943 usec\nrounds: 1681"
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
          "id": "b386849ca52c90ea723d5b45331daa279f83ab6c",
          "message": "Merge pull request #934 from TeoZosa/dependabot/pip/docs/poetry-1.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@60d518c",
          "timestamp": "2023-01-14T09:24:04Z",
          "tree_id": "828bfbe0a350e24cfc4918597f438713cc4f2ebe",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b386849ca52c90ea723d5b45331daa279f83ab6c"
        },
        "date": 1673706779783,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 334.7119141230365,
            "unit": "iter/sec",
            "range": "stddev: 0.00009549489865700323",
            "extra": "mean: 2.987643874643825 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 689.2091256085954,
            "unit": "iter/sec",
            "range": "stddev: 0.000046603385707822073",
            "extra": "mean: 1.4509384203480555 msec\nrounds: 747"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1710.922083733827,
            "unit": "iter/sec",
            "range": "stddev: 0.00003995573601988324",
            "extra": "mean: 584.4801522566429 usec\nrounds: 1839"
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
          "id": "1cf849c5c53f99f466c088cc54ed043e0e314056",
          "message": "Merge pull request #940 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@81a7377",
          "timestamp": "2023-01-14T09:26:26Z",
          "tree_id": "828bfbe0a350e24cfc4918597f438713cc4f2ebe",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1cf849c5c53f99f466c088cc54ed043e0e314056"
        },
        "date": 1673707199928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 330.39454461387726,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598530576602065",
            "extra": "mean: 3.026684357541895 msec\nrounds: 358"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 685.4767781140589,
            "unit": "iter/sec",
            "range": "stddev: 0.000100558732547783",
            "extra": "mean: 1.4588386243386444 msec\nrounds: 756"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1741.7152622800056,
            "unit": "iter/sec",
            "range": "stddev: 0.00005482607576818253",
            "extra": "mean: 574.1466597077082 usec\nrounds: 1916"
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
          "id": "8d1b7bc8f2e0458c82bb320232c04f992fbad495",
          "message": "Merge pull request #938 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@799a1e0",
          "timestamp": "2023-01-14T09:32:24Z",
          "tree_id": "f83d07b44baa3944424a9632f7b098bc85c33628",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8d1b7bc8f2e0458c82bb320232c04f992fbad495"
        },
        "date": 1673709030093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.60990284234316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002076719893183714",
            "extra": "mean: 2.9796498599439785 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 675.9163609161889,
            "unit": "iter/sec",
            "range": "stddev: 0.00019113637120178508",
            "extra": "mean: 1.4794729907773254 msec\nrounds: 759"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1740.9128302700828,
            "unit": "iter/sec",
            "range": "stddev: 0.00009591543697598317",
            "extra": "mean: 574.4112988384728 usec\nrounds: 1894"
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
          "id": "3369d95669d8fe23b8550d419165d61454c54122",
          "message": "Merge pull request #926 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-39cecc9\n\n⬆️ Bump python from `8f39972` to `39cecc9` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04fe209",
          "timestamp": "2023-01-14T10:08:14Z",
          "tree_id": "2932f07b5603bdbe8d41c30019ef13fb49900173",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3369d95669d8fe23b8550d419165d61454c54122"
        },
        "date": 1673712295943,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 316.42495316077583,
            "unit": "iter/sec",
            "range": "stddev: 0.00018344387751281492",
            "extra": "mean: 3.160307017543901 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 677.8055433060447,
            "unit": "iter/sec",
            "range": "stddev: 0.00006550983602170132",
            "extra": "mean: 1.4753493975903897 msec\nrounds: 747"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1792.2869468364288,
            "unit": "iter/sec",
            "range": "stddev: 0.000018850620317633364",
            "extra": "mean: 557.946372239726 usec\nrounds: 1902"
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
          "id": "8445cc2dabdda1c4cbbe73ca98d719759a90464f",
          "message": "Merge pull request #945 from TeoZosa/docs/document-ruff-usage\n\n📝 Document Ruff usage\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@df4a43e",
          "timestamp": "2023-01-14T11:04:30Z",
          "tree_id": "bd259ea5c65f225c18364e0628506fbcc62c1cf6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8445cc2dabdda1c4cbbe73ca98d719759a90464f"
        },
        "date": 1673714837860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.67363279980907,
            "unit": "iter/sec",
            "range": "stddev: 0.00007059092751462023",
            "extra": "mean: 3.033302941176493 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 672.1172353703755,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033295294066845",
            "extra": "mean: 1.4878356741572654 msec\nrounds: 712"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1732.1302050557404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003166032399257854",
            "extra": "mean: 577.3238045738136 usec\nrounds: 1924"
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
          "id": "aea8580d46a4d80a3a173240c97384331f553366",
          "message": "Merge pull request #946 from TeoZosa/feat/replace-pandas-with-polars\n\n✨ Replace pandas with Polars\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d7b6fc5",
          "timestamp": "2023-01-16T13:22:02Z",
          "tree_id": "dad462f6a9fc884d389a17a849e2eb4ab60ae1ac",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/aea8580d46a4d80a3a173240c97384331f553366"
        },
        "date": 1673875580848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.6457967420251,
            "unit": "iter/sec",
            "range": "stddev: 0.00029365250070082795",
            "extra": "mean: 3.537997067448749 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 643.9178946309561,
            "unit": "iter/sec",
            "range": "stddev: 0.00013453349443348422",
            "extra": "mean: 1.552993026499322 msec\nrounds: 717"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1719.107809037894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008040689695837093",
            "extra": "mean: 581.697084233277 usec\nrounds: 1852"
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
          "id": "9ff0890a7dd8664911799d488c0f01fc890bea56",
          "message": "Merge pull request #947 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d56014e",
          "timestamp": "2023-01-16T14:16:28Z",
          "tree_id": "b3a927a20bee020970682e3b31401c05aef5a4ed",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9ff0890a7dd8664911799d488c0f01fc890bea56"
        },
        "date": 1673880936972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 232.37171875422308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006698616663420758",
            "extra": "mean: 4.303449685534618 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 564.0545428019767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005649560772108688",
            "extra": "mean: 1.7728781954887494 msec\nrounds: 665"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1601.8579797102732,
            "unit": "iter/sec",
            "range": "stddev: 0.000142657507434485",
            "extra": "mean: 624.2750684931939 usec\nrounds: 1825"
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
          "id": "625e37488fbc7aea0b1909a9a7a8ece7ff1f8772",
          "message": "Merge pull request #948 from TeoZosa/dependabot/pip/hypothesis-6.62.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cb9bd72",
          "timestamp": "2023-01-16T14:23:44Z",
          "tree_id": "b3a927a20bee020970682e3b31401c05aef5a4ed",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/625e37488fbc7aea0b1909a9a7a8ece7ff1f8772"
        },
        "date": 1673881996669,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.21723176647305,
            "unit": "iter/sec",
            "range": "stddev: 0.00019621161551415186",
            "extra": "mean: 3.1926723646723723 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 665.3958840763755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008232669189673309",
            "extra": "mean: 1.5028647214854396 msec\nrounds: 754"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1774.8335589577766,
            "unit": "iter/sec",
            "range": "stddev: 0.000043969792131007034",
            "extra": "mean: 563.4331145886283 usec\nrounds: 1981"
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
          "id": "5fa6b8792709d463bd6a888d2abc3ac46e055ee4",
          "message": "Merge pull request #949 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.20.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6cc4190",
          "timestamp": "2023-01-16T14:30:17Z",
          "tree_id": "4362cd398803e9a5405ee97d1da92ecef576d025",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5fa6b8792709d463bd6a888d2abc3ac46e055ee4"
        },
        "date": 1673882910233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.252499582958,
            "unit": "iter/sec",
            "range": "stddev: 0.0006710702041733822",
            "extra": "mean: 3.364143283582102 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 639.9627658027171,
            "unit": "iter/sec",
            "range": "stddev: 0.00014600661621941592",
            "extra": "mean: 1.5625909090909087 msec\nrounds: 704"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1688.2838950886344,
            "unit": "iter/sec",
            "range": "stddev: 0.00006721643228217734",
            "extra": "mean: 592.3174431202522 usec\nrounds: 1846"
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
          "id": "126eca876affc4ad955b8e7822c4ffc2a80d4230",
          "message": "Merge pull request #950 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-2.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@df2c59b",
          "timestamp": "2023-01-17T14:20:39Z",
          "tree_id": "7b03dcd5c9968507015baa959209f18c043c27d6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/126eca876affc4ad955b8e7822c4ffc2a80d4230"
        },
        "date": 1673974324643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.9372219785723,
            "unit": "iter/sec",
            "range": "stddev: 0.0001597093996680966",
            "extra": "mean: 3.546888888888895 msec\nrounds: 297"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 597.3581086774708,
            "unit": "iter/sec",
            "range": "stddev: 0.00017011138260591044",
            "extra": "mean: 1.6740377094971788 msec\nrounds: 716"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1673.4928371541644,
            "unit": "iter/sec",
            "range": "stddev: 0.00007598609911786726",
            "extra": "mean: 597.5526024363131 usec\nrounds: 1806"
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
          "id": "abc4f3c07d062ce0ed2e8f665e98d6f346539d2b",
          "message": "Merge pull request #954 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.3.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8b35f5c",
          "timestamp": "2023-01-17T14:43:48Z",
          "tree_id": "d1bf6da9f5bd59e3d25e3206f5f413d46c795f0a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/abc4f3c07d062ce0ed2e8f665e98d6f346539d2b"
        },
        "date": 1673976477682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 318.3562571184161,
            "unit": "iter/sec",
            "range": "stddev: 0.00027669082326326145",
            "extra": "mean: 3.1411350574712875 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 640.863772911319,
            "unit": "iter/sec",
            "range": "stddev: 0.00020988391262916114",
            "extra": "mean: 1.5603940217391212 msec\nrounds: 736"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1668.5970914931538,
            "unit": "iter/sec",
            "range": "stddev: 0.00009848717072307825",
            "extra": "mean: 599.3058510638684 usec\nrounds: 1880"
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
          "id": "6279af622438cb49b38242e981b73c8757aa1aac",
          "message": "Merge pull request #953 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-autoapi-2.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d936c42",
          "timestamp": "2023-01-17T14:47:14Z",
          "tree_id": "d1bf6da9f5bd59e3d25e3206f5f413d46c795f0a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6279af622438cb49b38242e981b73c8757aa1aac"
        },
        "date": 1673977509431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.609234070939,
            "unit": "iter/sec",
            "range": "stddev: 0.00015475724985042775",
            "extra": "mean: 3.2937074626865526 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 582.5815391949715,
            "unit": "iter/sec",
            "range": "stddev: 0.00020943242826641738",
            "extra": "mean: 1.7164979195561703 msec\nrounds: 721"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1580.217313937053,
            "unit": "iter/sec",
            "range": "stddev: 0.00011032491279098365",
            "extra": "mean: 632.8243534482842 usec\nrounds: 1856"
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
          "id": "69f41898fa3ae2a4e6c9c5ae279b3f155db81c4e",
          "message": "Merge pull request #956 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.3.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8420664",
          "timestamp": "2023-01-18T14:23:47Z",
          "tree_id": "8a6df16a1d51de93466e4bc29f2398b931fff478",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/69f41898fa3ae2a4e6c9c5ae279b3f155db81c4e"
        },
        "date": 1674053519003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 328.45137881903605,
            "unit": "iter/sec",
            "range": "stddev: 0.00035393190894007754",
            "extra": "mean: 3.0445906593406664 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 683.8264081644828,
            "unit": "iter/sec",
            "range": "stddev: 0.00017926357265464845",
            "extra": "mean: 1.4623594351733005 msec\nrounds: 779"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1773.7767566299162,
            "unit": "iter/sec",
            "range": "stddev: 0.00003764162557317214",
            "extra": "mean: 563.7688036345386 usec\nrounds: 1981"
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
          "id": "ea7ea03f868509b1318c9300020f14691844e3c1",
          "message": "Merge pull request #957 from TeoZosa/dependabot/pip/pytest-xdist-3.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@432447e",
          "timestamp": "2023-01-18T14:30:26Z",
          "tree_id": "8a6df16a1d51de93466e4bc29f2398b931fff478",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ea7ea03f868509b1318c9300020f14691844e3c1"
        },
        "date": 1674055665318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 254.4735199679996,
            "unit": "iter/sec",
            "range": "stddev: 0.0012358153500908354",
            "extra": "mean: 3.929681957186553 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 527.92908881469,
            "unit": "iter/sec",
            "range": "stddev: 0.0008877402352907031",
            "extra": "mean: 1.8941937869822763 msec\nrounds: 676"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1519.0580127741036,
            "unit": "iter/sec",
            "range": "stddev: 0.0004390515957067285",
            "extra": "mean: 658.3027057497297 usec\nrounds: 1774"
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
          "id": "24aded931ed38ba4cac9f5fab44b35f3de693a9e",
          "message": "Merge pull request #962 from TeoZosa/dependabot/pip/pre-commit-2.21.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5402164",
          "timestamp": "2023-01-18T14:48:54Z",
          "tree_id": "c587e49f4a99a9c957815ef83ff1530e8a86ed54",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/24aded931ed38ba4cac9f5fab44b35f3de693a9e"
        },
        "date": 1674057466311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 271.8419902626818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005530460522591268",
            "extra": "mean: 3.678607558139553 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 474.21747521075946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006604217034204999",
            "extra": "mean: 2.108737134909598 msec\nrounds: 719"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1510.8744492797282,
            "unit": "iter/sec",
            "range": "stddev: 0.0005166989976836718",
            "extra": "mean: 661.8683640303303 usec\nrounds: 1846"
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
          "id": "19229a7ce2d741393370b2eab883f6dbd72399c1",
          "message": "Merge pull request #959 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.23.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9ef4538",
          "timestamp": "2023-01-18T15:00:51Z",
          "tree_id": "7a735f45ca0af3dbdc2d2a02e290b722ad3b0375",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/19229a7ce2d741393370b2eab883f6dbd72399c1"
        },
        "date": 1674058320797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.70342380720655,
            "unit": "iter/sec",
            "range": "stddev: 0.000556559830245941",
            "extra": "mean: 3.7778128654971144 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 608.376895063993,
            "unit": "iter/sec",
            "range": "stddev: 0.00027416710434557647",
            "extra": "mean: 1.643717912552898 msec\nrounds: 709"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1529.4049017046061,
            "unit": "iter/sec",
            "range": "stddev: 0.00011718187918908178",
            "extra": "mean: 653.8490878938893 usec\nrounds: 1809"
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
          "id": "2e64e994acc96e3dc3bd5c045c3048f137116c7e",
          "message": "Merge pull request #960 from TeoZosa/dependabot/pip/pytest-7.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e459ed",
          "timestamp": "2023-01-18T15:15:59Z",
          "tree_id": "79ceecb5d67d0e1256d13cb7e9116834bdda36e8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2e64e994acc96e3dc3bd5c045c3048f137116c7e"
        },
        "date": 1674059043929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.09059663562385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003891332797555196",
            "extra": "mean: 3.4711303030303244 msec\nrounds: 330"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 615.3334153777984,
            "unit": "iter/sec",
            "range": "stddev: 0.00015888653916184536",
            "extra": "mean: 1.6251352112675803 msec\nrounds: 710"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1680.6800077357548,
            "unit": "iter/sec",
            "range": "stddev: 0.00003235621861158607",
            "extra": "mean: 594.9972602739647 usec\nrounds: 1825"
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
          "id": "99cdb1725b91ebe2ed2a8ecaaa8766370d380986",
          "message": "Merge pull request #961 from TeoZosa/dependabot/pip/tox-3.28.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@082db66",
          "timestamp": "2023-01-18T15:27:13Z",
          "tree_id": "75d55653b920a372976cc852608bfb0a3186569b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/99cdb1725b91ebe2ed2a8ecaaa8766370d380986"
        },
        "date": 1674060365390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.1737898625075,
            "unit": "iter/sec",
            "range": "stddev: 0.00031620827078955176",
            "extra": "mean: 3.482211940298514 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 578.019020438394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442565987751428",
            "extra": "mean: 1.7300468749999918 msec\nrounds: 704"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1674.1164078166103,
            "unit": "iter/sec",
            "range": "stddev: 0.00007452155113834847",
            "extra": "mean: 597.3300275482063 usec\nrounds: 1815"
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
          "id": "99d6fca93139fb5a375fb7d5bcfa725824f21259",
          "message": "Merge pull request #958 from TeoZosa/dependabot/pip/black-22.12.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9b10da9",
          "timestamp": "2023-01-18T15:35:00Z",
          "tree_id": "5649d3e9c66a9b61cb58a6fe59609a5ae89cf986",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/99d6fca93139fb5a375fb7d5bcfa725824f21259"
        },
        "date": 1674060969236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 301.22191723630317,
            "unit": "iter/sec",
            "range": "stddev: 0.00026129753807253603",
            "extra": "mean: 3.3198115501519703 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 558.2419248371028,
            "unit": "iter/sec",
            "range": "stddev: 0.0009249456688787186",
            "extra": "mean: 1.7913380480905372 msec\nrounds: 707"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1674.5013796884987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008618901063101596",
            "extra": "mean: 597.1926999463126 usec\nrounds: 1863"
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
          "id": "4e6162325ec121a7b724d9cdc504c8b4576e2754",
          "message": "Merge pull request #963 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.3.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@85a2819",
          "timestamp": "2023-01-19T14:14:02Z",
          "tree_id": "ab89d86c08fc3e30a8cf32901708a5753472dca3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4e6162325ec121a7b724d9cdc504c8b4576e2754"
        },
        "date": 1674139867930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 310.4437692649641,
            "unit": "iter/sec",
            "range": "stddev: 0.00028133779137515057",
            "extra": "mean: 3.221195266272195 msec\nrounds: 338"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 646.3021405351085,
            "unit": "iter/sec",
            "range": "stddev: 0.00009366127441484451",
            "extra": "mean: 1.547263945578218 msec\nrounds: 735"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1730.5020240861124,
            "unit": "iter/sec",
            "range": "stddev: 0.00003922546156452722",
            "extra": "mean: 577.8669923995642 usec\nrounds: 1842"
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
          "id": "45dc37924ebb5621c48a1737fe03ea1618040c1e",
          "message": "Merge pull request #955 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-79095e3\n\n⬆️ Bump python from `073caf6` to `79095e3` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@97920c4",
          "timestamp": "2023-01-22T13:59:36Z",
          "tree_id": "5999525bcd8c1219ca7c705a9e6d780634284d11",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/45dc37924ebb5621c48a1737fe03ea1618040c1e"
        },
        "date": 1674396248000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.4842935761055,
            "unit": "iter/sec",
            "range": "stddev: 0.0003304695169024595",
            "extra": "mean: 3.262809941520486 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 627.1106759770028,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637313956354825",
            "extra": "mean: 1.59461485557084 msec\nrounds: 727"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1617.9086234882925,
            "unit": "iter/sec",
            "range": "stddev: 0.00008630495927708358",
            "extra": "mean: 618.0818777292561 usec\nrounds: 1832"
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
          "id": "02125e536093ebe5d6760b5b5b0f28732b324949",
          "message": "Merge pull request #964 from TeoZosa/dependabot/pip/python-dotenv-0.21.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fd2856",
          "timestamp": "2023-01-23T14:21:43Z",
          "tree_id": "f4100bbedc97665ac9df9875598d8ac01fa3eacc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/02125e536093ebe5d6760b5b5b0f28732b324949"
        },
        "date": 1674488856487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.1478961955174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852539586841969",
            "extra": "mean: 3.6081818181817904 msec\nrounds: 330"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 585.0235646148693,
            "unit": "iter/sec",
            "range": "stddev: 0.0001725733842640956",
            "extra": "mean: 1.7093328550933098 msec\nrounds: 697"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1651.3546369466303,
            "unit": "iter/sec",
            "range": "stddev: 0.00005727979939743194",
            "extra": "mean: 605.563443264379 usec\nrounds: 1789"
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
          "id": "1b9d961df6ca3d0596a6787495748b28e191da5f",
          "message": "Merge pull request #965 from TeoZosa/dependabot/pip/hypothesis-6.64.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aad55cd",
          "timestamp": "2023-01-23T14:34:09Z",
          "tree_id": "652888ef5119978b7427f74367e4a118bcbed6c3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1b9d961df6ca3d0596a6787495748b28e191da5f"
        },
        "date": 1674492407954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 242.1697691104796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002342902579216762",
            "extra": "mean: 4.129334572490726 msec\nrounds: 269"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 489.75341345241293,
            "unit": "iter/sec",
            "range": "stddev: 0.00020225216604645763",
            "extra": "mean: 2.041843859649108 msec\nrounds: 570"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1327.0256220095491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000775589987259984",
            "extra": "mean: 753.5649526387247 usec\nrounds: 1478"
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
          "id": "f97723d688cac9b95bc6a5f6982fdc382de8a9d6",
          "message": "Merge pull request #968 from TeoZosa/dependabot/pip/hypothesis-6.65.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f099743",
          "timestamp": "2023-01-24T14:09:46Z",
          "tree_id": "4cb027e93c08811d5bdcd7f970e92a50bc94e007",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f97723d688cac9b95bc6a5f6982fdc382de8a9d6"
        },
        "date": 1674569761582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.36227136274397,
            "unit": "iter/sec",
            "range": "stddev: 0.00046682916421930616",
            "extra": "mean: 3.768433224755691 msec\nrounds: 307"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 533.1469779588911,
            "unit": "iter/sec",
            "range": "stddev: 0.0002731729186081901",
            "extra": "mean: 1.8756553846153585 msec\nrounds: 650"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1471.222071140092,
            "unit": "iter/sec",
            "range": "stddev: 0.00023766218739538147",
            "extra": "mean: 679.7070405727882 usec\nrounds: 1676"
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
          "id": "5ad403ff5aaa4c08f9ed5f2b3b01b0aca384ca00",
          "message": "Merge pull request #969 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@80ab179",
          "timestamp": "2023-01-26T14:12:26Z",
          "tree_id": "c5a9ed1f6b243055c608015ce217747b5585dcee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5ad403ff5aaa4c08f9ed5f2b3b01b0aca384ca00"
        },
        "date": 1674745424376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 270.93889188525395,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817722347530323",
            "extra": "mean: 3.6908691588784994 msec\nrounds: 321"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 537.7151466121455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002817331378868004",
            "extra": "mean: 1.8597207207207445 msec\nrounds: 666"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1655.9631943548711,
            "unit": "iter/sec",
            "range": "stddev: 0.00005879723883082158",
            "extra": "mean: 603.8781558726487 usec\nrounds: 1822"
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
          "id": "85de03039f1bd61c3248b828bf0af353b8b91713",
          "message": "Merge pull request #971 from TeoZosa/dependabot/pip/hypothesis-6.65.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a08957d",
          "timestamp": "2023-01-27T14:08:30Z",
          "tree_id": "f6724d6f0225dc2bb9f7b058b6ded55560f6b435",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/85de03039f1bd61c3248b828bf0af353b8b91713"
        },
        "date": 1674829317315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.7002489500685,
            "unit": "iter/sec",
            "range": "stddev: 0.0014198743479128483",
            "extra": "mean: 3.5752560240964173 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 566.910240310608,
            "unit": "iter/sec",
            "range": "stddev: 0.00016420815293696412",
            "extra": "mean: 1.763947674418624 msec\nrounds: 688"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1543.2356155604934,
            "unit": "iter/sec",
            "range": "stddev: 0.00008131917061654564",
            "extra": "mean: 647.9891922639475 usec\nrounds: 1758"
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
          "id": "49ad2b5034807357d646d6a3bd2a43ed7ca1199e",
          "message": "Merge pull request #973 from TeoZosa/dependabot/pip/xdoctest-1.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dd76a20",
          "timestamp": "2023-01-30T14:14:38Z",
          "tree_id": "46bdc35cc3b791ac54eb00a4304aa618a0b400cd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/49ad2b5034807357d646d6a3bd2a43ed7ca1199e"
        },
        "date": 1675092884645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.53808867907946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006174253125240145",
            "extra": "mean: 3.5773300330032614 msec\nrounds: 303"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 576.663880026612,
            "unit": "iter/sec",
            "range": "stddev: 0.00022610816636563257",
            "extra": "mean: 1.734112426035513 msec\nrounds: 676"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1520.8544197031447,
            "unit": "iter/sec",
            "range": "stddev: 0.00011510749852998022",
            "extra": "mean: 657.5251299826514 usec\nrounds: 1731"
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
          "id": "1fdcd787a4ac107d34c291e8573f281f1cc7e07a",
          "message": "Merge pull request #975 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c9de72",
          "timestamp": "2023-01-31T14:14:14Z",
          "tree_id": "57d9be76fad26fa66c99dc3019615173a9ecce78",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1fdcd787a4ac107d34c291e8573f281f1cc7e07a"
        },
        "date": 1675180931721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.9140802260377,
            "unit": "iter/sec",
            "range": "stddev: 0.00037444377314602606",
            "extra": "mean: 3.6641568627450893 msec\nrounds: 306"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 579.0729606643388,
            "unit": "iter/sec",
            "range": "stddev: 0.00019305874899866986",
            "extra": "mean: 1.7268981077147074 msec\nrounds: 687"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1444.3311690889193,
            "unit": "iter/sec",
            "range": "stddev: 0.00011928437124154096",
            "extra": "mean: 692.3619883041073 usec\nrounds: 1710"
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
          "id": "1913ec6ecd84c8fb0bb69c65366bef370cb4a8dc",
          "message": "Merge pull request #977 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ae2a95d",
          "timestamp": "2023-02-01T14:12:38Z",
          "tree_id": "2b82b290098b8456665204658fdf8708b68074b9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1913ec6ecd84c8fb0bb69c65366bef370cb4a8dc"
        },
        "date": 1675263418734,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.50689099203504,
            "unit": "iter/sec",
            "range": "stddev: 0.00020927841557156354",
            "extra": "mean: 3.372602898550721 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 600.4506753383381,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502891294154545",
            "extra": "mean: 1.6654157303370947 msec\nrounds: 712"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1628.0493246659787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008602618872699584",
            "extra": "mean: 614.2320044296979 usec\nrounds: 1806"
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
          "id": "af10804cba1d1dc059a9e55a464c90e840070314",
          "message": "Merge pull request #979 from TeoZosa/dependabot/pip/hypothesis-6.66.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@009619a",
          "timestamp": "2023-02-02T14:09:01Z",
          "tree_id": "c44d8092d355cd38e4b41e1a729189e73d285456",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af10804cba1d1dc059a9e55a464c90e840070314"
        },
        "date": 1675347205029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 239.4922763740861,
            "unit": "iter/sec",
            "range": "stddev: 0.001231336556149871",
            "extra": "mean: 4.1755000000000155 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 555.1160556826693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478273243972003",
            "extra": "mean: 1.8014251069899652 msec\nrounds: 701"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1645.1318723984018,
            "unit": "iter/sec",
            "range": "stddev: 0.00010986166521433961",
            "extra": "mean: 607.8540065861844 usec\nrounds: 1822"
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
          "id": "aedc439d7c8ec6b934c19d6509e6971b292200c6",
          "message": "Merge pull request #978 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.0.3\n\n⬆️ Bump pre-commit from 2.21.0 to 3.0.3 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@58b8a8b",
          "timestamp": "2023-02-04T03:31:10Z",
          "tree_id": "832e8502392253b6cb33dbddee3f564e3fe65a6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/aedc439d7c8ec6b934c19d6509e6971b292200c6"
        },
        "date": 1675481912179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.8962810374346,
            "unit": "iter/sec",
            "range": "stddev: 0.00026373518242046065",
            "extra": "mean: 3.1756488095237962 msec\nrounds: 336"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 649.0194750975949,
            "unit": "iter/sec",
            "range": "stddev: 0.00011655483374454387",
            "extra": "mean: 1.5407858136300565 msec\nrounds: 719"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1677.3983605363721,
            "unit": "iter/sec",
            "range": "stddev: 0.00013358078245178745",
            "extra": "mean: 596.1613076098606 usec\nrounds: 1866"
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
          "id": "61443a42ca55b5ae6b8d8e7824991b9db242c1cb",
          "message": "Merge pull request #976 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-23.0\n\n⬆️ Bump pip from 22.3.1 to 23.0 in /{{cookiecutter.project_slug}}/.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2f20c89",
          "timestamp": "2023-02-04T03:33:11Z",
          "tree_id": "832e8502392253b6cb33dbddee3f564e3fe65a6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/61443a42ca55b5ae6b8d8e7824991b9db242c1cb"
        },
        "date": 1675483892594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 331.4362641547013,
            "unit": "iter/sec",
            "range": "stddev: 0.0002567357415312207",
            "extra": "mean: 3.0171713483146183 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 677.8401636818809,
            "unit": "iter/sec",
            "range": "stddev: 0.00009148518774151418",
            "extra": "mean: 1.475274044795777 msec\nrounds: 759"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1765.0307412578684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000556563611218906",
            "extra": "mean: 566.5623700623702 usec\nrounds: 1924"
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
          "id": "3ec9eefb85cd2dc4e611ff58230b0bd23afa7d16",
          "message": "Merge pull request #974 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.0\n\n⬆️ Bump pip from 22.3.1 to 23.0 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4a8223f",
          "timestamp": "2023-02-04T03:36:25Z",
          "tree_id": "832e8502392253b6cb33dbddee3f564e3fe65a6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3ec9eefb85cd2dc4e611ff58230b0bd23afa7d16"
        },
        "date": 1675484447071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.89802951562854,
            "unit": "iter/sec",
            "range": "stddev: 0.0002017835594198611",
            "extra": "mean: 3.3014410876132927 msec\nrounds: 331"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 592.0398750432183,
            "unit": "iter/sec",
            "range": "stddev: 0.0006117426282801605",
            "extra": "mean: 1.6890754189943726 msec\nrounds: 716"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1688.6435988488863,
            "unit": "iter/sec",
            "range": "stddev: 0.00007720631197259964",
            "extra": "mean: 592.1912715517232 usec\nrounds: 1856"
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
          "id": "d54a7476ad913fa5444363451bc197019f513587",
          "message": "Merge pull request #967 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3d26050\n\n⬆️ Bump python from `79095e3` to `3d26050` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@187ff7f",
          "timestamp": "2023-02-04T03:40:38Z",
          "tree_id": "832e8502392253b6cb33dbddee3f564e3fe65a6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d54a7476ad913fa5444363451bc197019f513587"
        },
        "date": 1675485234754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.1225150020559,
            "unit": "iter/sec",
            "range": "stddev: 0.00019607705002502683",
            "extra": "mean: 3.1834712643678382 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 692.8953680794075,
            "unit": "iter/sec",
            "range": "stddev: 0.00004467309919471128",
            "extra": "mean: 1.4432193460490814 msec\nrounds: 734"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1761.6836903589883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004413885949923331",
            "extra": "mean: 567.638790932 usec\nrounds: 1985"
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
          "id": "9a634af4e940ca310ebd970a3bfa61076e2ad561",
          "message": "Merge pull request #980 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.0.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dc0b724",
          "timestamp": "2023-02-06T14:06:31Z",
          "tree_id": "a6235207dd72ff3249acc19178ed8c9b56c643bb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9a634af4e940ca310ebd970a3bfa61076e2ad561"
        },
        "date": 1675692649678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.6895094855373,
            "unit": "iter/sec",
            "range": "stddev: 0.00015776257088668895",
            "extra": "mean: 3.108587537092062 msec\nrounds: 337"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 631.2285840775189,
            "unit": "iter/sec",
            "range": "stddev: 0.00019852893937839441",
            "extra": "mean: 1.5842121621621519 msec\nrounds: 740"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1472.9457327429504,
            "unit": "iter/sec",
            "range": "stddev: 0.00021841583217774104",
            "extra": "mean: 678.9116379310044 usec\nrounds: 1856"
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
          "id": "bb477a49b1af1ff4986eb6ff1026f3084368835d",
          "message": "Merge pull request #982 from TeoZosa/dependabot/pip/hypothesis-6.67.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2915e37",
          "timestamp": "2023-02-06T14:18:56Z",
          "tree_id": "b0c83fad4c95e95152f1a19bc35bd30659d9d1b1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bb477a49b1af1ff4986eb6ff1026f3084368835d"
        },
        "date": 1675693469595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.60033335491414,
            "unit": "iter/sec",
            "range": "stddev: 0.00023487222596497659",
            "extra": "mean: 3.405990683229797 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 616.2397504316526,
            "unit": "iter/sec",
            "range": "stddev: 0.00015411201649404496",
            "extra": "mean: 1.6227450424928576 msec\nrounds: 706"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1669.6415256773294,
            "unit": "iter/sec",
            "range": "stddev: 0.00006216219808747541",
            "extra": "mean: 598.9309589040837 usec\nrounds: 1825"
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
          "id": "d0ac4b7c9d122369437cd3231d73a66780b189c6",
          "message": "Merge pull request #983 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-1.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3b2a0d9",
          "timestamp": "2023-02-08T14:23:10Z",
          "tree_id": "5159a95d163de40bbc7fdef7cc91b8c37c0dd2b0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d0ac4b7c9d122369437cd3231d73a66780b189c6"
        },
        "date": 1675874394363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.46446426570174,
            "unit": "iter/sec",
            "range": "stddev: 0.00038069228774883455",
            "extra": "mean: 3.454655487804859 msec\nrounds: 328"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 627.9352930944449,
            "unit": "iter/sec",
            "range": "stddev: 0.00012882736994131858",
            "extra": "mean: 1.5925207756232846 msec\nrounds: 722"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1692.1299991548565,
            "unit": "iter/sec",
            "range": "stddev: 0.000044380869488933325",
            "extra": "mean: 590.971143174257 usec\nrounds: 1802"
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
          "id": "2fd2f67aaea9e0d3fc3990a03c107b18f14f3497",
          "message": "Merge pull request #986 from TeoZosa/dependabot/pip/pytest-xdist-3.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d12441",
          "timestamp": "2023-02-08T14:42:56Z",
          "tree_id": "5159a95d163de40bbc7fdef7cc91b8c37c0dd2b0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2fd2f67aaea9e0d3fc3990a03c107b18f14f3497"
        },
        "date": 1675875320122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.7634758919543,
            "unit": "iter/sec",
            "range": "stddev: 0.00032248699184171523",
            "extra": "mean: 3.4871944444444405 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 571.1077476525365,
            "unit": "iter/sec",
            "range": "stddev: 0.0002596441496720101",
            "extra": "mean: 1.7509830747531772 msec\nrounds: 709"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1574.803149606361,
            "unit": "iter/sec",
            "range": "stddev: 0.00009326630086001084",
            "extra": "mean: 634.999999999975 usec\nrounds: 1809"
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
          "id": "1e0933667a235e08fd2fff4730ff3bfc91c6e7d8",
          "message": "Merge pull request #985 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9a4cdc8",
          "timestamp": "2023-02-08T15:03:37Z",
          "tree_id": "348bfc2c9a707231b1e060969478cd5edab7a23c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1e0933667a235e08fd2fff4730ff3bfc91c6e7d8"
        },
        "date": 1675875887532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.0162445405767,
            "unit": "iter/sec",
            "range": "stddev: 0.00022783948447042675",
            "extra": "mean: 3.378192982456151 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 633.6696836822495,
            "unit": "iter/sec",
            "range": "stddev: 0.0002419793332899903",
            "extra": "mean: 1.5781092669433197 msec\nrounds: 723"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1777.2606351783418,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477784687500797",
            "extra": "mean: 562.6636747623984 usec\nrounds: 1894"
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
          "id": "e87595772e4ab9c64ba8081528fc32aaa8048c6d",
          "message": "Merge pull request #987 from TeoZosa/dependabot/pip/sphinx-rtd-theme-1.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@555d12a",
          "timestamp": "2023-02-08T15:09:46Z",
          "tree_id": "348bfc2c9a707231b1e060969478cd5edab7a23c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e87595772e4ab9c64ba8081528fc32aaa8048c6d"
        },
        "date": 1675876346060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 301.98751846116755,
            "unit": "iter/sec",
            "range": "stddev: 0.00019948768707204776",
            "extra": "mean: 3.3113951367781107 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 622.351354964248,
            "unit": "iter/sec",
            "range": "stddev: 0.00012313575336956096",
            "extra": "mean: 1.606809388335704 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1710.6540171685524,
            "unit": "iter/sec",
            "range": "stddev: 0.00003563534131897612",
            "extra": "mean: 584.5717427157973 usec\nrounds: 1819"
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
          "id": "3c8915f3ed14288d8fcfc588641e854684a6a27e",
          "message": "Merge pull request #984 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-rtd-theme-1.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1235dd3",
          "timestamp": "2023-02-08T15:25:27Z",
          "tree_id": "5f343978df8a9ece262d599924bb6c6c3f249672",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3c8915f3ed14288d8fcfc588641e854684a6a27e"
        },
        "date": 1675877059141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.5575352694828,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728968760858405",
            "extra": "mean: 3.3720269461077654 msec\nrounds: 334"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 609.0713076015683,
            "unit": "iter/sec",
            "range": "stddev: 0.0001193780341160452",
            "extra": "mean: 1.6418438818565437 msec\nrounds: 711"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1724.8339048832017,
            "unit": "iter/sec",
            "range": "stddev: 0.00006088073584480202",
            "extra": "mean: 579.7659688674289 usec\nrounds: 1863"
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
          "id": "3741a64886ab23147537712fcd699c0e63335371",
          "message": "Merge pull request #988 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.11.2-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a280553",
          "timestamp": "2023-02-09T14:25:23Z",
          "tree_id": "66741a4ba2e6e841cb17bc0a3b1d9518ce6bdd4e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3741a64886ab23147537712fcd699c0e63335371"
        },
        "date": 1675953187566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.62807264443416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631866140088618",
            "extra": "mean: 3.1884900849858493 msec\nrounds: 353"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 665.844680511229,
            "unit": "iter/sec",
            "range": "stddev: 0.00011933595899934336",
            "extra": "mean: 1.5018517520215222 msec\nrounds: 742"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1779.5521571250492,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860056699216483",
            "extra": "mean: 561.9391350774159 usec\nrounds: 1873"
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
          "id": "8b38304893a41566ad41edf7f4671e15241b0bb1",
          "message": "Merge pull request #989 from TeoZosa/dependabot/pip/hypothesis-6.68.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e179c0c",
          "timestamp": "2023-02-09T14:29:45Z",
          "tree_id": "98cefa841db60a6d21ae71ba27fb922895278238",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8b38304893a41566ad41edf7f4671e15241b0bb1"
        },
        "date": 1675954262674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.417603680541,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254226445472188",
            "extra": "mean: 3.351008746355694 msec\nrounds: 343"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 620.8977190411357,
            "unit": "iter/sec",
            "range": "stddev: 0.00015939011767690804",
            "extra": "mean: 1.6105712250712068 msec\nrounds: 702"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1680.9137006592969,
            "unit": "iter/sec",
            "range": "stddev: 0.00006605902682046092",
            "extra": "mean: 594.9145394006692 usec\nrounds: 1802"
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
          "id": "f893c086b3f3ead8dc12b4a13263724b40e4dbfe",
          "message": "Merge pull request #990 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.20.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9df0542",
          "timestamp": "2023-02-13T15:10:54Z",
          "tree_id": "f93a668ea1cd6c8927ea83619668570a49ed98c1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f893c086b3f3ead8dc12b4a13263724b40e4dbfe"
        },
        "date": 1676304711016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.40657124291124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005441861632217258",
            "extra": "mean: 3.5535772870662505 msec\nrounds: 317"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 613.112229190586,
            "unit": "iter/sec",
            "range": "stddev: 0.00017961474931287824",
            "extra": "mean: 1.6310227596017333 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1693.9961602754368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000613863226148626",
            "extra": "mean: 590.3201101928142 usec\nrounds: 1815"
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
          "id": "0cf530932cf1c4ea1a0b2dec0165c8b67ecf032b",
          "message": "Merge pull request #991 from TeoZosa/dependabot/pip/hypothesis-6.68.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@483fc7e",
          "timestamp": "2023-02-13T15:22:30Z",
          "tree_id": "bfeecd84ce6cbf8135e20ebbe5b59400db225d91",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0cf530932cf1c4ea1a0b2dec0165c8b67ecf032b"
        },
        "date": 1676305785204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 244.7987099381003,
            "unit": "iter/sec",
            "range": "stddev: 0.00027412794544185446",
            "extra": "mean: 4.084988847583631 msec\nrounds: 269"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 532.4891984704058,
            "unit": "iter/sec",
            "range": "stddev: 0.00009822754071072193",
            "extra": "mean: 1.8779723661485261 msec\nrounds: 579"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1355.71515315737,
            "unit": "iter/sec",
            "range": "stddev: 0.00006718503027892032",
            "extra": "mean: 737.6180738786218 usec\nrounds: 1516"
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
          "id": "cfd6f1c2f51e756d3ad36fd3e3e0240c38bd0829",
          "message": "Merge pull request #992 from TeoZosa/dependabot/pip/hypothesis-6.68.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d12d3b1",
          "timestamp": "2023-02-17T15:11:11Z",
          "tree_id": "8ea3120dce27678450325db625db13cd6903e3a2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cfd6f1c2f51e756d3ad36fd3e3e0240c38bd0829"
        },
        "date": 1676647775485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.76504504129605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003067956990320929",
            "extra": "mean: 3.4750572289156727 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 604.9507723463441,
            "unit": "iter/sec",
            "range": "stddev: 0.00019053779465564596",
            "extra": "mean: 1.6530270655270505 msec\nrounds: 702"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1587.1522861179255,
            "unit": "iter/sec",
            "range": "stddev: 0.00008682749015043554",
            "extra": "mean: 630.0592632140782 usec\nrounds: 1873"
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
          "id": "5a19d9c0093b37efbd9c22dfd71ec42c574185ec",
          "message": "Merge pull request #995 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.23.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@db380de",
          "timestamp": "2023-02-21T15:30:08Z",
          "tree_id": "11caeb60c3ad09774a1701fcd63bccc604c0b17c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5a19d9c0093b37efbd9c22dfd71ec42c574185ec"
        },
        "date": 1676996144826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.7661187189768,
            "unit": "iter/sec",
            "range": "stddev: 0.00072402861400147",
            "extra": "mean: 3.8056656804733655 msec\nrounds: 338"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 622.3227430515992,
            "unit": "iter/sec",
            "range": "stddev: 0.00019517869497723693",
            "extra": "mean: 1.6068832630098593 msec\nrounds: 711"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1665.4844632781035,
            "unit": "iter/sec",
            "range": "stddev: 0.000056352048350671427",
            "extra": "mean: 600.4258953168147 usec\nrounds: 1815"
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
          "id": "191ef89a8af9f40ad75e64ad9de4ef1d23870439",
          "message": "Merge pull request #996 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@51f93b1",
          "timestamp": "2023-02-22T14:24:11Z",
          "tree_id": "8464d304b21635bd574aa30d28335821a02ac39b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/191ef89a8af9f40ad75e64ad9de4ef1d23870439"
        },
        "date": 1677077016794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 325.44480647520345,
            "unit": "iter/sec",
            "range": "stddev: 0.0001364247757985412",
            "extra": "mean: 3.07271764705882 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 638.9930541901799,
            "unit": "iter/sec",
            "range": "stddev: 0.00012933746264831892",
            "extra": "mean: 1.5649622377622523 msec\nrounds: 715"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1682.4450048468111,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545944605383491",
            "extra": "mean: 594.3730684326597 usec\nrounds: 1812"
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
          "id": "24ccf6d82e44670888875ec7fb3715e0056e779d",
          "message": "Merge pull request #997 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fb8e1b",
          "timestamp": "2023-02-23T15:03:35Z",
          "tree_id": "b30d105e30e49ff037d3970635c87a615e9e6f0b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/24ccf6d82e44670888875ec7fb3715e0056e779d"
        },
        "date": 1677165031915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.747022303763,
            "unit": "iter/sec",
            "range": "stddev: 0.0001723548287246708",
            "extra": "mean: 3.147157738095213 msec\nrounds: 336"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 613.466737446764,
            "unit": "iter/sec",
            "range": "stddev: 0.00024755991262772703",
            "extra": "mean: 1.6300802292264116 msec\nrounds: 698"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1644.4405437739313,
            "unit": "iter/sec",
            "range": "stddev: 0.0001316919422114174",
            "extra": "mean: 608.1095505618199 usec\nrounds: 1780"
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
          "id": "3e1acfbd6d3e5c8a267c9edcc7900b449450f39a",
          "message": "Merge pull request #998 from TeoZosa/dependabot/pip/markdown-it-py-2.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e060493",
          "timestamp": "2023-02-23T19:52:09Z",
          "tree_id": "2659a5a4932ce7c1c5c5f66bc64f320c3fa08f7e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3e1acfbd6d3e5c8a267c9edcc7900b449450f39a"
        },
        "date": 1677182439004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.9292355442223,
            "unit": "iter/sec",
            "range": "stddev: 0.00025703032598752457",
            "extra": "mean: 3.2794494047618965 msec\nrounds: 336"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 602.7285479215574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002014496079852193",
            "extra": "mean: 1.6591216783216742 msec\nrounds: 715"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1653.5628196175878,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336701202834317",
            "extra": "mean: 604.7547683923285 usec\nrounds: 1835"
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
          "id": "b52157b1363f34c37911523ab5e4e250b687638a",
          "message": "Merge pull request #999 from TeoZosa/dependabot/pip/python-dotenv-1.0.0\n\n⬆️ Bump python-dotenv from 0.21.1 to 1.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0c1b845",
          "timestamp": "2023-02-25T10:56:20Z",
          "tree_id": "38f7113d5391d3a35082ea3b9d73328679cd6e22",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b52157b1363f34c37911523ab5e4e250b687638a"
        },
        "date": 1677323178223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.24594923667644,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186589159222659",
            "extra": "mean: 3.813214285714294 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 583.3408012228145,
            "unit": "iter/sec",
            "range": "stddev: 0.00021263011894059118",
            "extra": "mean: 1.714263768115951 msec\nrounds: 690"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1531.2943359161445,
            "unit": "iter/sec",
            "range": "stddev: 0.00009210277892234216",
            "extra": "mean: 653.042316258369 usec\nrounds: 1796"
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
          "id": "272bac4733c971f6b783bec44c0985dabf9f278c",
          "message": "Merge pull request #1002 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@df461d3",
          "timestamp": "2023-02-28T15:26:59Z",
          "tree_id": "77b4ae841c0898c445ec8fa2e9cb6be0f8425fe5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/272bac4733c971f6b783bec44c0985dabf9f278c"
        },
        "date": 1677600983824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 323.8451581032156,
            "unit": "iter/sec",
            "range": "stddev: 0.0002479494096071709",
            "extra": "mean: 3.087895480226019 msec\nrounds: 354"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 657.4121865746752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000833475339890186",
            "extra": "mean: 1.5211157024793156 msec\nrounds: 726"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1694.8639830600096,
            "unit": "iter/sec",
            "range": "stddev: 0.00007256376638165906",
            "extra": "mean: 590.0178480367136 usec\nrounds: 1961"
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
          "id": "80306c9da8a3295601f4ae3073984cbd3b5bcaba",
          "message": "Merge pull request #1006 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4b7c60a",
          "timestamp": "2023-02-28T16:19:45Z",
          "tree_id": "f2e97502cb83aba017142d35c9b728970562cfee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/80306c9da8a3295601f4ae3073984cbd3b5bcaba"
        },
        "date": 1677606223287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.1915367979017,
            "unit": "iter/sec",
            "range": "stddev: 0.00031375762903869154",
            "extra": "mean: 3.2874024390243917 msec\nrounds: 328"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 598.5269312386594,
            "unit": "iter/sec",
            "range": "stddev: 0.00020134568361135233",
            "extra": "mean: 1.6707685950413071 msec\nrounds: 726"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1544.4410350823152,
            "unit": "iter/sec",
            "range": "stddev: 0.00024375485383980233",
            "extra": "mean: 647.4834437086181 usec\nrounds: 1812"
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
          "id": "bd840797b1048109ebd028989ba15080c7db505f",
          "message": "Merge pull request #1003 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@06ae1e0",
          "timestamp": "2023-02-28T16:21:26Z",
          "tree_id": "f2e97502cb83aba017142d35c9b728970562cfee",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bd840797b1048109ebd028989ba15080c7db505f"
        },
        "date": 1677606841201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.0042975200652,
            "unit": "iter/sec",
            "range": "stddev: 0.00020831981898874",
            "extra": "mean: 3.2050840579709945 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 651.8513814133205,
            "unit": "iter/sec",
            "range": "stddev: 0.0005791117576391323",
            "extra": "mean: 1.5340920162381744 msec\nrounds: 739"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1737.3277807333718,
            "unit": "iter/sec",
            "range": "stddev: 0.000048376155420811284",
            "extra": "mean: 575.5966209081591 usec\nrounds: 1894"
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
          "id": "a9fe4c748ed1d36fd07cc208c4271a422de2c4bf",
          "message": "Merge pull request #1007 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1bdefeb",
          "timestamp": "2023-02-28T16:29:40Z",
          "tree_id": "2b2cf8548a0da3662d4efa4b6efaab63942d8f7b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a9fe4c748ed1d36fd07cc208c4271a422de2c4bf"
        },
        "date": 1677607529442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.707063981491,
            "unit": "iter/sec",
            "range": "stddev: 0.00014342530741497033",
            "extra": "mean: 3.051505780346805 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 676.3287669732817,
            "unit": "iter/sec",
            "range": "stddev: 0.00006114609808733551",
            "extra": "mean: 1.4785708502023613 msec\nrounds: 741"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1693.8358170584988,
            "unit": "iter/sec",
            "range": "stddev: 0.000050980708406592715",
            "extra": "mean: 590.3759915388916 usec\nrounds: 1891"
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
          "id": "4d2690ce1471e520eb8f1d97ed1ae00b51ba8d23",
          "message": "Merge pull request #1008 from TeoZosa/dependabot/pip/docs/myst-parser-0.19.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dce5caa",
          "timestamp": "2023-03-01T16:02:49Z",
          "tree_id": "7525d4457596ced5129f1d62b60a97cbe4b26e88",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4d2690ce1471e520eb8f1d97ed1ae00b51ba8d23"
        },
        "date": 1677694846309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.3537116043135,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583581949427954",
            "extra": "mean: 3.4921845238095264 msec\nrounds: 336"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 586.1995200957831,
            "unit": "iter/sec",
            "range": "stddev: 0.00014626770956278814",
            "extra": "mean: 1.7059038189533202 msec\nrounds: 707"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1582.4034605201407,
            "unit": "iter/sec",
            "range": "stddev: 0.00005053704044068545",
            "extra": "mean: 631.9500841279107 usec\nrounds: 1783"
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
          "id": "df80e210575807b266bd618997d23bad03491b4f",
          "message": "Merge pull request #1016 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/myst-parser-0.19.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bd93cbf",
          "timestamp": "2023-03-01T17:24:16Z",
          "tree_id": "b22cc5f1ce9b647529b8a0006a4a89b9dc0602bd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/df80e210575807b266bd618997d23bad03491b4f"
        },
        "date": 1677697570392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.98605513338396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004919234779123522",
            "extra": "mean: 3.508943620178058 msec\nrounds: 337"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 569.3829172293804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410503970444329",
            "extra": "mean: 1.7562873239436199 msec\nrounds: 710"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1597.7351773750142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001272249684945879",
            "extra": "mean: 625.8859504132229 usec\nrounds: 1815"
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
          "id": "0a91dade440059a1220b860ecb4ced276e0c9a90",
          "message": "Merge pull request #1010 from TeoZosa/dependabot/pip/myst-parser-0.19.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a468c4c",
          "timestamp": "2023-03-01T17:55:16Z",
          "tree_id": "d19586cd4fe9402a640a4b245804192bea7d7145",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0a91dade440059a1220b860ecb4ced276e0c9a90"
        },
        "date": 1677700673523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.2411070286042,
            "unit": "iter/sec",
            "range": "stddev: 0.0001017926388883313",
            "extra": "mean: 3.7701546762589775 msec\nrounds: 278"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 534.7995057970592,
            "unit": "iter/sec",
            "range": "stddev: 0.00010872354107501823",
            "extra": "mean: 1.8698596187175065 msec\nrounds: 577"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1400.9352138170607,
            "unit": "iter/sec",
            "range": "stddev: 0.00003117496754089318",
            "extra": "mean: 713.8088829071177 usec\nrounds: 1486"
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
          "id": "59b62b328fb996f366ce32690fbed59b30d0f891",
          "message": "Merge pull request #1018 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/myst-parser-0.19.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@eba828e",
          "timestamp": "2023-03-02T15:03:03Z",
          "tree_id": "4f7f17a352bab00715a09b4f1a3d6f4da87e5a5b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/59b62b328fb996f366ce32690fbed59b30d0f891"
        },
        "date": 1677793443774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.46636231374885,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336431012042698",
            "extra": "mean: 3.4666086956522006 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 617.7584118252538,
            "unit": "iter/sec",
            "range": "stddev: 0.0001561978768720083",
            "extra": "mean: 1.6187557803468187 msec\nrounds: 692"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1638.4762819662617,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676797294680319",
            "extra": "mean: 610.3231465761256 usec\nrounds: 1767"
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
          "id": "97f5517fa3b6eb3a4d1ebff05d90f519ef32835a",
          "message": "Merge pull request #1019 from TeoZosa/dependabot/pip/docs/myst-parser-0.19.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e38cc65",
          "timestamp": "2023-03-02T15:18:26Z",
          "tree_id": "7adeca39a51a5391b2f599226d19acfe0d5fd48d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/97f5517fa3b6eb3a4d1ebff05d90f519ef32835a"
        },
        "date": 1677797534277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.06977306378957,
            "unit": "iter/sec",
            "range": "stddev: 0.00022763635955957054",
            "extra": "mean: 3.4834736842105305 msec\nrounds: 323"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 581.1029967598009,
            "unit": "iter/sec",
            "range": "stddev: 0.00023243209570087957",
            "extra": "mean: 1.72086532951292 msec\nrounds: 698"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1695.059757961296,
            "unit": "iter/sec",
            "range": "stddev: 0.000049856429819387674",
            "extra": "mean: 589.9497025418931 usec\nrounds: 1849"
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
          "id": "38d3becc46c2941d13ee6d0789f86b1a2c4b7085",
          "message": "Merge pull request #1017 from TeoZosa/dependabot/pip/myst-parser-0.19.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e955986",
          "timestamp": "2023-03-02T15:57:02Z",
          "tree_id": "265da06556370b0edf1752a522d70ac0f0d51e1a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/38d3becc46c2941d13ee6d0789f86b1a2c4b7085"
        },
        "date": 1677809801802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 267.3700184268541,
            "unit": "iter/sec",
            "range": "stddev: 0.00040568115009070155",
            "extra": "mean: 3.7401351351351146 msec\nrounds: 333"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 634.0834053674062,
            "unit": "iter/sec",
            "range": "stddev: 0.00011812064958498847",
            "extra": "mean: 1.57707959479017 msec\nrounds: 691"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1598.0753890926655,
            "unit": "iter/sec",
            "range": "stddev: 0.000054593891352408154",
            "extra": "mean: 625.7527065527033 usec\nrounds: 1755"
          }
        ]
      }
    ]
  }
}