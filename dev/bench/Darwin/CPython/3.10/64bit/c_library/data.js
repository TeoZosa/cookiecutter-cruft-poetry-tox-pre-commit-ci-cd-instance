window.BENCHMARK_DATA = {
  "lastUpdate": 1672065367913,
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
      }
    ]
  }
}