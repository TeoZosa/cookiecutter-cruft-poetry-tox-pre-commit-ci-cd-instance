window.BENCHMARK_DATA = {
  "lastUpdate": 1673689338463,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633123072584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.95358145249065,
            "unit": "iter/sec",
            "range": "stddev: 0.000508309997526719",
            "extra": "mean: 3.5217023672839773 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.6580908444348,
            "unit": "iter/sec",
            "range": "stddev: 0.0001980484702419776",
            "extra": "mean: 1.1966616621751334 msec\nrounds: 1039"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1619.7626026505322,
            "unit": "iter/sec",
            "range": "stddev: 0.00011209289024630083",
            "extra": "mean: 617.3744216366208 usec\nrounds: 2163"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7d9bcdecca698f0b988fa7e33cf25bd2f133f879",
          "message": "Merge pull request #363 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8bb3f64",
          "timestamp": "2021-10-04T13:20:51Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633354995174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.21258930963,
            "unit": "iter/sec",
            "range": "stddev: 0.000047681040356203845",
            "extra": "mean: 2.6722778136482805 msec\nrounds: 381"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1096.489737830554,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135351350907191",
            "extra": "mean: 912.0012394995483 usec\nrounds: 1119"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2230.528154932098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000207827194499538",
            "extra": "mean: 448.324311795312 usec\nrounds: 2306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "8679cb9c951d4061aaf3032e932da1056fc0cea6",
          "message": "Merge pull request #257 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1",
          "timestamp": "2021-10-04T13:25:39Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633355704984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.8353538839106,
            "unit": "iter/sec",
            "range": "stddev: 0.00026766159075311227",
            "extra": "mean: 3.5108001389728 msec\nrounds: 331"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 818.0406947061956,
            "unit": "iter/sec",
            "range": "stddev: 0.00014719015636795472",
            "extra": "mean: 1.2224330726714716 msec\nrounds: 977"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1586.1930091414263,
            "unit": "iter/sec",
            "range": "stddev: 0.0002985413799160531",
            "extra": "mean: 630.4403021806781 usec\nrounds: 1926"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "13a2a5d9efa91bbe55c4495d18a97536657cb76b",
          "message": ":cookie: :art: Remove gratuitous newlines\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4e4a24f",
          "timestamp": "2021-10-12T17:40:15Z",
          "tree_id": "1858ad76937eb7dc75a59c085dd1f547330f2927"
        },
        "date": 1634060797348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 323.8458550161964,
            "unit": "iter/sec",
            "range": "stddev: 0.0001008713991215286",
            "extra": "mean: 3.087888835106403 msec\nrounds: 376"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 942.8913091678228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004078274787530321",
            "extra": "mean: 1.060567628820951 msec\nrounds: 1145"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1920.2379781584948,
            "unit": "iter/sec",
            "range": "stddev: 0.00002804259015491362",
            "extra": "mean: 520.7687856267681 usec\nrounds: 2449"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "231b24f12a51f2a9aa5ec6dcdc6f94cbe7fa30c0",
          "message": "Merge pull request #387 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f818a13",
          "timestamp": "2021-10-13T13:33:14Z",
          "tree_id": "c357d6e257253492795e87f59770d70b8c0e54ef"
        },
        "date": 1634132163011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.2886123443654,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251631749678478",
            "extra": "mean: 3.3080968292011144 msec\nrounds: 363"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 908.2519392278549,
            "unit": "iter/sec",
            "range": "stddev: 0.00020587232569683174",
            "extra": "mean: 1.1010160912512272 msec\nrounds: 1063"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1718.2249510270567,
            "unit": "iter/sec",
            "range": "stddev: 0.000130063232887696",
            "extra": "mean: 581.9959717161929 usec\nrounds: 2086"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "172ecf9f0982fff99d9566a5b089450fb6a4f0b4",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/emoji-1.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@faf7bd6",
          "timestamp": "2021-10-13T13:46:46Z",
          "tree_id": "4b9bdd1bb320ed068209cecfc4bc47b3e6cf0f30"
        },
        "date": 1634133165117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.2673510804287,
            "unit": "iter/sec",
            "range": "stddev: 0.00007352400034339725",
            "extra": "mean: 3.151915873456817 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 927.0474884260717,
            "unit": "iter/sec",
            "range": "stddev: 0.00001746079069757108",
            "extra": "mean: 1.078693392177553 msec\nrounds: 946"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1890.502946779261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199041152560849",
            "extra": "mean: 528.9597679303496 usec\nrounds: 1952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4c17bd668f8c85800b6a7fb7ac0d3b1ce14b0f9d",
          "message": "Merge pull request #386 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-9076976\n\n⬆️ Bump python from `fda1201` to `9076976` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ad16ed2",
          "timestamp": "2021-10-13T16:37:52Z",
          "tree_id": "2303b4fc619d833b0692599962abe193424fc617"
        },
        "date": 1634143287423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.64601419138114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906078510654169",
            "extra": "mean: 3.5887827173913016 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 792.8145801646393,
            "unit": "iter/sec",
            "range": "stddev: 0.00025169996715870065",
            "extra": "mean: 1.2613289727748644 msec\nrounds: 955"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1591.3599360180858,
            "unit": "iter/sec",
            "range": "stddev: 0.00013069599105328567",
            "extra": "mean: 628.3933492143885 usec\nrounds: 1973"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6b5e9be9586296932350b5ab3ddaed540fda7101",
          "message": "Merge pull request #389 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.12.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bf1f292",
          "timestamp": "2021-10-14T13:18:32Z",
          "tree_id": "5f2735d3b75dff41c455ef382e74d5ddc96be271"
        },
        "date": 1634217722757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.95557968954273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003265198444823364",
            "extra": "mean: 3.6635997737704833 msec\nrounds: 305"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 819.9804086373578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011321844148386059",
            "extra": "mean: 1.2195413322884123 msec\nrounds: 957"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1579.1462911168726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010503842969532868",
            "extra": "mean: 633.2535532808278 usec\nrounds: 1905"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "807e4c7d50320904cec1e988f85dcecef67ab1cf",
          "message": "Merge pull request #390 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-2bac437\n\n⬆️ Bump python from `9076976` to `2bac437` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5fbaa81",
          "timestamp": "2021-10-14T16:47:48Z",
          "tree_id": "23c394d030effb731c2816df4cf86c2ae1662abd"
        },
        "date": 1634230236347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.2240091099672,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459425712717067",
            "extra": "mean: 3.4103619380804933 msec\nrounds: 323"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 843.9453676388813,
            "unit": "iter/sec",
            "range": "stddev: 0.000228652725367263",
            "extra": "mean: 1.1849108228388232 msec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1645.6959254058008,
            "unit": "iter/sec",
            "range": "stddev: 0.00010095816291973885",
            "extra": "mean: 607.6456680497746 usec\nrounds: 1928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "68b738cecb460b967f328b3b5849388dfd759f36",
          "message": ":wrench: Add `.python-version` to template `cruft` ignore\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7a514ab",
          "timestamp": "2021-10-14T17:25:13Z",
          "tree_id": "6a99562de7f2ba829a47f505b486d8b733b368ed"
        },
        "date": 1634232588978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.38689140652843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004772632070274593",
            "extra": "mean: 3.1807941976401195 msec\nrounds: 339"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 925.4362718479015,
            "unit": "iter/sec",
            "range": "stddev: 0.000028299727025481526",
            "extra": "mean: 1.0805714347063688 msec\nrounds: 1141"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1884.343023461439,
            "unit": "iter/sec",
            "range": "stddev: 0.00001948831989698632",
            "extra": "mean: 530.6889390887295 usec\nrounds: 2085"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "31b5c8495ecefe2d2c8a1d212daf12b416acdb84",
          "message": "Merge pull request #391 from TeoZosa/c-compile-all-project-modules-by-default\n\n📦 C-Compile All Project Modules by Default\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e555667",
          "timestamp": "2021-10-14T18:07:44Z",
          "tree_id": "adb0ed2ba63cad7d0fcac014b50ede4f4e853dca"
        },
        "date": 1634235080125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.49368268298883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250452957136569",
            "extra": "mean: 3.4904783611110917 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 825.5898166783838,
            "unit": "iter/sec",
            "range": "stddev: 0.00020468328076215475",
            "extra": "mean: 1.211255250244395 msec\nrounds: 1023"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1648.1401456386575,
            "unit": "iter/sec",
            "range": "stddev: 0.00012853459977410758",
            "extra": "mean: 606.744519054536 usec\nrounds: 2073"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "8c22cd32d5a076da41145982ecf610c0eafe39d6",
          "message": "Merge pull request #392 from TeoZosa/migrate-to-github-md-footnote-syntax\n\n📝 Migrate Footnotes to GitHub markdown Syntax\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4cd783c",
          "timestamp": "2021-10-14T18:34:40Z",
          "tree_id": "eb1d6a7e20b302040a2520bbc2eaf342fce97427"
        },
        "date": 1634236700434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.32280331521366,
            "unit": "iter/sec",
            "range": "stddev: 0.0005822190793735686",
            "extra": "mean: 3.768993797385601 msec\nrounds: 306"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 762.7243748651213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003258693877460671",
            "extra": "mean: 1.3110896058315145 msec\nrounds: 926"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1530.381772203184,
            "unit": "iter/sec",
            "range": "stddev: 0.00018991749757475335",
            "extra": "mean: 653.4317241379383 usec\nrounds: 1885"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "bc242cd6953c31abb58f23e2c989fdf89786d2a0",
          "message": "Merge pull request #394 from TeoZosa/dependabot/github_actions/actions/checkout-2.3.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1deca20",
          "timestamp": "2021-10-18T13:15:39Z",
          "tree_id": "edc719a552f7790aedd1bb4a3a23a6e79ca243c9"
        },
        "date": 1634563236738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.4898938364122,
            "unit": "iter/sec",
            "range": "stddev: 0.0004031773070162015",
            "extra": "mean: 2.789478914728695 msec\nrounds: 387"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1023.226808464425,
            "unit": "iter/sec",
            "range": "stddev: 0.00020462079171563655",
            "extra": "mean: 977.3004300979155 usec\nrounds: 1123"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2042.5310329899987,
            "unit": "iter/sec",
            "range": "stddev: 0.00011357628044091261",
            "extra": "mean: 489.5886446024424 usec\nrounds: 2251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fef8b02e0e05c58fac183771d639ac1b46802472",
          "message": "Merge pull request #396 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.3.1\n\n⬆️ Bump pip from 21.3 to 21.3.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9f22059",
          "timestamp": "2021-10-28T23:04:03Z",
          "tree_id": "842771fe62aa28066db05a4aaea0dfe502a5acef"
        },
        "date": 1635462450817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.0239006089061,
            "unit": "iter/sec",
            "range": "stddev: 0.000473478209511702",
            "extra": "mean: 3.43614389714285 msec\nrounds: 350"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 871.0584057405332,
            "unit": "iter/sec",
            "range": "stddev: 0.00019862714842123135",
            "extra": "mean: 1.148028643555591 msec\nrounds: 1125"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1745.061631030609,
            "unit": "iter/sec",
            "range": "stddev: 0.00010693859932882344",
            "extra": "mean: 573.045663384057 usec\nrounds: 2234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "46ff94b8209062042851667b66da6b01714fead0",
          "message": "Merge pull request #399 from TeoZosa/dependabot/pip/darglint-1.8.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b92610",
          "timestamp": "2021-10-29T13:23:49Z",
          "tree_id": "34121dbcf838b2ec9adb128f6230df40afa1ec49"
        },
        "date": 1635515049758,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 325.2406848940576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007193992891480963",
            "extra": "mean: 3.0746460896358503 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 940.478113174315,
            "unit": "iter/sec",
            "range": "stddev: 0.000032369618676807526",
            "extra": "mean: 1.0632889654654332 msec\nrounds: 1332"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1920.7707046598543,
            "unit": "iter/sec",
            "range": "stddev: 0.000020832223356097147",
            "extra": "mean: 520.624350201701 usec\nrounds: 2727"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "67698831ba87b6c63f6af37296d0030b36b79187",
          "message": "Merge pull request #400 from TeoZosa/dependabot/pip/types-emoji-1.2.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4462229",
          "timestamp": "2021-10-29T13:51:46Z",
          "tree_id": "d2972c49d899bc4ed93738802c03c0f8e53f7cf4"
        },
        "date": 1635516753903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 348.2814970889026,
            "unit": "iter/sec",
            "range": "stddev: 0.00028383572455461983",
            "extra": "mean: 2.871240672727266 msec\nrounds: 385"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 925.7307645972726,
            "unit": "iter/sec",
            "range": "stddev: 0.00016388441399703248",
            "extra": "mean: 1.0802276841636966 msec\nrounds: 1124"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2052.078169837608,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726684492383554",
            "extra": "mean: 487.31087085202773 usec\nrounds: 2230"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "494dd5fba45239fb78b2d866814f24d4497f79be",
          "message": "Merge pull request #401 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a19b9ab",
          "timestamp": "2021-10-29T14:07:45Z",
          "tree_id": "ca8867d47a04ea48ae82fe2446d0edc141dad965"
        },
        "date": 1635517655775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 365.3630454746042,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694044562073191",
            "extra": "mean: 2.737003680000003 msec\nrounds: 450"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1093.5192647076542,
            "unit": "iter/sec",
            "range": "stddev: 0.00011660112644759426",
            "extra": "mean: 914.4786308518707 usec\nrounds: 1303"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2192.8416528369607,
            "unit": "iter/sec",
            "range": "stddev: 0.000059317867340618775",
            "extra": "mean: 456.0292799556515 usec\nrounds: 2704"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "af754349cfaf3e32f8e4fcd69e142cbec7069093",
          "message": "Merge pull request #402 from TeoZosa/dependabot/pip/hypothesis-6.24.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bbc3a36",
          "timestamp": "2021-10-29T14:22:57Z",
          "tree_id": "c5cce9c1d40b486ff9807564590f654e75fbb854"
        },
        "date": 1635518027287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.61935512459064,
            "unit": "iter/sec",
            "range": "stddev: 0.000526838494522331",
            "extra": "mean: 3.452807909090925 msec\nrounds: 385"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 836.5731322055456,
            "unit": "iter/sec",
            "range": "stddev: 0.00025070106896418396",
            "extra": "mean: 1.1953527569832358 msec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1643.6384623934314,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251670558456887",
            "extra": "mean: 608.4063027728259 usec\nrounds: 2236"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f2bff9c3e1793255abd1bf3e2a464eab0c7adede",
          "message": "Merge pull request #404 from TeoZosa/dependabot/pip/hypothesis-6.24.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0d5090a",
          "timestamp": "2021-11-01T13:38:17Z",
          "tree_id": "e40d3ebc336b2717d7e443fa06e159228f33ac6b"
        },
        "date": 1635774390474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.38616371202966,
            "unit": "iter/sec",
            "range": "stddev: 0.000033574446935482534",
            "extra": "mean: 2.671038881578914 msec\nrounds: 380"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1083.329808932876,
            "unit": "iter/sec",
            "range": "stddev: 0.000017673331278922963",
            "extra": "mean: 923.0799261261359 usec\nrounds: 1110"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2230.24910118823,
            "unit": "iter/sec",
            "range": "stddev: 0.000010151204215831926",
            "extra": "mean: 448.38040713354445 usec\nrounds: 2299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "11ebc27aa013dcebd4f605fc5939fcf14f95ec2d",
          "message": "Merge pull request #405 from TeoZosa/dependabot/github_actions/actions/checkout-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e7cdafb",
          "timestamp": "2021-11-03T13:16:30Z",
          "tree_id": "b2cbdc5f35a11912c41afd64a6cc3d3b61ceb79e"
        },
        "date": 1635945838478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.57693033934765,
            "unit": "iter/sec",
            "range": "stddev: 0.00037430537512161673",
            "extra": "mean: 3.4652804672364668 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 839.2833612814484,
            "unit": "iter/sec",
            "range": "stddev: 0.00019860736979343345",
            "extra": "mean: 1.1914927021467026 msec\nrounds: 1118"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1678.3874429407192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001064111969701946",
            "extra": "mean: 595.8099866666604 usec\nrounds: 2175"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "352179169021c35ce49106483db850b023acca75",
          "message": "Merge pull request #406 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d55c279",
          "timestamp": "2021-11-08T14:11:22Z",
          "tree_id": "e3b1ab57922c173643f5e5610e40961773f026b8"
        },
        "date": 1636381310149,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.64829960352705,
            "unit": "iter/sec",
            "range": "stddev: 0.0008403274910384821",
            "extra": "mean: 3.6016788196721112 msec\nrounds: 305"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 825.6785415782224,
            "unit": "iter/sec",
            "range": "stddev: 0.0003100547907259745",
            "extra": "mean: 1.2111250924464807 msec\nrounds: 887"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1627.4104335962652,
            "unit": "iter/sec",
            "range": "stddev: 0.00015569532758028898",
            "extra": "mean: 614.4731404911738 usec\nrounds: 1751"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3007eaaf2b49bfdbcdd9298d8ef69bef4997f8c6",
          "message": "Merge pull request #407 from TeoZosa/dependabot/pip/hypothesis-6.24.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8227f23",
          "timestamp": "2021-11-08T14:21:51Z",
          "tree_id": "066176a17458b989a89fc0fcab62718fb21091e0"
        },
        "date": 1636381595533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 368.9983074726589,
            "unit": "iter/sec",
            "range": "stddev: 0.000037207347808099004",
            "extra": "mean: 2.71003953066667 msec\nrounds: 375"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1083.6113019419677,
            "unit": "iter/sec",
            "range": "stddev: 0.000012699980181120808",
            "extra": "mean: 922.8401348415935 usec\nrounds: 1105"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2228.9812855749783,
            "unit": "iter/sec",
            "range": "stddev: 0.000010066510477748182",
            "extra": "mean: 448.6354400871716 usec\nrounds: 2295"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "336ace2e049c04bb53b9677cc6803149f9e4267b",
          "message": "Merge pull request #408 from TeoZosa/dependabot/pip/importlib-metadata-4.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e965154",
          "timestamp": "2021-11-09T14:23:04Z",
          "tree_id": "80c4fc635bbdeb444591fbb4a3e925259a4a7de5"
        },
        "date": 1636467944617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.0723473925722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000648855246622434",
            "extra": "mean: 3.114562833333352 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 942.5017017711072,
            "unit": "iter/sec",
            "range": "stddev: 0.00003839210989907782",
            "extra": "mean: 1.061006041814932 msec\nrounds: 1124"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1940.6702920294108,
            "unit": "iter/sec",
            "range": "stddev: 0.000025073574395944642",
            "extra": "mean: 515.2858804028341 usec\nrounds: 2383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "38aee9f0cdd11bcc50020f14e90b39675e60dee7",
          "message": "Merge pull request #403 from TeoZosa/dependabot/pip/black-21.10b0\n\n⬆️ Bump black from 21.9b0 to 21.10b0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d3400e7",
          "timestamp": "2021-11-09T20:46:14Z",
          "tree_id": "8d90733c806e28c53138a0de12361fb2edf3b2b6"
        },
        "date": 1636490908753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.2654264426638,
            "unit": "iter/sec",
            "range": "stddev: 0.00003030479821081214",
            "extra": "mean: 2.6862553677248875 msec\nrounds: 378"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.191807211591,
            "unit": "iter/sec",
            "range": "stddev: 0.00001283901942487295",
            "extra": "mean: 918.1119371069011 usec\nrounds: 1113"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2233.1381250300146,
            "unit": "iter/sec",
            "range": "stddev: 0.00000896647180671882",
            "extra": "mean: 447.80033478070663 usec\nrounds: 2303"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f26707e1bd7be78c0c01948844f530e63ceb0a0e",
          "message": "Merge pull request #409 from TeoZosa/dependabot/pip/sphinx-4.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fba9080",
          "timestamp": "2021-11-11T14:21:31Z",
          "tree_id": "d4bb2237b2f61a05cfb6f2fdf8df37368e4c27ad"
        },
        "date": 1636640851925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.31261231981296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381216089938374",
            "extra": "mean: 3.055183217391308 msec\nrounds: 368"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 996.2523980893443,
            "unit": "iter/sec",
            "range": "stddev: 0.00013645254158202918",
            "extra": "mean: 1.0037616992619973 msec\nrounds: 1084"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1936.0404407964375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000921545643124654",
            "extra": "mean: 516.5181361545452 usec\nrounds: 2174"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ca8f66c0c008f145989f73fa924e4e74cc8b8c35",
          "message": "Merge pull request #410 from TeoZosa/dependabot/pip/python-dotenv-0.19.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@97c4e91",
          "timestamp": "2021-11-11T14:30:12Z",
          "tree_id": "28bedce5801b94790805979afc2d6f632d374571"
        },
        "date": 1636641233653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 259.3959914906077,
            "unit": "iter/sec",
            "range": "stddev: 0.0007725445524905354",
            "extra": "mean: 3.8551096886792426 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 789.9082561545677,
            "unit": "iter/sec",
            "range": "stddev: 0.00033777486968365815",
            "extra": "mean: 1.2659698037189804 msec\nrounds: 968"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1541.2455653645613,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529235034962868",
            "extra": "mean: 648.8258733535841 usec\nrounds: 1974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "89e46fc8a23b5cbcb23e2ab1658a7bfac11f4d9e",
          "message": ":arrow_up: Bump structlog-sentry-logger to 0.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b5464a6",
          "timestamp": "2021-11-11T20:14:36Z",
          "tree_id": "1f3bff9fa30dc2fb82ebb873267c1a1a71878f80"
        },
        "date": 1636661808199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.26489624301365,
            "unit": "iter/sec",
            "range": "stddev: 0.000027522189633157835",
            "extra": "mean: 2.6862591936339935 msec\nrounds: 377"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1077.4555458459756,
            "unit": "iter/sec",
            "range": "stddev: 0.00001134336607531597",
            "extra": "mean: 928.1125368516615 usec\nrounds: 1099"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2209.470307418133,
            "unit": "iter/sec",
            "range": "stddev: 0.000008984011652065903",
            "extra": "mean: 452.5971662269341 usec\nrounds: 2274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "0eaf4a9a015a4aa85be5e39ca60cda0f545a9526",
          "message": "Merge pull request #411 from TeoZosa/dependabot/pip/hypothesis-6.24.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d59627a",
          "timestamp": "2021-11-15T14:21:24Z",
          "tree_id": "482120e6ac417f1d37d09c045343466d84861a05"
        },
        "date": 1636986218281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 369.9402341920168,
            "unit": "iter/sec",
            "range": "stddev: 0.000027746327826497348",
            "extra": "mean: 2.7031393386666664 msec\nrounds: 375"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1072.5725305267954,
            "unit": "iter/sec",
            "range": "stddev: 0.00001392243511905572",
            "extra": "mean: 932.337880692179 usec\nrounds: 1098"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2210.6928267026406,
            "unit": "iter/sec",
            "range": "stddev: 0.000009955476665468854",
            "extra": "mean: 452.346878734641 usec\nrounds: 2276"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "bc3bc6be274dcde48d54644343a9e1815b714414",
          "message": "Merge pull request #412 from TeoZosa/dependabot/pip/hypothesis-6.24.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5c0b311",
          "timestamp": "2021-11-16T14:18:49Z",
          "tree_id": "689a69d2a1c05dbd0fce9f899ca49c598b43b10d"
        },
        "date": 1637072466523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 371.711099577956,
            "unit": "iter/sec",
            "range": "stddev: 0.000029581611580595967",
            "extra": "mean: 2.6902613377308575 msec\nrounds: 379"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1075.157544439492,
            "unit": "iter/sec",
            "range": "stddev: 0.000033972541075406965",
            "extra": "mean: 930.0962497745634 usec\nrounds: 1109"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2224.4792999721103,
            "unit": "iter/sec",
            "range": "stddev: 0.000009933737632692411",
            "extra": "mean: 449.5434055118147 usec\nrounds: 2286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "67b90e11d3a452a91ba884d3c398cc36e5bc42e1",
          "message": "Merge pull request #413 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@904ed00",
          "timestamp": "2021-11-17T14:18:40Z",
          "tree_id": "d6071d697945804d09d35d9083f4b6206e51e089"
        },
        "date": 1637159604356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.24237363564663,
            "unit": "iter/sec",
            "range": "stddev: 0.0006170537127340581",
            "extra": "mean: 3.410148361581942 msec\nrounds: 354"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 898.7474931687478,
            "unit": "iter/sec",
            "range": "stddev: 0.00016355408527140002",
            "extra": "mean: 1.1126595707925286 msec\nrounds: 1123"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1752.1099520578746,
            "unit": "iter/sec",
            "range": "stddev: 0.00017044526265466315",
            "extra": "mean: 570.7404371657657 usec\nrounds: 2244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "edd6f3e404aee4531c81d92a7ad5c96d28060719",
          "message": "Merge pull request #416 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@106b73a",
          "timestamp": "2021-11-18T14:12:40Z",
          "tree_id": "107bc276961f2a31741f2f065bb75d6c4872afad"
        },
        "date": 1637245273947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.0229324507616,
            "unit": "iter/sec",
            "range": "stddev: 0.00002254021444109329",
            "extra": "mean: 2.7931171703296647 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1041.538851177304,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537464578803195",
            "extra": "mean: 960.1178092105249 usec\nrounds: 1064"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2098.9181181948297,
            "unit": "iter/sec",
            "range": "stddev: 0.000010239332069860416",
            "extra": "mean: 476.4359273148053 usec\nrounds: 2160"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fc957bf60ec9813a4f6fb5045ddc404ddf72e144",
          "message": "Merge pull request #417 from TeoZosa/dependabot/pip/hypothesis-6.24.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4b746bc",
          "timestamp": "2021-11-18T14:20:36Z",
          "tree_id": "ccda4d8fef71d9d2d6922876eea91a2bfed9ba44"
        },
        "date": 1637245576255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.51861666485706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004491080358741065",
            "extra": "mean: 3.7804522517482844 msec\nrounds: 286"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 763.1858863135257,
            "unit": "iter/sec",
            "range": "stddev: 0.0003784707186483744",
            "extra": "mean: 1.3102967677119601 msec\nrounds: 861"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1524.5066819378583,
            "unit": "iter/sec",
            "range": "stddev: 0.00011043844669940857",
            "extra": "mean: 655.9498963486747 usec\nrounds: 1698"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "06f8e6d3c57c8da39c04e7fdaebcc83d3bc9356c",
          "message": "Merge pull request #419 from TeoZosa/dependabot/pip/hypothesis-6.25.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@36204ba",
          "timestamp": "2021-11-19T14:18:20Z",
          "tree_id": "d3d568610c896142ee210f615de8da4df47cdaae"
        },
        "date": 1637331640559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 364.9577596954399,
            "unit": "iter/sec",
            "range": "stddev: 0.00003642030624552355",
            "extra": "mean: 2.7400431239892193 msec\nrounds: 371"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1058.9100779233704,
            "unit": "iter/sec",
            "range": "stddev: 0.00001212134015829825",
            "extra": "mean: 944.3672516188541 usec\nrounds: 1081"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2141.0849848892876,
            "unit": "iter/sec",
            "range": "stddev: 0.000009843824678545075",
            "extra": "mean: 467.0529227272632 usec\nrounds: 2200"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "897c2592656af225c8de1f1b736a16e1a1b79aac",
          "message": "Merge pull request #415 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-601776b\n\n⬆️ Bump python from `3148289` to `601776b` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d6f8b42",
          "timestamp": "2021-11-21T19:28:10Z",
          "tree_id": "a6935771c882360ff00fc3ddace01c5cf42f4f1d"
        },
        "date": 1637523022665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 359.91997537295526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000354813729771754",
            "extra": "mean: 2.7783953890410857 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1046.8626308700998,
            "unit": "iter/sec",
            "range": "stddev: 0.00017870777959702009",
            "extra": "mean: 955.2351669758716 usec\nrounds: 1078"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2100.9422309206125,
            "unit": "iter/sec",
            "range": "stddev: 0.000010925963303087268",
            "extra": "mean: 475.97691420663654 usec\nrounds: 2168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "25ac0b53afc2f2d229c308870d08af7a9f7a8ec3",
          "message": "Merge pull request #420 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8647015",
          "timestamp": "2021-11-22T14:25:26Z",
          "tree_id": "885ff8ae40bb2a736c943c2d1fd0aa80e5b0c3b8"
        },
        "date": 1637591366959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 364.1196844751785,
            "unit": "iter/sec",
            "range": "stddev: 0.00005852322896833071",
            "extra": "mean: 2.7463497378378308 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1057.255959836297,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154241895465842",
            "extra": "mean: 945.8447509294131 usec\nrounds: 1076"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2108.945856216975,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944986409284661",
            "extra": "mean: 474.1705421464917 usec\nrounds: 2171"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e80fd34afae31db959d325fb561d948b18990b83",
          "message": "Merge pull request #421 from TeoZosa/dependabot/pip/hypothesis-6.27.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e239803",
          "timestamp": "2021-11-22T14:34:42Z",
          "tree_id": "5c0db5398d184f0b6051f316501a93fb37283ec3"
        },
        "date": 1637591821980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.935822077127,
            "unit": "iter/sec",
            "range": "stddev: 0.0005963203599855535",
            "extra": "mean: 3.7744990170067836 msec\nrounds: 294"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 819.9544120091674,
            "unit": "iter/sec",
            "range": "stddev: 0.00010664205960904769",
            "extra": "mean: 1.219579997807024 msec\nrounds: 912"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1588.2762551238293,
            "unit": "iter/sec",
            "range": "stddev: 0.000052437657185901984",
            "extra": "mean: 629.6133917345729 usec\nrounds: 1718"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "eb072834ae2a4fd15143c4a230077f219574cfb8",
          "message": "Merge pull request #423 from TeoZosa/dependabot/pip/hypothesis-6.27.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fd40c6",
          "timestamp": "2021-11-23T14:23:21Z",
          "tree_id": "2b025cc273e14cd91fa79ce948b43cd8444d62a7"
        },
        "date": 1637677659589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.3951949772111,
            "unit": "iter/sec",
            "range": "stddev: 0.000030347411541329348",
            "extra": "mean: 2.4426275937500073 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1185.5147278957154,
            "unit": "iter/sec",
            "range": "stddev: 0.000011871042987106603",
            "extra": "mean: 843.5154591246593 usec\nrounds: 1211"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2393.454806505039,
            "unit": "iter/sec",
            "range": "stddev: 0.000010105189169600661",
            "extra": "mean: 417.80609238250713 usec\nrounds: 2468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "949c03aef07f43399f06972acf37a7d08217da05",
          "message": "Merge pull request #424 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dfec2f8",
          "timestamp": "2021-11-26T14:15:22Z",
          "tree_id": "61a4645b7d3b3d6007567f9dab479de6d793910f"
        },
        "date": 1637936872097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 336.0795882313241,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779345982420588",
            "extra": "mean: 2.9754856736842297 msec\nrounds: 380"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 979.4150812591607,
            "unit": "iter/sec",
            "range": "stddev: 0.00007780557153728216",
            "extra": "mean: 1.0210175635792484 msec\nrounds: 1274"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1944.143149483208,
            "unit": "iter/sec",
            "range": "stddev: 0.000040513261056475567",
            "extra": "mean: 514.3654160784508 usec\nrounds: 2550"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6f8d5eacc2035ce20502f18e1b7a369426a70f63",
          "message": "Merge pull request #425 from TeoZosa/dependabot/pip/pylint-2.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@09165c7",
          "timestamp": "2021-11-26T14:24:41Z",
          "tree_id": "36adba2f0c7a6fbdba4dc26c9447b2087a7e0c8f"
        },
        "date": 1637937204337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 316.7729726509295,
            "unit": "iter/sec",
            "range": "stddev: 0.00010121820246759677",
            "extra": "mean: 3.1568349775280797 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 938.5037147177137,
            "unit": "iter/sec",
            "range": "stddev: 0.000059677111105813844",
            "extra": "mean: 1.0655258837209647 msec\nrounds: 1290"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1860.972824341794,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342939927723065",
            "extra": "mean: 537.3533599845496 usec\nrounds: 2589"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "73bc4fe63f7f27a19663b8cbf656208f4604bd59",
          "message": "Merge pull request #426 from TeoZosa/dependabot/pip/hypothesis-6.27.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1a9e2b6",
          "timestamp": "2021-11-26T14:34:04Z",
          "tree_id": "0bb51adf842e8403e11153bd5dee420c6a29a1f3"
        },
        "date": 1637937539814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.4479905209344,
            "unit": "iter/sec",
            "range": "stddev: 0.00030602149000157666",
            "extra": "mean: 2.670597854214129 msec\nrounds: 439"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1071.581895277609,
            "unit": "iter/sec",
            "range": "stddev: 0.00011882389905690641",
            "extra": "mean: 933.1997903351432 usec\nrounds: 1283"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2157.3661059722467,
            "unit": "iter/sec",
            "range": "stddev: 0.00006906937244249259",
            "extra": "mean: 463.52818709429766 usec\nrounds: 2619"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7fed09ed7057fff3850b2ab538f2ee476282b68e",
          "message": "Merge pull request #429 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ab24745",
          "timestamp": "2021-11-29T14:17:08Z",
          "tree_id": "20a15443a92024d71b2303dab7563b7d8aae0d21"
        },
        "date": 1638198116382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.274259613842,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041631127906566",
            "extra": "mean: 3.6727673097643114 msec\nrounds: 297"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 786.643717788265,
            "unit": "iter/sec",
            "range": "stddev: 0.0003319452725112788",
            "extra": "mean: 1.2712235251958912 msec\nrounds: 893"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1515.8024485693697,
            "unit": "iter/sec",
            "range": "stddev: 0.00006003997446953012",
            "extra": "mean: 659.7165751670415 usec\nrounds: 1796"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "14827c1f939e6f40f3e0c244df036d95670b500d",
          "message": "Merge pull request #429 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ab24745",
          "timestamp": "2021-11-29T14:21:41Z",
          "tree_id": "20a15443a92024d71b2303dab7563b7d8aae0d21"
        },
        "date": 1638198486077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.2432271813448,
            "unit": "iter/sec",
            "range": "stddev: 0.0006149688411522343",
            "extra": "mean: 3.530534551351358 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 955.1782504367789,
            "unit": "iter/sec",
            "range": "stddev: 0.00012788964482700772",
            "extra": "mean: 1.0469250106383028 msec\nrounds: 1034"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1831.4201923709427,
            "unit": "iter/sec",
            "range": "stddev: 0.00009018372918197141",
            "extra": "mean: 546.0243390160548 usec\nrounds: 2053"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "cc6d68136b708ac751dff8ca486ea4adc3ad5a99",
          "message": "Merge pull request #432 from TeoZosa/dependabot/pip/poetry-1.1.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9da095a",
          "timestamp": "2021-11-29T14:51:55Z",
          "tree_id": "c0708b29ad2d923633eacabd6c85c3b6d8422001"
        },
        "date": 1638199070435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 331.3989769830435,
            "unit": "iter/sec",
            "range": "stddev: 0.0004267981043694948",
            "extra": "mean: 3.0175108236715116 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 955.9530939354087,
            "unit": "iter/sec",
            "range": "stddev: 0.00008325011225318997",
            "extra": "mean: 1.0460764302600474 msec\nrounds: 1269"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1912.7863260775944,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426436228146303",
            "extra": "mean: 522.7975474137899 usec\nrounds: 2552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "1f662787ddb1f6e20f64e55def014c0b7b083d89",
          "message": "Merge pull request #436 from TeoZosa/dependabot/pip/icontract-2.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fcd9738",
          "timestamp": "2021-11-29T15:06:44Z",
          "tree_id": "e92d837c1d90e96208f66b9fb7cf61b9e4e49a02"
        },
        "date": 1638199334327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.0508347137209,
            "unit": "iter/sec",
            "range": "stddev: 0.0004125012424445577",
            "extra": "mean: 3.5329342908011747 msec\nrounds: 337"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 789.546223891549,
            "unit": "iter/sec",
            "range": "stddev: 0.0002749191239978183",
            "extra": "mean: 1.2665502914714197 msec\nrounds: 1067"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1553.303560517885,
            "unit": "iter/sec",
            "range": "stddev: 0.00017273021761372934",
            "extra": "mean: 643.7891635725031 usec\nrounds: 1993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "c81542d1bf2bc086e9f13587eb9cd8325198a5f7",
          "message": "Merge pull request #436 from TeoZosa/dependabot/pip/icontract-2.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7e85c24",
          "timestamp": "2021-11-29T15:14:55Z",
          "tree_id": "e92d837c1d90e96208f66b9fb7cf61b9e4e49a02"
        },
        "date": 1638199592277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.00634333204323,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234750409331026",
            "extra": "mean: 3.6629185527156514 msec\nrounds: 313"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.8245913158268,
            "unit": "iter/sec",
            "range": "stddev: 0.000131525930050957",
            "extra": "mean: 1.1753303914893536 msec\nrounds: 940"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1622.4756939951624,
            "unit": "iter/sec",
            "range": "stddev: 0.00009730369741893005",
            "extra": "mean: 616.3420528893184 usec\nrounds: 2042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e4710fb6cbb59aaa3d96ac30af0fac5fe8fc43aa",
          "message": "Merge pull request #434 from TeoZosa/dependabot/pip/hypothesis-6.29.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b006c9d",
          "timestamp": "2021-11-29T15:20:58Z",
          "tree_id": "8b639a6a8bb05f63dcfb008c93e9df5e651f8323"
        },
        "date": 1638199725016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 353.4551293367149,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356093880345904",
            "extra": "mean: 2.8292134333333205 msec\nrounds: 360"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1039.4206370775582,
            "unit": "iter/sec",
            "range": "stddev: 0.00001355395855088761",
            "extra": "mean: 962.074413696082 usec\nrounds: 1066"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2066.1874133832725,
            "unit": "iter/sec",
            "range": "stddev: 0.000011363989054638929",
            "extra": "mean: 483.9832018735188 usec\nrounds: 2135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fdc09b348773b70296cde6778c759b8553757a78",
          "message": "Merge pull request #437 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.16.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@31aafa7",
          "timestamp": "2021-12-01T14:16:39Z",
          "tree_id": "bf333251df97ac1549d38ddfd39390435ced0539"
        },
        "date": 1638368908821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 258.1214312195252,
            "unit": "iter/sec",
            "range": "stddev: 0.0005014747885902306",
            "extra": "mean: 3.8741455727848004 msec\nrounds: 316"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 728.4984276466708,
            "unit": "iter/sec",
            "range": "stddev: 0.00039713801912693615",
            "extra": "mean: 1.3726865591603037 msec\nrounds: 1048"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1385.7346320377226,
            "unit": "iter/sec",
            "range": "stddev: 0.00014624481909997038",
            "extra": "mean: 721.6388887744691 usec\nrounds: 1942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "b09c8bd6e882b61106f970691701f67b0f825daf",
          "message": "Merge pull request #438 from TeoZosa/dependabot/pip/pre-commit-2.16.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@47f8cb0",
          "timestamp": "2021-12-01T14:23:07Z",
          "tree_id": "1c0bba091829e5d844861b6ece9e0d61983533a1"
        },
        "date": 1638369116259,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 360.59555998155133,
            "unit": "iter/sec",
            "range": "stddev: 0.000023374727437927725",
            "extra": "mean: 2.773189997267747 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1055.149605629667,
            "unit": "iter/sec",
            "range": "stddev: 0.000012044979477238473",
            "extra": "mean: 947.7329040968024 usec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2093.0160668524677,
            "unit": "iter/sec",
            "range": "stddev: 0.000015836363031223114",
            "extra": "mean: 477.7794188191905 usec\nrounds: 2168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "2cbf0990b7bc9989c6f7c6c0dfae08bfcae241f5",
          "message": "Merge pull request #439 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@12fe298",
          "timestamp": "2021-12-01T14:32:55Z",
          "tree_id": "bf9372caaf43838385fc5a31744494a2ba2b2148"
        },
        "date": 1638369369719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 307.75031870182465,
            "unit": "iter/sec",
            "range": "stddev: 0.00005854842496513077",
            "extra": "mean: 3.2493873742138577 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 903.4612211852789,
            "unit": "iter/sec",
            "range": "stddev: 0.000029940190061307694",
            "extra": "mean: 1.1068543691206458 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1767.6380217023404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001595461729781947",
            "extra": "mean: 565.7266859630801 usec\nrounds: 1952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e44dabf1cabc3987cfd1a41f08206514a6e8ecba",
          "message": "Merge pull request #440 from TeoZosa/dependabot/pip/hypothesis-6.29.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cda1036",
          "timestamp": "2021-12-02T14:19:38Z",
          "tree_id": "7ae9db3ffa5f28e39ab85f83abe8a9b41a33fe3e"
        },
        "date": 1638454922518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.5632271740837,
            "unit": "iter/sec",
            "range": "stddev: 0.000030098622073392613",
            "extra": "mean: 2.7967081735537045 msec\nrounds: 363"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1039.258151331772,
            "unit": "iter/sec",
            "range": "stddev: 0.000023741630082959405",
            "extra": "mean: 962.2248319327936 usec\nrounds: 1071"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2090.4980876989,
            "unit": "iter/sec",
            "range": "stddev: 0.000011619308276222243",
            "extra": "mean: 478.35489823420147 usec\nrounds: 2152"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "b189c224c413e93d30ca99a4ca831cf017f2cc8a",
          "message": "Merge pull request #441 from TeoZosa/dependabot/pip/hypothesis-6.30.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@33090c6",
          "timestamp": "2021-12-03T14:18:31Z",
          "tree_id": "4b6d08fc904eb35cf3df7e332e34a4ee4d2d89ff"
        },
        "date": 1638541248300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 360.6021464694941,
            "unit": "iter/sec",
            "range": "stddev: 0.00004987105383623022",
            "extra": "mean: 2.7731393442623262 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1054.1737174145044,
            "unit": "iter/sec",
            "range": "stddev: 0.000010929275238305026",
            "extra": "mean: 948.6102560521311 usec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2109.7146589008094,
            "unit": "iter/sec",
            "range": "stddev: 0.000009318679012041397",
            "extra": "mean: 473.99774930748873 usec\nrounds: 2166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ec191bd254b29ec803f7ecc5afa250f04e97ee5b",
          "message": "Merge pull request #442 from TeoZosa/dependabot/pip/pylint-2.12.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@154dfda",
          "timestamp": "2021-12-06T14:21:22Z",
          "tree_id": "fd2e9ed10404988f04d241c9c8201a51d1c3488c"
        },
        "date": 1638801023696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 360.9235610285281,
            "unit": "iter/sec",
            "range": "stddev: 0.000036074350805935964",
            "extra": "mean: 2.7706697704918133 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1049.4218436698316,
            "unit": "iter/sec",
            "range": "stddev: 0.000015237558272115605",
            "extra": "mean: 952.9056461251051 usec\nrounds: 1071"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2098.6723211732556,
            "unit": "iter/sec",
            "range": "stddev: 0.000011701381838887668",
            "extra": "mean: 476.49172760850695 usec\nrounds: 2166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fb052bb3859c48347da571dccb1caefecb5e129e",
          "message": "Merge pull request #443 from TeoZosa/dependabot/pip/hypothesis-6.30.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9de1fc5",
          "timestamp": "2021-12-06T14:30:54Z",
          "tree_id": "1f941012e358246b9f26803143edaef35aadf7a9"
        },
        "date": 1638801468354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 290.2195497183872,
            "unit": "iter/sec",
            "range": "stddev: 0.0003783820755505942",
            "extra": "mean: 3.445667257668699 msec\nrounds: 326"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 872.8210867899368,
            "unit": "iter/sec",
            "range": "stddev: 0.00012211061028665412",
            "extra": "mean: 1.1457101748971281 msec\nrounds: 972"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1633.5387572389275,
            "unit": "iter/sec",
            "range": "stddev: 0.00008882110503011188",
            "extra": "mean: 612.1679057619912 usec\nrounds: 1857"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "b44562af99af68971f38d372a98ace578fdeda64",
          "message": "Merge pull request #445 from TeoZosa/dependabot/github_actions/actions/download-artifact-2.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d7e681",
          "timestamp": "2021-12-08T14:13:12Z",
          "tree_id": "00ef6ee9a4930a96377fbbb9cb70bdebe7574313"
        },
        "date": 1638973062694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.6292673748267,
            "unit": "iter/sec",
            "range": "stddev: 0.00033950330776471324",
            "extra": "mean: 3.5761635732484263 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 827.6331187030323,
            "unit": "iter/sec",
            "range": "stddev: 0.00017409899642655414",
            "extra": "mean: 1.2082648427205047 msec\nrounds: 941"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1553.4710174610625,
            "unit": "iter/sec",
            "range": "stddev: 0.00030228027189034383",
            "extra": "mean: 643.7197660979631 usec\nrounds: 1817"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "36171fbd01c036a3e7d8548e4b3cf19dc35a52d3",
          "message": "Merge pull request #447 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.10.1-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f5c84c5",
          "timestamp": "2021-12-08T14:21:20Z",
          "tree_id": "17247d08bf5983a335c018b3c66ebf24b9ccfeb1"
        },
        "date": 1638973416728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 400.37013327000983,
            "unit": "iter/sec",
            "range": "stddev: 0.00006167391286773471",
            "extra": "mean: 2.49768880568721 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1173.3329253716565,
            "unit": "iter/sec",
            "range": "stddev: 0.00002332982971038878",
            "extra": "mean: 852.2730236034646 usec\nrounds: 1271"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2357.9664291362024,
            "unit": "iter/sec",
            "range": "stddev: 0.00001624299187332887",
            "extra": "mean: 424.0942481807647 usec\nrounds: 2611"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ed78a9580360e584237d1729e94f8669d88226bf",
          "message": "Merge pull request #448 from TeoZosa/dependabot/pip/hypothesis-6.31.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@74d4e8d",
          "timestamp": "2021-12-09T14:17:13Z",
          "tree_id": "9cd22c6ba9a08dba45a3a105bc3ed102f1dee13d"
        },
        "date": 1639059618123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 243.65534198122768,
            "unit": "iter/sec",
            "range": "stddev: 0.00064689482865567",
            "extra": "mean: 4.104157913669074 msec\nrounds: 278"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 713.993708545207,
            "unit": "iter/sec",
            "range": "stddev: 0.00044754959992729176",
            "extra": "mean: 1.4005725653206988 msec\nrounds: 842"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1368.8837274868333,
            "unit": "iter/sec",
            "range": "stddev: 0.00045464466290208",
            "extra": "mean: 730.5222349570362 usec\nrounds: 1745"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "912441839bd1f90037debfab4635882de23576fc",
          "message": "Merge pull request #449 from TeoZosa/dependabot/pip/pytest-xdist-2.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1534e63",
          "timestamp": "2021-12-10T14:22:12Z",
          "tree_id": "8c361256eeb0fb8d90edaa22f5bee4576b578817"
        },
        "date": 1639146313790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.5933618713386,
            "unit": "iter/sec",
            "range": "stddev: 0.00003556680459941463",
            "extra": "mean: 2.8043146814404443 msec\nrounds: 361"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1041.448781402231,
            "unit": "iter/sec",
            "range": "stddev: 0.000011520055625571555",
            "extra": "mean: 960.200845070438 usec\nrounds: 1065"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2072.4534388146944,
            "unit": "iter/sec",
            "range": "stddev: 0.000011116500871878117",
            "extra": "mean: 482.5198874296223 usec\nrounds: 2132"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fcf39c7a53c9f991a7b663d4794250b09a5e102b",
          "message": "Merge pull request #450 from TeoZosa/dependabot/pip/hypothesis-6.31.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@323ef30",
          "timestamp": "2021-12-10T14:32:30Z",
          "tree_id": "dc81da6a356db00da7da7803c06cd501897757f1"
        },
        "date": 1639146885822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 331.3827428585429,
            "unit": "iter/sec",
            "range": "stddev: 0.00035185568571502137",
            "extra": "mean: 3.0176586486486694 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 952.5497814723564,
            "unit": "iter/sec",
            "range": "stddev: 0.00017334693569192054",
            "extra": "mean: 1.0498138989169676 msec\nrounds: 1108"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1900.084889320644,
            "unit": "iter/sec",
            "range": "stddev: 0.00009875406144387573",
            "extra": "mean: 526.2922754769867 usec\nrounds: 2149"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ef99a8a47caa92e67040baa46c2ad6379f1e8d61",
          "message": "Merge pull request #451 from TeoZosa/dependabot/pip/hypothesis-6.31.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@82e6026",
          "timestamp": "2021-12-13T14:23:52Z",
          "tree_id": "8a2aaf2f098fe8942d58108cbcd5d89c05596fa1"
        },
        "date": 1639406550304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.49537133235816,
            "unit": "iter/sec",
            "range": "stddev: 0.00005643765024774275",
            "extra": "mean: 3.262692012779592 msec\nrounds: 313"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.0199115105949,
            "unit": "iter/sec",
            "range": "stddev: 0.000013989719733154209",
            "extra": "mean: 1.1223093749999875 msec\nrounds: 960"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1774.213822594239,
            "unit": "iter/sec",
            "range": "stddev: 0.000011946930371964544",
            "extra": "mean: 563.6299228791992 usec\nrounds: 1945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "15c59d99ff65bcedb56a1c05f38e95426d7f94eb",
          "message": "Merge pull request #452 from TeoZosa/dependabot/pip/myst-parser-0.16.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2fcf44c",
          "timestamp": "2021-12-13T14:39:37Z",
          "tree_id": "52308c2d6cf14fc1db1ba6733d676a581b7010e6"
        },
        "date": 1639406933946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.7359092674068,
            "unit": "iter/sec",
            "range": "stddev: 0.00002292901235693106",
            "extra": "mean: 2.787565934065959 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1046.9328539967348,
            "unit": "iter/sec",
            "range": "stddev: 0.000012550462815055086",
            "extra": "mean: 955.1710944808298 usec\nrounds: 1069"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2092.2651972413005,
            "unit": "iter/sec",
            "range": "stddev: 0.000009954594761884472",
            "extra": "mean: 477.9508837209178 usec\nrounds: 2150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "2f9b95b3394bb88d1198ca6e1fd67fee73d168df",
          "message": "Merge pull request #453 from TeoZosa/dependabot/pip/hypothesis-6.31.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5459dc8",
          "timestamp": "2021-12-15T14:18:49Z",
          "tree_id": "a639f6be41ea9000e26fb766c2c10933a30ad812"
        },
        "date": 1639578103158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.98195932108695,
            "unit": "iter/sec",
            "range": "stddev: 0.00032646803157584204",
            "extra": "mean: 2.519006157635441 msec\nrounds: 406"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1169.705070445788,
            "unit": "iter/sec",
            "range": "stddev: 0.000015557801841896432",
            "extra": "mean: 854.9163590603987 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2360.0554204777177,
            "unit": "iter/sec",
            "range": "stddev: 0.000009399697898658238",
            "extra": "mean: 423.71886326194067 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "975bcba7c3d8ddaf1edfcb42e0cfa6479ab65afc",
          "message": "Merge pull request #454 from TeoZosa/dependabot/github_actions/actions/upload-artifact-2.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c7621bc",
          "timestamp": "2021-12-16T14:16:04Z",
          "tree_id": "1bf346cb4ccfa24a259084eb4a5103f8b4d97bfb"
        },
        "date": 1639665033807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 355.73259649320016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391980833841434",
            "extra": "mean: 2.8111002754821066 msec\nrounds: 363"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1042.5316948599086,
            "unit": "iter/sec",
            "range": "stddev: 0.000012926937444717511",
            "extra": "mean: 959.2034514925479 usec\nrounds: 1072"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2093.86442315334,
            "unit": "iter/sec",
            "range": "stddev: 0.000010930666052331341",
            "extra": "mean: 477.5858402971524 usec\nrounds: 2154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "5d138e912a1b43e4d0684ea6bf5ef9df15a0058e",
          "message": "Merge pull request #455 from TeoZosa/dependabot/pip/myst-parser-0.16.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@199630e",
          "timestamp": "2021-12-16T14:23:29Z",
          "tree_id": "3ec20061240363af4b03f1c43f88caa8bdb30281"
        },
        "date": 1639665529540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.19994238980684,
            "unit": "iter/sec",
            "range": "stddev: 0.0002660204347076673",
            "extra": "mean: 3.594537049180351 msec\nrounds: 305"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 775.7153813017452,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527178710453914",
            "extra": "mean: 1.2891326175869786 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1494.0935464481927,
            "unit": "iter/sec",
            "range": "stddev: 0.00008860544235505658",
            "extra": "mean: 669.3021346469451 usec\nrounds: 1827"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "10d199a1ed2e0cdf059879dcad5ff383a0a7373e",
          "message": "Merge pull request #457 from TeoZosa/dependabot/pip/importlib-metadata-4.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@775920e",
          "timestamp": "2021-12-17T14:19:33Z",
          "tree_id": "76b15cbf08f69bec8e04993ff0fa6c924a0fa49f"
        },
        "date": 1639750927810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 309.1608033264558,
            "unit": "iter/sec",
            "range": "stddev: 0.00007384283560814148",
            "extra": "mean: 3.2345626911315093 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 896.5760898221921,
            "unit": "iter/sec",
            "range": "stddev: 0.00002429777370671619",
            "extra": "mean: 1.115354303278731 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1799.5042709149923,
            "unit": "iter/sec",
            "range": "stddev: 0.000021623654316356196",
            "extra": "mean: 555.7086005089229 usec\nrounds: 1965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ffb00cfec3f04117e1a449725a912a6fd631a8c2",
          "message": "Merge pull request #458 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d3ac36",
          "timestamp": "2021-12-20T14:16:15Z",
          "tree_id": "860d271ec22bd7ce4386793fea8a6184db858c17"
        },
        "date": 1640010702456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.36615650670404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006309761407300369",
            "extra": "mean: 3.3628574675324736 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 883.612432649997,
            "unit": "iter/sec",
            "range": "stddev: 0.00001806849174102697",
            "extra": "mean: 1.131717892425926 msec\nrounds: 911"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1759.053607860591,
            "unit": "iter/sec",
            "range": "stddev: 0.00001399422997849311",
            "extra": "mean: 568.4875068794676 usec\nrounds: 1817"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "00ebb226284f443ff8469ecf607e1224b384f8fc",
          "message": "Merge pull request #459 from TeoZosa/dependabot/pip/importlib-metadata-4.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ac4c8ce",
          "timestamp": "2021-12-20T14:25:21Z",
          "tree_id": "eece0f6c97b311b56e24594af6c988c932824365"
        },
        "date": 1640011365602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 359.3053521987063,
            "unit": "iter/sec",
            "range": "stddev: 0.000038454707666895916",
            "extra": "mean: 2.783148076923082 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1049.728633353604,
            "unit": "iter/sec",
            "range": "stddev: 0.000011752298726122223",
            "extra": "mean: 952.6271535580255 usec\nrounds: 1068"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2097.589832346416,
            "unit": "iter/sec",
            "range": "stddev: 0.000009638937527977482",
            "extra": "mean: 476.7376274328023 usec\nrounds: 2158"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9759589cce5c80978bd4b491767d38fc46cd456c",
          "message": "Merge pull request #460 from TeoZosa/dependabot/pip/sphinx-4.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8c23eae",
          "timestamp": "2021-12-20T14:38:52Z",
          "tree_id": "f371682c7a9af087bd838bf01ec83b87344684fa"
        },
        "date": 1640011622819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.2105812445283,
            "unit": "iter/sec",
            "range": "stddev: 0.000040984636715564454",
            "extra": "mean: 2.7916539944903564 msec\nrounds: 363"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1048.0331585177407,
            "unit": "iter/sec",
            "range": "stddev: 0.000013017890499400633",
            "extra": "mean: 954.1682835821005 usec\nrounds: 1072"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2074.8607840791883,
            "unit": "iter/sec",
            "range": "stddev: 0.000011138774729038945",
            "extra": "mean: 481.960046511648 usec\nrounds: 2150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "53c2b239284e23f1e59899cff3e8b31f53d2eb4f",
          "message": "Merge pull request #464 from TeoZosa/dependabot/pip/hypothesis-6.32.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@da12d17",
          "timestamp": "2021-12-23T14:20:39Z",
          "tree_id": "5b15eb9d541171e5ec0ac0ead29b067c75c32474"
        },
        "date": 1640269372182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.18063471374563,
            "unit": "iter/sec",
            "range": "stddev: 0.00005407128694144495",
            "extra": "mean: 2.7918873972602958 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1052.5502881871053,
            "unit": "iter/sec",
            "range": "stddev: 0.000012053482804359783",
            "extra": "mean: 950.0733705772701 usec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2080.598713942686,
            "unit": "iter/sec",
            "range": "stddev: 0.000009884590626262921",
            "extra": "mean: 480.6308844174104 usec\nrounds: 2137"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3d06afaa35dc78770af279b38c88657d0d3ca8ee",
          "message": "Merge pull request #465 from TeoZosa/dependabot/github_actions/actions/setup-node-2.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d17ca4d",
          "timestamp": "2021-12-28T14:11:40Z",
          "tree_id": "1d8f791a34ac6f1f4c4388a2ca44bf334bab56aa"
        },
        "date": 1640700838761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 403.1615714629866,
            "unit": "iter/sec",
            "range": "stddev: 0.00005347799525282808",
            "extra": "mean: 2.4803951338199597 msec\nrounds: 411"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1170.738550862757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001088018671061267",
            "extra": "mean: 854.1616736401703 usec\nrounds: 1195"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2337.950558764209,
            "unit": "iter/sec",
            "range": "stddev: 0.000009798550864344594",
            "extra": "mean: 427.72504159736326 usec\nrounds: 2404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d1f9f28f312529b23de015fdf45d58365fa59c6c",
          "message": "Merge pull request #466 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c2fd9f",
          "timestamp": "2021-12-29T14:16:55Z",
          "tree_id": "c55090df7e1bd9096d946899f0b19929f4cbe026"
        },
        "date": 1640787591066,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 252.3671366676216,
            "unit": "iter/sec",
            "range": "stddev: 0.000670764431530837",
            "extra": "mean: 3.9624810631229024 msec\nrounds: 301"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 697.3700351418079,
            "unit": "iter/sec",
            "range": "stddev: 0.0004736472812979169",
            "extra": "mean: 1.433958945191348 msec\nrounds: 967"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1411.1728476890605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002710775557206875",
            "extra": "mean: 708.6304145077635 usec\nrounds: 1930"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "536eadec0e411d9dcff954393d6aa9b9bfbb679f",
          "message": "Merge pull request #467 from TeoZosa/dependabot/pip/tox-3.24.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f42a498",
          "timestamp": "2021-12-29T14:29:41Z",
          "tree_id": "32e9c298038af68969c9054952393b64e481fb37"
        },
        "date": 1640788319015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.7296295268638,
            "unit": "iter/sec",
            "range": "stddev: 0.00007673428589856262",
            "extra": "mean: 2.446605109489071 msec\nrounds: 411"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1202.7934878756312,
            "unit": "iter/sec",
            "range": "stddev: 0.00002936020189159728",
            "extra": "mean: 831.3979166666388 usec\nrounds: 1296"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2355.155235528094,
            "unit": "iter/sec",
            "range": "stddev: 0.000013919938164702876",
            "extra": "mean: 424.60046153848157 usec\nrounds: 2600"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "0292013023880726f737f8b2c4d3dc1b91a0554e",
          "message": "Merge pull request #468 from TeoZosa/dependabot/pip/hypothesis-6.33.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@46142bb",
          "timestamp": "2021-12-30T14:21:21Z",
          "tree_id": "11130950f2ffd2db5ec09c5213a4ca001f14bc54"
        },
        "date": 1640874383919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.4408126969634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003309514937947829",
            "extra": "mean: 3.630544036697233 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 808.8352503597735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003889848783292963",
            "extra": "mean: 1.2363457200402623 msec\nrounds: 993"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1544.295896488675,
            "unit": "iter/sec",
            "range": "stddev: 0.00013550173541440106",
            "extra": "mean: 647.544296577967 usec\nrounds: 2104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "36d25103c60cfc1753b8f0778eafaeac2fc45c8c",
          "message": "Merge pull request #469 from TeoZosa/dependabot/pip/pygments-2.11.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dd5637f",
          "timestamp": "2021-12-30T14:33:18Z",
          "tree_id": "477eabbf4c40d812a7fe009a2edcc8082d99d7a7"
        },
        "date": 1640874985617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.8454613833288,
            "unit": "iter/sec",
            "range": "stddev: 0.00025525837097401156",
            "extra": "mean: 3.196466381766371 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 875.4828150930906,
            "unit": "iter/sec",
            "range": "stddev: 0.00024291741227774525",
            "extra": "mean: 1.1422268750000186 msec\nrounds: 1120"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1742.5388277604673,
            "unit": "iter/sec",
            "range": "stddev: 0.00014732099990700923",
            "extra": "mean: 573.8753042795681 usec\nrounds: 2547"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a9ac1f0a3158d425a0581fa63a402eede671853a",
          "message": "Merge pull request #470 from TeoZosa/dependabot/pip/hypothesis-6.34.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4184473",
          "timestamp": "2021-12-31T14:15:54Z",
          "tree_id": "2710e974ac15124ddad28f954f76f5a691b5e04f"
        },
        "date": 1640960294314,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 361.57758076739225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112015469951949",
            "extra": "mean: 2.7656581967213105 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1045.4438178198861,
            "unit": "iter/sec",
            "range": "stddev: 0.000011761835516373715",
            "extra": "mean: 956.5315543070958 usec\nrounds: 1068"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2077.925699535374,
            "unit": "iter/sec",
            "range": "stddev: 0.000013248480644549705",
            "extra": "mean: 481.2491612301638 usec\nrounds: 2146"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "80dd505e8d54ca26b46de9043702ed40a171ce4e",
          "message": "Merge pull request #471 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.13.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@20f8841",
          "timestamp": "2022-01-03T14:18:58Z",
          "tree_id": "fc6b1bcd1160bc1fe2b3e600ff6ae4b7d8a36b9f"
        },
        "date": 1641219865351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.944841415591,
            "unit": "iter/sec",
            "range": "stddev: 0.0005627577689019528",
            "extra": "mean: 3.472887359550572 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 882.0707186797229,
            "unit": "iter/sec",
            "range": "stddev: 0.0002229342788447598",
            "extra": "mean: 1.1336959484346028 msec\nrounds: 1086"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1776.282252174606,
            "unit": "iter/sec",
            "range": "stddev: 0.0001170072265850562",
            "extra": "mean: 562.9735920492108 usec\nrounds: 2113"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f8e906e9e7429fe01398adb631225ef89ecba7c1",
          "message": "Merge pull request #472 from TeoZosa/dependabot/pip/pygments-2.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1b568ff",
          "timestamp": "2022-01-03T14:30:39Z",
          "tree_id": "5ed7d44204c039e1665354c3c1a3423b44667cf4"
        },
        "date": 1641220372408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 403.17820728748757,
            "unit": "iter/sec",
            "range": "stddev: 0.00003799114729998859",
            "extra": "mean: 2.4802927884615222 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1163.2070380477394,
            "unit": "iter/sec",
            "range": "stddev: 0.00001443048699290225",
            "extra": "mean: 859.6921848739354 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2341.522536226035,
            "unit": "iter/sec",
            "range": "stddev: 0.000011907278700449894",
            "extra": "mean: 427.07254981699083 usec\nrounds: 2459"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "8074af874c1842a401f4529c242a99640439490f",
          "message": "Merge pull request #473 from TeoZosa/dependabot/pip/hypothesis-6.34.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4ca6029",
          "timestamp": "2022-01-05T14:19:13Z",
          "tree_id": "18cd2bb03b92cfe436cdbc499c24799372af1d1d"
        },
        "date": 1641392533915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.4065866810445,
            "unit": "iter/sec",
            "range": "stddev: 0.0003459342765290634",
            "extra": "mean: 3.579013694267509 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 791.6377249552326,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463909596212022",
            "extra": "mean: 1.2632040748898752 msec\nrounds: 908"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1577.877239585912,
            "unit": "iter/sec",
            "range": "stddev: 0.00015042236129976446",
            "extra": "mean: 633.7628650137787 usec\nrounds: 1815"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "902ba91bf4b9b080acb577fe5c3fdbe2bf2ffcb0",
          "message": "Merge pull request #474 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.13.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1ebf36f",
          "timestamp": "2022-01-05T14:29:10Z",
          "tree_id": "db5790b0f0d54ce653bd66650e6ced975b0dc031"
        },
        "date": 1641393090385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 369.7686931824362,
            "unit": "iter/sec",
            "range": "stddev: 0.0003154528388062234",
            "extra": "mean: 2.7043933638444093 msec\nrounds: 437"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1020.868800183677,
            "unit": "iter/sec",
            "range": "stddev: 0.00018958391035585976",
            "extra": "mean: 979.5578039215986 usec\nrounds: 1275"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2129.265710348067,
            "unit": "iter/sec",
            "range": "stddev: 0.00007177840798008986",
            "extra": "mean: 469.6454722114188 usec\nrounds: 2573"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3c3ffbf4662bbe2e9689522fe884e1eb981ae432",
          "message": "Merge pull request #475 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.9\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@922ac5f",
          "timestamp": "2022-01-06T14:14:49Z",
          "tree_id": "a35c8a048328360488b1b9a69da5e2aaedba9ccc"
        },
        "date": 1641478788392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.3817797245567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006088377875665946",
            "extra": "mean: 3.467625454545479 msec\nrounds: 330"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 797.4736157720467,
            "unit": "iter/sec",
            "range": "stddev: 0.00026641689992058467",
            "extra": "mean: 1.253959980897781 msec\nrounds: 1047"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1568.9323442275972,
            "unit": "iter/sec",
            "range": "stddev: 0.00020684491509402435",
            "extra": "mean: 637.3761135584919 usec\nrounds: 2043"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "1347cb9115e1cc527942f3db7ad42f2a2cb1f36f",
          "message": "Merge pull request #476 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e4e488d",
          "timestamp": "2022-01-06T16:01:46Z",
          "tree_id": "f21d49d3e6346f09dccf0e3e616d419a3ba7df49"
        },
        "date": 1641485063714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.8852240538503,
            "unit": "iter/sec",
            "range": "stddev: 0.00018729209778334854",
            "extra": "mean: 3.0498477108433675 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 943.0283310629354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007203057423920104",
            "extra": "mean: 1.0604135284810043 msec\nrounds: 1264"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1790.4950566277864,
            "unit": "iter/sec",
            "range": "stddev: 0.00008895794659679476",
            "extra": "mean: 558.5047533632387 usec\nrounds: 2230"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a64d58ccd6dcdf3eeb4959bdb16935d03dc28141",
          "message": "Merge pull request #477 from TeoZosa/dependabot/pip/pygments-2.11.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a15e016",
          "timestamp": "2022-01-06T16:10:46Z",
          "tree_id": "e979a9e1c416a588af6e18cf47a70245a33beb6e"
        },
        "date": 1641485609406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.7697605422606,
            "unit": "iter/sec",
            "range": "stddev: 0.00045112656783171453",
            "extra": "mean: 3.404026330532219 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.1110487036724,
            "unit": "iter/sec",
            "range": "stddev: 0.00021725409270688574",
            "extra": "mean: 1.172180341023047 msec\nrounds: 997"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1600.4394090941976,
            "unit": "iter/sec",
            "range": "stddev: 0.00021848686591945153",
            "extra": "mean: 624.8284029483947 usec\nrounds: 2035"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "2cc32fdf0fcabd2f61dc03975d2f8690c3fafbf9",
          "message": "Merge pull request #463 from TeoZosa/dependabot/pip/mypy-0.930\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0ce67bf",
          "timestamp": "2022-01-07T01:48:59Z",
          "tree_id": "ea5508efe6ec081f501cbe45a59c60d20890bc1f"
        },
        "date": 1641520289185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.24280006906577,
            "unit": "iter/sec",
            "range": "stddev: 0.00007617151821522609",
            "extra": "mean: 2.7992166666666756 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1049.2444753355824,
            "unit": "iter/sec",
            "range": "stddev: 0.00001168608887120602",
            "extra": "mean: 953.0667289719754 usec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2088.3962959434807,
            "unit": "iter/sec",
            "range": "stddev: 0.000011144955259051723",
            "extra": "mean: 478.8363214119891 usec\nrounds: 2153"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a79c0736566b15af749153d5401f3e90f10dcdfe",
          "message": "Merge pull request #444 from TeoZosa/dependabot/pip/black-21.12b0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ff268a2",
          "timestamp": "2022-01-07T01:56:02Z",
          "tree_id": "c02263b9b5aca2dbb6a470280f67e82aa5ac02cb"
        },
        "date": 1641520660620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.43626988553444,
            "unit": "iter/sec",
            "range": "stddev: 0.0003342817398662239",
            "extra": "mean: 3.150238630136984 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 930.8702591287838,
            "unit": "iter/sec",
            "range": "stddev: 0.00017334490277010024",
            "extra": "mean: 1.0742635616438276 msec\nrounds: 1095"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1733.8020774718937,
            "unit": "iter/sec",
            "range": "stddev: 0.00018868706268327246",
            "extra": "mean: 576.7671021931918 usec\nrounds: 2143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "61c40bb71387fa746c77e8581ad6224f87f8e2cc",
          "message": "Merge pull request #478 from TeoZosa/refactor/separate-readme-project-and-dev-sections\n\n📝  Separate project and dev sections in README\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fd9f278",
          "timestamp": "2022-01-07T02:39:37Z",
          "tree_id": "4597fc17e9440d451b5e3041d24f86ac837a27ef"
        },
        "date": 1641523308946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 359.3340119217953,
            "unit": "iter/sec",
            "range": "stddev: 0.000049296719588140726",
            "extra": "mean: 2.782926098901091 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1043.7005888358449,
            "unit": "iter/sec",
            "range": "stddev: 0.000011864434338445427",
            "extra": "mean: 958.129190207137 usec\nrounds: 1062"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2076.4286745780355,
            "unit": "iter/sec",
            "range": "stddev: 0.000009677707735864453",
            "extra": "mean: 481.596123306868 usec\nrounds: 2141"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "58a9928ac90bbb1544f1a49b5214c226b9b36e4f",
          "message": "Merge pull request #479 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d68a2ac",
          "timestamp": "2022-01-07T14:16:01Z",
          "tree_id": "9c05f46c252be89c34f228122a6751dbdd5ffdcf"
        },
        "date": 1641565395061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 290.6020854167053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359628321038578",
            "extra": "mean: 3.441131534090894 msec\nrounds: 352"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 862.4398838029448,
            "unit": "iter/sec",
            "range": "stddev: 0.00017382237529172192",
            "extra": "mean: 1.1595011070110548 msec\nrounds: 1084"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1660.4851002066434,
            "unit": "iter/sec",
            "range": "stddev: 0.00011277324985913687",
            "extra": "mean: 602.2336483932029 usec\nrounds: 2116"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "17d0ee9675be8fcd79fe4ab9cc52809eefd479b0",
          "message": "Merge pull request #480 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.16.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2c5576e",
          "timestamp": "2022-01-07T14:28:33Z",
          "tree_id": "e2b3d58a03b8ba134db492cc08afb06e6b76cdfa"
        },
        "date": 1641565865617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 362.46062303632715,
            "unit": "iter/sec",
            "range": "stddev: 0.00003836328914575115",
            "extra": "mean: 2.7589203804347493 msec\nrounds: 368"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1036.245667433651,
            "unit": "iter/sec",
            "range": "stddev: 0.000023707966355942246",
            "extra": "mean: 965.0221288515334 usec\nrounds: 1071"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2091.7536552421957,
            "unit": "iter/sec",
            "range": "stddev: 0.000009385756866723528",
            "extra": "mean: 478.0677674418664 usec\nrounds: 2150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9b150788b60771567fd777ae6926bdb20fecaab8",
          "message": "Merge pull request #482 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.14.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3ff6422",
          "timestamp": "2022-01-07T14:42:25Z",
          "tree_id": "245390ce647051ca4d0775e8787d30ad47972c2d"
        },
        "date": 1641566684012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.79954911184115,
            "unit": "iter/sec",
            "range": "stddev: 0.00005169618515457173",
            "extra": "mean: 2.787071506849332 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1042.158708493285,
            "unit": "iter/sec",
            "range": "stddev: 0.000015733644436264548",
            "extra": "mean: 959.5467483506072 usec\nrounds: 1061"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2112.4568856798564,
            "unit": "iter/sec",
            "range": "stddev: 0.000009543276040819209",
            "extra": "mean: 473.3824423962943 usec\nrounds: 2170"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6f0dab73a21dc4e3567ce54c5bc5fd1e06748b21",
          "message": "Merge pull request #484 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ca09929",
          "timestamp": "2022-01-10T14:15:32Z",
          "tree_id": "1c5f8596b1f86d2656abc36b356d937f7361dade"
        },
        "date": 1641826005532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.7767083582026,
            "unit": "iter/sec",
            "range": "stddev: 0.0001691385469539821",
            "extra": "mean: 3.107745135135131 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 937.9729957652637,
            "unit": "iter/sec",
            "range": "stddev: 0.00006814081963046095",
            "extra": "mean: 1.066128773978328 msec\nrounds: 1199"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1895.3959615005053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000441311310475087",
            "extra": "mean: 527.5942443226174 usec\nrounds: 2554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "12d26a3d23170a230a5260938891e750da2c0594",
          "message": "Merge pull request #486 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-gh-actions-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@292cca7",
          "timestamp": "2022-01-10T14:33:17Z",
          "tree_id": "6ccda461b6d9eaee4b09a1322c8fcd1e2ab54eb0"
        },
        "date": 1641826389738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 305.74843185798574,
            "unit": "iter/sec",
            "range": "stddev: 0.00003786425006874289",
            "extra": "mean: 3.27066272727273 msec\nrounds: 330"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 896.6864095478862,
            "unit": "iter/sec",
            "range": "stddev: 0.000022585455179499996",
            "extra": "mean: 1.1152170807453243 msec\nrounds: 966"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1777.458069573329,
            "unit": "iter/sec",
            "range": "stddev: 0.000012410658056695322",
            "extra": "mean: 562.6011758691138 usec\nrounds: 1956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "43e87fc8d0be842ea68fc1da80b4a1d6869ffe91",
          "message": "Merge pull request #487 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.15.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@292cca7",
          "timestamp": "2022-01-10T14:41:11Z",
          "tree_id": "d20347514c3b4e939da96b2dd69e8b40ae4fe117"
        },
        "date": 1641826730956,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.2363454900768,
            "unit": "iter/sec",
            "range": "stddev: 0.00038506463776468775",
            "extra": "mean: 2.8071251366120236 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1038.5943012790553,
            "unit": "iter/sec",
            "range": "stddev: 0.000013254666802974917",
            "extra": "mean: 962.83986804903 usec\nrounds: 1061"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2079.404829848104,
            "unit": "iter/sec",
            "range": "stddev: 0.000012071956771538849",
            "extra": "mean: 480.9068372093027 usec\nrounds: 2150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4d945524da24395c23dee5dc8df96d10f8204583",
          "message": "Merge pull request #483 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-dd3016f\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@06967eb",
          "timestamp": "2022-01-10T20:56:35Z",
          "tree_id": "1a300cde5e0eb90cf9e94ba1e15030c751fb1b4c"
        },
        "date": 1641848354286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.63181618449545,
            "unit": "iter/sec",
            "range": "stddev: 0.0004515460450400219",
            "extra": "mean: 3.641238709677425 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 831.9445804962184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002616372131654338",
            "extra": "mean: 1.2020031423289566 msec\nrounds: 1082"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1501.154419993345,
            "unit": "iter/sec",
            "range": "stddev: 0.00024212409311779332",
            "extra": "mean: 666.1539856801894 usec\nrounds: 2095"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7248aff00ebf120eaf39b4ab63b022873e915e52",
          "message": "Merge pull request #489 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.16.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1cf70fa",
          "timestamp": "2022-01-11T14:20:59Z",
          "tree_id": "cafe119f87ed927cb95c12fcde7964d3692ba1fb"
        },
        "date": 1641911309021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.53850374343116,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713447721937047",
            "extra": "mean: 3.9441741007194406 msec\nrounds: 278"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 729.991713938369,
            "unit": "iter/sec",
            "range": "stddev: 0.00026451275328465205",
            "extra": "mean: 1.3698785628742451 msec\nrounds: 835"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1434.930740996642,
            "unit": "iter/sec",
            "range": "stddev: 0.00015125353406493397",
            "extra": "mean: 696.8977466504358 usec\nrounds: 1642"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "60793310a2837903001c4d6c6ca4976ae3f5613b",
          "message": "Merge pull request #490 from TeoZosa/dependabot/pip/sphinx-autodoc-typehints-1.15.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0ca7c99",
          "timestamp": "2022-01-11T14:30:38Z",
          "tree_id": "513a1e96490f60e06b766afadad83f0cd5bb8c00"
        },
        "date": 1641911596575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.6735150499841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004857019737541012",
            "extra": "mean: 3.39358628762539 msec\nrounds: 299"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 859.9763115615995,
            "unit": "iter/sec",
            "range": "stddev: 0.00001569038913144508",
            "extra": "mean: 1.1628227272727276 msec\nrounds: 880"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1679.8055586538433,
            "unit": "iter/sec",
            "range": "stddev: 0.00001501139507231012",
            "extra": "mean: 595.3069954128362 usec\nrounds: 1744"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e7ea4feaf08d66a21174e9bec7ce59d6018f22b1",
          "message": "Merge pull request #492 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.17.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d61b2f4",
          "timestamp": "2022-01-12T14:16:19Z",
          "tree_id": "410ed0af398394e92270fbb1b4fd5819a2c40e96"
        },
        "date": 1641997148892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 316.9294580514322,
            "unit": "iter/sec",
            "range": "stddev: 0.0004129027426134181",
            "extra": "mean: 3.1552762755102344 msec\nrounds: 392"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 919.323612401585,
            "unit": "iter/sec",
            "range": "stddev: 0.000048643910750999534",
            "extra": "mean: 1.0877562443845654 msec\nrounds: 1113"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1827.313287328008,
            "unit": "iter/sec",
            "range": "stddev: 0.00002929026194339772",
            "extra": "mean: 547.2515342250106 usec\nrounds: 2542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3f3b84e82e20a9b30044b512d10cd9ed8c38ddc0",
          "message": "Merge pull request #493 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.16.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d50c10b",
          "timestamp": "2022-01-13T14:16:54Z",
          "tree_id": "9fa85074a38d8796a94b72523dc719d78a85cb46"
        },
        "date": 1642083555611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.07317322002257,
            "unit": "iter/sec",
            "range": "stddev: 0.00003909096706680907",
            "extra": "mean: 2.800546428571425 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1040.406659305987,
            "unit": "iter/sec",
            "range": "stddev: 0.00001845042719717168",
            "extra": "mean: 961.1626291079868 usec\nrounds: 1065"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2087.8526522707,
            "unit": "iter/sec",
            "range": "stddev: 0.000011550805889205677",
            "extra": "mean: 478.9610027855285 usec\nrounds: 2154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f982ef6e2b314b7e71528aa78ad39a0caad39fd2",
          "message": "Merge pull request #494 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.17.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a811814",
          "timestamp": "2022-01-13T14:31:51Z",
          "tree_id": "f34ce03d2e01a0ec7c280e38a74071b68f5b1c83"
        },
        "date": 1642084411653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 315.90176815530936,
            "unit": "iter/sec",
            "range": "stddev: 0.00007695229099206503",
            "extra": "mean: 3.1655410029498845 msec\nrounds: 339"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.4630844164737,
            "unit": "iter/sec",
            "range": "stddev: 0.00002435424535109785",
            "extra": "mean: 1.0959347474747505 msec\nrounds: 990"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1871.068096362402,
            "unit": "iter/sec",
            "range": "stddev: 0.000022698198504943977",
            "extra": "mean: 534.4540917266075 usec\nrounds: 2224"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "1867e18c461cb5ffd6a2d03081f3a4b86bcc75ff",
          "message": "Merge pull request #495 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c024bbb",
          "timestamp": "2022-01-17T14:20:10Z",
          "tree_id": "0c49cc3a8721bd9402f426333060cfb2bf9f96c1"
        },
        "date": 1642430997615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.9299705933805,
            "unit": "iter/sec",
            "range": "stddev: 0.00003155922683678046",
            "extra": "mean: 2.7860587912087893 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1046.6173552263565,
            "unit": "iter/sec",
            "range": "stddev: 0.000012774117433552842",
            "extra": "mean: 955.4590271281386 usec\nrounds: 1069"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2080.186446627566,
            "unit": "iter/sec",
            "range": "stddev: 0.000011998357863416832",
            "extra": "mean: 480.72613953485615 usec\nrounds: 2150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3f514d55044f748647f080c06e04ab608f152080",
          "message": "Merge pull request #497 from TeoZosa/dependabot/pip/importlib-metadata-4.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e1402de",
          "timestamp": "2022-01-17T14:44:47Z",
          "tree_id": "ed26bae0a4514027aee790c67ccf976d8e6acbde"
        },
        "date": 1642431911608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.24109527293973,
            "unit": "iter/sec",
            "range": "stddev: 0.00003416814903867002",
            "extra": "mean: 2.7914162087912096 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1046.4148353915723,
            "unit": "iter/sec",
            "range": "stddev: 0.000011643320854599574",
            "extra": "mean: 955.6439436619764 usec\nrounds: 1065"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2094.2677525701743,
            "unit": "iter/sec",
            "range": "stddev: 0.000010432315156904816",
            "extra": "mean: 477.49386331941446 usec\nrounds: 2151"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "2e27e85b5dc2795fbb08229e0fa59db6bd9598ee",
          "message": "Merge pull request #499 from TeoZosa/dependabot/pip/sphinx-4.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@83b9207",
          "timestamp": "2022-01-17T14:53:55Z",
          "tree_id": "583c0f37a90496f17fd450dd825892f0946e31be"
        },
        "date": 1642432204743,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.5249112751894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768114493161269",
            "extra": "mean: 3.034671934604939 msec\nrounds: 367"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 860.5989580639016,
            "unit": "iter/sec",
            "range": "stddev: 0.00027255784744059994",
            "extra": "mean: 1.1619814207650336 msec\nrounds: 1098"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1796.147009530115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001035762327689429",
            "extra": "mean: 556.7473011363403 usec\nrounds: 2112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3a8ddbe35c3df23dd7dc2fb4e564fed2d8c81ec0",
          "message": "Merge pull request #499 from TeoZosa/dependabot/pip/sphinx-4.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5dfb52e",
          "timestamp": "2022-01-17T15:03:07Z",
          "tree_id": "583c0f37a90496f17fd450dd825892f0946e31be"
        },
        "date": 1642432401466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 360.5862523298137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000289172490114877",
            "extra": "mean: 2.7732615803814404 msec\nrounds: 367"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1050.1004592843847,
            "unit": "iter/sec",
            "range": "stddev: 0.000012303995349484102",
            "extra": "mean: 952.2898415657045 usec\nrounds: 1073"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2082.705409233724,
            "unit": "iter/sec",
            "range": "stddev: 0.000010822560417504055",
            "extra": "mean: 480.14471733086987 usec\nrounds: 2158"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "c2d77a83d039af4c9b9829fa81177ecbec16cd9d",
          "message": ":heavy_minus_sign: Remove `flakeheaven` from dev deps\n\nSufficient to run it solely via `pre-commit`.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@30559bb",
          "timestamp": "2022-02-26T23:54:16Z",
          "tree_id": "c82b9da1258bdbce962ee1c17d86607def9d8b54"
        },
        "date": 1645920470670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.88263763194414,
            "unit": "iter/sec",
            "range": "stddev: 0.0005176849534986141",
            "extra": "mean: 3.48574597701151 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.1332639643135,
            "unit": "iter/sec",
            "range": "stddev: 0.00023487098044757461",
            "extra": "mean: 1.2060787372330544 msec\nrounds: 1077"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1653.4969076247544,
            "unit": "iter/sec",
            "range": "stddev: 0.00019100881658227958",
            "extra": "mean: 604.7788752363005 usec\nrounds: 2116"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ac19be627ebd55d0735ab258313b2ff4f97bc335",
          "message": "Merge pull request #514 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.3\n\n⬆️ Bump pip from 21.3.1 to 22.0.3 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@08a0cad",
          "timestamp": "2022-02-27T00:11:44Z",
          "tree_id": "fc39297d660f74c5d2d3b0aab408d2bd0f8e2888"
        },
        "date": 1645924162203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.8885108246155,
            "unit": "iter/sec",
            "range": "stddev: 0.00004070720195429626",
            "extra": "mean: 3.345729139072827 msec\nrounds: 302"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 866.1056291891397,
            "unit": "iter/sec",
            "range": "stddev: 0.000015261191336382473",
            "extra": "mean: 1.1545935810811139 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1727.303408182581,
            "unit": "iter/sec",
            "range": "stddev: 0.000011842286759206801",
            "extra": "mean: 578.9370849746491 usec\nrounds: 1777"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "cd53626827aa42fc2d48b88332739c56ba87e78a",
          "message": "Merge pull request #514 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.3\n\n⬆️ Bump pip from 21.3.1 to 22.0.3 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8fa6cea",
          "timestamp": "2022-02-27T00:17:07Z",
          "tree_id": "fc39297d660f74c5d2d3b0aab408d2bd0f8e2888"
        },
        "date": 1645924866823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 330.21079636138995,
            "unit": "iter/sec",
            "range": "stddev: 0.00018832016118894645",
            "extra": "mean: 3.028368578553616 msec\nrounds: 401"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 959.7549515808319,
            "unit": "iter/sec",
            "range": "stddev: 0.00008714515101164982",
            "extra": "mean: 1.041932629107961 msec\nrounds: 1278"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1900.6571303962262,
            "unit": "iter/sec",
            "range": "stddev: 0.00003506333843336762",
            "extra": "mean: 526.1338218279969 usec\nrounds: 2593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "60cbccd6c292db4adc0df9eb1175045b6b3aae44",
          "message": "Merge pull request #535 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.2.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@df19510",
          "timestamp": "2022-02-27T00:32:26Z",
          "tree_id": "929eb5c86b4d9e0aad93610ed00789d08eac406c"
        },
        "date": 1645925598825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.88675883861686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000513453764869636",
            "extra": "mean: 2.786394246575358 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1045.4143533718554,
            "unit": "iter/sec",
            "range": "stddev: 0.000012427007996016079",
            "extra": "mean: 956.558513640666 usec\nrounds: 1063"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2094.3209354140113,
            "unit": "iter/sec",
            "range": "stddev: 0.000010152990831601545",
            "extra": "mean: 477.48173791822273 usec\nrounds: 2152"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ad1eb64fe50165ec8f4432363a877aa152f66e22",
          "message": "Merge pull request #535 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.2.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@586fff0",
          "timestamp": "2022-02-27T00:39:31Z",
          "tree_id": "929eb5c86b4d9e0aad93610ed00789d08eac406c"
        },
        "date": 1645926144793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 397.51893754948276,
            "unit": "iter/sec",
            "range": "stddev: 0.00006983408129147166",
            "extra": "mean: 2.5156034229828887 msec\nrounds: 409"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1160.2795480607808,
            "unit": "iter/sec",
            "range": "stddev: 0.000013565330290736582",
            "extra": "mean: 861.8612658228251 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2334.2318725697846,
            "unit": "iter/sec",
            "range": "stddev: 0.000011607869050236318",
            "extra": "mean: 428.406454282148 usec\nrounds: 2417"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "df509f5a7c90c7df919dccf9f7966c98daf17d0c",
          "message": "Merge pull request #528 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.13\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e42763c",
          "timestamp": "2022-02-27T01:09:56Z",
          "tree_id": "dddec6d25a19210f3ea85770b48830eb7ae4b09c"
        },
        "date": 1645926709411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.39322471392984,
            "unit": "iter/sec",
            "range": "stddev: 0.00004287357874882407",
            "extra": "mean: 2.7902313186813226 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1049.1418020059766,
            "unit": "iter/sec",
            "range": "stddev: 0.000012316152362768934",
            "extra": "mean: 953.1599999999842 usec\nrounds: 1065"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2085.72302143558,
            "unit": "iter/sec",
            "range": "stddev: 0.000009986936703261349",
            "extra": "mean: 479.45004668535086 usec\nrounds: 2142"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "417d45ca2e135ee0fa2c71bbca18bba989a49a18",
          "message": "Merge pull request #528 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.13\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e42763c",
          "timestamp": "2022-02-27T01:16:54Z",
          "tree_id": "dddec6d25a19210f3ea85770b48830eb7ae4b09c"
        },
        "date": 1645927153921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 332.73303124660646,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138903462305731",
            "extra": "mean: 3.005412466124669 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 957.3095118664819,
            "unit": "iter/sec",
            "range": "stddev: 0.0001809945480979777",
            "extra": "mean: 1.0445942379181878 msec\nrounds: 1076"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1935.5119581642548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000767394971000863",
            "extra": "mean: 516.6591690544008 usec\nrounds: 2094"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a61841e5bc849e6480c38c9242f2c025cbf014e8",
          "message": "Merge pull request #528 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.13\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e42763c",
          "timestamp": "2022-02-27T01:22:26Z",
          "tree_id": "dddec6d25a19210f3ea85770b48830eb7ae4b09c"
        },
        "date": 1645927779190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 359.53063867753644,
            "unit": "iter/sec",
            "range": "stddev: 0.00003588123445100277",
            "extra": "mean: 2.7814041208791154 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1048.2853173506887,
            "unit": "iter/sec",
            "range": "stddev: 0.000011801989220029805",
            "extra": "mean: 953.9387640449651 usec\nrounds: 1068"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2080.343385770033,
            "unit": "iter/sec",
            "range": "stddev: 0.000010956658742778543",
            "extra": "mean: 480.6898740083974 usec\nrounds: 2143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "1bbb509770150ba62cb950c082a02c43b3425967",
          "message": "Merge pull request #531 from TeoZosa/dependabot/pip/pytest-7.0.1\n\n⬆️ Bump pytest from 6.2.5 to 7.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@70b425c",
          "timestamp": "2022-02-27T02:03:34Z",
          "tree_id": "f11334795e1069a2b911a543756478e809941976"
        },
        "date": 1645928633222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 355.09682306708737,
            "unit": "iter/sec",
            "range": "stddev: 0.00041786998133910646",
            "extra": "mean: 2.816133333333351 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1060.1166638756554,
            "unit": "iter/sec",
            "range": "stddev: 0.000010889280073525634",
            "extra": "mean: 943.2924074074297 usec\nrounds: 1080"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2105.6389222249336,
            "unit": "iter/sec",
            "range": "stddev: 0.00001247155009976194",
            "extra": "mean: 474.91523330284247 usec\nrounds: 2186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "b8b9a96ea41b203a766a5b5e348971126702c06f",
          "message": "Merge pull request #542 from TeoZosa/drop-cli-usage-doc-page-autogeneration\n\n📝  Drop typer CLI usage doc generation\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6327369",
          "timestamp": "2022-02-27T22:36:39Z",
          "tree_id": "6e982279e5b6840df88f6b45e9f65e3d31ad40bf"
        },
        "date": 1646001603338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.0732795105356,
            "unit": "iter/sec",
            "range": "stddev: 0.0008345595306561011",
            "extra": "mean: 3.354879718309854 msec\nrounds: 355"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 687.1048373418722,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325075762696776",
            "extra": "mean: 1.455381981981951 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1609.371418538981,
            "unit": "iter/sec",
            "range": "stddev: 0.00012183983197383662",
            "extra": "mean: 621.3606060606069 usec\nrounds: 2145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6b91db20b435ba86d523a01960b947a467806f5f",
          "message": "Merge pull request #544 from TeoZosa/dependabot/pip/importlib-metadata-4.11.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@41cb0c7",
          "timestamp": "2022-02-28T14:39:28Z",
          "tree_id": "7d9111b6a285bd965842734e9a745839ce8d801f"
        },
        "date": 1646061856198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 430.9505787238279,
            "unit": "iter/sec",
            "range": "stddev: 0.00002654713839723044",
            "extra": "mean: 2.3204516930022363 msec\nrounds: 443"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 936.0486835627711,
            "unit": "iter/sec",
            "range": "stddev: 0.00002057365434891451",
            "extra": "mean: 1.0683205025125602 msec\nrounds: 995"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2371.067411438221,
            "unit": "iter/sec",
            "range": "stddev: 0.00000945441206650548",
            "extra": "mean: 421.75097813580464 usec\nrounds: 2607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "04daff7bdaf49cb3e2bb39c3e6442d595710741a",
          "message": "Merge pull request #543 from TeoZosa/dependabot/github_actions/actions/setup-python-3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@15de0e2",
          "timestamp": "2022-02-28T22:17:24Z",
          "tree_id": "5a913a0ab2834f7a187663943011afcd3989d089"
        },
        "date": 1646087033165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 430.90116189841433,
            "unit": "iter/sec",
            "range": "stddev: 0.000033850035443580284",
            "extra": "mean: 2.3207178082192126 msec\nrounds: 438"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 929.9687107069082,
            "unit": "iter/sec",
            "range": "stddev: 0.000021132634579143373",
            "extra": "mean: 1.075304995196944 msec\nrounds: 1041"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2332.8019625348416,
            "unit": "iter/sec",
            "range": "stddev: 0.000013047650635658422",
            "extra": "mean: 428.6690495207711 usec\nrounds: 2504"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "8011584d866c2886574b4d36d6a6d2a7a9933ac5",
          "message": "Merge pull request #545 from TeoZosa/dependabot/pip/hypothesis-6.39.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@30cc8f4",
          "timestamp": "2022-03-01T14:19:43Z",
          "tree_id": "e6eb73f4aaee2495d0311ea4d1bb110989d57d15"
        },
        "date": 1646144619129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 383.2564494690128,
            "unit": "iter/sec",
            "range": "stddev: 0.000029594536753099227",
            "extra": "mean: 2.609218974358975 msec\nrounds: 390"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.9699705047825,
            "unit": "iter/sec",
            "range": "stddev: 0.000023514655994020476",
            "extra": "mean: 1.1962152173913274 msec\nrounds: 874"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2106.981215594603,
            "unit": "iter/sec",
            "range": "stddev: 0.000010741248646889151",
            "extra": "mean: 474.6126793151281 usec\nrounds: 2161"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3e7add933c0a5b7bf1868904aa086988d9273487",
          "message": "Merge pull request #549 from TeoZosa/dependabot/pip/hypothesis-6.39.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9761010",
          "timestamp": "2022-03-03T14:52:06Z",
          "tree_id": "84819e9ee5f00d7d7cb534f4724327d465233af4"
        },
        "date": 1646320330112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 333.32741142153867,
            "unit": "iter/sec",
            "range": "stddev: 0.0001360077141775926",
            "extra": "mean: 3.0000532981530323 msec\nrounds: 379"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 709.2731107531362,
            "unit": "iter/sec",
            "range": "stddev: 0.00010029551382614797",
            "extra": "mean: 1.4098941364605768 msec\nrounds: 938"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1792.6166601311413,
            "unit": "iter/sec",
            "range": "stddev: 0.00004590710738865126",
            "extra": "mean: 557.8437499999825 usec\nrounds: 2560"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f90ffec51033cd1af9888bdce437fedb2f98baa8",
          "message": "Merge pull request #547 from TeoZosa/dependabot/github_actions/actions/checkout-3\n\n⬆️ Bump actions/checkout from 2.4.0 to 3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c50fa8b",
          "timestamp": "2022-03-04T22:14:27Z",
          "tree_id": "a08f1f15bf3f792e891799ebdce79fc178b121d2"
        },
        "date": 1646432809161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.8260271078437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000594144363944862",
            "extra": "mean: 2.6679043814432966 msec\nrounds: 388"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.5131025365608,
            "unit": "iter/sec",
            "range": "stddev: 0.000023887514122201223",
            "extra": "mean: 1.2055264672036026 msec\nrounds: 869"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2090.1900931818113,
            "unit": "iter/sec",
            "range": "stddev: 0.000010826229497162662",
            "extra": "mean: 478.42538497431144 usec\nrounds: 2143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6b854c424dae6359cf223964fb97825bbc57c762",
          "message": "Merge pull request #546 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-2d2dd52\n\n⬆️ Bump python from `8324222` to `2d2dd52` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@43277c4",
          "timestamp": "2022-03-04T22:21:29Z",
          "tree_id": "a08f1f15bf3f792e891799ebdce79fc178b121d2"
        },
        "date": 1646433458843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.9917365544836,
            "unit": "iter/sec",
            "range": "stddev: 0.0002890459435185945",
            "extra": "mean: 3.5336720858895916 msec\nrounds: 326"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 610.2880172693847,
            "unit": "iter/sec",
            "range": "stddev: 0.0003637573184810335",
            "extra": "mean: 1.6385705956907133 msec\nrounds: 789"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1496.9841019510955,
            "unit": "iter/sec",
            "range": "stddev: 0.00020451625803495933",
            "extra": "mean: 668.0097662337557 usec\nrounds: 1925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9ed46fbffb52e81e2dac509786a1265c7cf717c4",
          "message": "Merge pull request #552 from TeoZosa/dependabot/pip/hypothesis-6.39.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@467386b",
          "timestamp": "2022-03-07T14:25:35Z",
          "tree_id": "cbeeb01c4a58081def70e92ab4ba4825412c50f1"
        },
        "date": 1646665647895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 428.1016895942178,
            "unit": "iter/sec",
            "range": "stddev: 0.00007519172872651448",
            "extra": "mean: 2.3358936073059278 msec\nrounds: 438"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 932.9766357491566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000230871176473742",
            "extra": "mean: 1.071838202247182 msec\nrounds: 979"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2367.9980142770005,
            "unit": "iter/sec",
            "range": "stddev: 0.000010366283903477147",
            "extra": "mean: 422.2976514215199 usec\nrounds: 2427"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "cadb8611624d7cdae630fe234c8e1890890bab9a",
          "message": "Merge pull request #552 from TeoZosa/dependabot/pip/hypothesis-6.39.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@400a6ae",
          "timestamp": "2022-03-07T14:54:11Z",
          "tree_id": "b35b2a107a5eac074ea5bdbcf6834eb3d615f5d0"
        },
        "date": 1646666398014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 386.6300946158808,
            "unit": "iter/sec",
            "range": "stddev: 0.00002693403702735817",
            "extra": "mean: 2.5864515306122398 msec\nrounds: 392"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 845.9366044930622,
            "unit": "iter/sec",
            "range": "stddev: 0.000017862683802561496",
            "extra": "mean: 1.1821216799091725 msec\nrounds: 881"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2116.965466707956,
            "unit": "iter/sec",
            "range": "stddev: 0.00000956512768655427",
            "extra": "mean: 472.3742619926044 usec\nrounds: 2168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7de64af2f7f71cd4096423a7e7f2f67aa97ced62",
          "message": "Merge pull request #554 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-22.0.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@09e18d9",
          "timestamp": "2022-03-07T15:11:27Z",
          "tree_id": "b1c19af90b5020754e2a881ed3c6a93fe4afe1fa"
        },
        "date": 1646666940697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.10146456471676,
            "unit": "iter/sec",
            "range": "stddev: 0.00013867565463373648",
            "extra": "mean: 3.4709993630572753 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 635.9067924307321,
            "unit": "iter/sec",
            "range": "stddev: 0.00013134071519168818",
            "extra": "mean: 1.5725575067024116 msec\nrounds: 746"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1545.7588716444284,
            "unit": "iter/sec",
            "range": "stddev: 0.00004079260986163252",
            "extra": "mean: 646.9314317673413 usec\nrounds: 1788"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6ca66af8c2a2a81f90bc77806b8272e9eeb87ec7",
          "message": "Merge pull request #557 from TeoZosa/dependabot/pip/emoji-1.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7fe9946",
          "timestamp": "2022-03-09T14:29:30Z",
          "tree_id": "43eeef161e7f4a2a7943b195d8d596945a0b1504"
        },
        "date": 1646837328582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 381.8335410455333,
            "unit": "iter/sec",
            "range": "stddev: 0.000036524855676363334",
            "extra": "mean: 2.618942268041222 msec\nrounds: 388"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.9098356089208,
            "unit": "iter/sec",
            "range": "stddev: 0.000024261719328997497",
            "extra": "mean: 1.204950173010398 msec\nrounds: 867"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2104.4775975121192,
            "unit": "iter/sec",
            "range": "stddev: 0.000010513907085331156",
            "extra": "mean: 475.17730822232767 usec\nrounds: 2177"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d20d4c6ad877f485eb4ad3ae83f5bd00766327d7",
          "message": "Merge pull request #560 from TeoZosa/dependabot/pip/pytest-7.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8baaec3",
          "timestamp": "2022-03-14T14:04:31Z",
          "tree_id": "28c0d3ca376d1fc4a77f626c30f77d99a90d56e2"
        },
        "date": 1647268518352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 415.24230310068975,
            "unit": "iter/sec",
            "range": "stddev: 0.000060882644023273686",
            "extra": "mean: 2.4082324766354923 msec\nrounds: 428"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 921.4830736981581,
            "unit": "iter/sec",
            "range": "stddev: 0.000024501768309175874",
            "extra": "mean: 1.0852071280991982 msec\nrounds: 968"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2337.789650302803,
            "unit": "iter/sec",
            "range": "stddev: 0.000012364780426251685",
            "extra": "mean: 427.75448161919735 usec\nrounds: 2421"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "77606ac413657b997407f0ee394ab0f2d16f0689",
          "message": "Merge pull request #560 from TeoZosa/dependabot/pip/pytest-7.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@69b2e59",
          "timestamp": "2022-03-14T14:18:35Z",
          "tree_id": "28c0d3ca376d1fc4a77f626c30f77d99a90d56e2"
        },
        "date": 1647269454334,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.94396260045926,
            "unit": "iter/sec",
            "range": "stddev: 0.000054345174262647595",
            "extra": "mean: 3.0308176943699228 msec\nrounds: 373"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 720.118046684985,
            "unit": "iter/sec",
            "range": "stddev: 0.00005116130321725865",
            "extra": "mean: 1.388661212704546 msec\nrounds: 1039"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1806.9688719542648,
            "unit": "iter/sec",
            "range": "stddev: 0.000018462315110689075",
            "extra": "mean: 553.4129643962734 usec\nrounds: 2584"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fa2d613e34c19de0669d277c9338bad80819beb5",
          "message": "Merge pull request #563 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.10.3-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5237481",
          "timestamp": "2022-03-17T13:19:35Z",
          "tree_id": "148b8058b87d4f794452a9f02353d9a35bc73ca9"
        },
        "date": 1647523752432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.0776411195852,
            "unit": "iter/sec",
            "range": "stddev: 0.0003660402897370087",
            "extra": "mean: 3.471286407767014 msec\nrounds: 309"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 643.2564041379898,
            "unit": "iter/sec",
            "range": "stddev: 0.00022332407165599622",
            "extra": "mean: 1.554590041493753 msec\nrounds: 723"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1495.9548437548983,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419274856974701",
            "extra": "mean: 668.4693753789824 usec\nrounds: 1649"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "1ee678091888bde33391cde28cd170f059f39c29",
          "message": "Merge pull request #564 from TeoZosa/dependabot/pip/pytest-7.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@218e669",
          "timestamp": "2022-03-18T13:33:10Z",
          "tree_id": "5924cab4f532ef0ec69d4e469233c422f611e158"
        },
        "date": 1647612013038,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 379.54132139354596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006070818907269289",
            "extra": "mean: 2.6347592307692396 msec\nrounds: 390"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 888.208475001803,
            "unit": "iter/sec",
            "range": "stddev: 0.000025640339434381415",
            "extra": "mean: 1.1258618085106316 msec\nrounds: 940"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2431.1024404699965,
            "unit": "iter/sec",
            "range": "stddev: 0.000009246522123316524",
            "extra": "mean: 411.33601914638916 usec\nrounds: 2507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "914948f4304d292710980e81846e432be9fe8621",
          "message": "Merge pull request #561 from TeoZosa/dependabot/pip/mypy-0.941\n\n⬆️ Bump mypy from 0.931 to 0.941\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8a86b71",
          "timestamp": "2022-03-22T05:12:03Z",
          "tree_id": "0c3f681dc5cad527848b1d903dc09842a67b69b1"
        },
        "date": 1647926651142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 333.1730400818257,
            "unit": "iter/sec",
            "range": "stddev: 0.0003834344425945459",
            "extra": "mean: 3.0014433333333472 msec\nrounds: 390"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 742.6087121611076,
            "unit": "iter/sec",
            "range": "stddev: 0.00017589714175761132",
            "extra": "mean: 1.3466041855203172 msec\nrounds: 884"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1805.4865247615605,
            "unit": "iter/sec",
            "range": "stddev: 0.000172313344740952",
            "extra": "mean: 553.8673295454607 usec\nrounds: 2112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "64c7c606439f31ca5a4c87515abb70dbf6f664d1",
          "message": "Merge pull request #561 from TeoZosa/dependabot/pip/mypy-0.941\n\n⬆️ Bump mypy from 0.931 to 0.941\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@abb9891",
          "timestamp": "2022-03-22T22:11:44Z",
          "tree_id": "92a9ae26ee005e729db052835ce7e4b0e622925e"
        },
        "date": 1647987267633,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 382.8726967968142,
            "unit": "iter/sec",
            "range": "stddev: 0.00002891527863130975",
            "extra": "mean: 2.611834190231349 msec\nrounds: 389"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 831.6388013312854,
            "unit": "iter/sec",
            "range": "stddev: 0.000016747471170551445",
            "extra": "mean: 1.2024450980391996 msec\nrounds: 867"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2108.1412084074555,
            "unit": "iter/sec",
            "range": "stddev: 0.000008894570924511533",
            "extra": "mean: 474.3515263645105 usec\nrounds: 2162"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3d3285a78f71a27325a12f146c87f70bcbb3cb61",
          "message": "Merge pull request #570 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.10.4-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aa53b8c",
          "timestamp": "2022-03-25T13:55:33Z",
          "tree_id": "1504cf2af491c9e5650275ef9ce1b2538ea8177a"
        },
        "date": 1648217821093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.62014583591326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005969894706527937",
            "extra": "mean: 3.654701655629144 msec\nrounds: 302"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 606.2996957133331,
            "unit": "iter/sec",
            "range": "stddev: 0.0005027544917627217",
            "extra": "mean: 1.6493493351064021 msec\nrounds: 752"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1438.8384018979316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002979602812229142",
            "extra": "mean: 695.0050809603969 usec\nrounds: 1791"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "71e69f2218ceb28d45f2a90f8afaae57bba866a9",
          "message": "Merge pull request #570 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.10.4-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aa53b8c",
          "timestamp": "2022-03-25T14:01:36Z",
          "tree_id": "1504cf2af491c9e5650275ef9ce1b2538ea8177a"
        },
        "date": 1648218736010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.4207831440875,
            "unit": "iter/sec",
            "range": "stddev: 0.00019347835131291481",
            "extra": "mean: 3.3964993548387064 msec\nrounds: 310"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 643.6909587515898,
            "unit": "iter/sec",
            "range": "stddev: 0.00021615123733094468",
            "extra": "mean: 1.553540540540535 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1562.8657888307198,
            "unit": "iter/sec",
            "range": "stddev: 0.00009284317056578534",
            "extra": "mean: 639.85020796198 usec\nrounds: 1683"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a70aad69c999c320700abfb8aff00a9c006d5744",
          "message": "Merge pull request #572 from TeoZosa/dependabot/pip/pylint-2.13.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0ccb527",
          "timestamp": "2022-03-28T14:56:43Z",
          "tree_id": "4424ba53b68fae1668affd2ff6fc06c472ffbf03"
        },
        "date": 1648481513042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 379.8137082639058,
            "unit": "iter/sec",
            "range": "stddev: 0.00003493002486838761",
            "extra": "mean: 2.6328696891191994 msec\nrounds: 386"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 828.5177740130147,
            "unit": "iter/sec",
            "range": "stddev: 0.00001809436641680125",
            "extra": "mean: 1.2069747099768213 msec\nrounds: 862"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2098.4698673515754,
            "unit": "iter/sec",
            "range": "stddev: 0.000009633205979801953",
            "extra": "mean: 476.53769804284775 usec\nrounds: 2146"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6622a4c2848afb95f81faf5a088c6608205082ff",
          "message": "Merge pull request #575 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0405001",
          "timestamp": "2022-03-28T15:19:53Z",
          "tree_id": "3be12ab5ea2a8527c51043c5120c0181872e2ec7"
        },
        "date": 1648482847368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 380.42104922884425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003531022596359233",
            "extra": "mean: 2.628666321243557 msec\nrounds: 386"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 815.4541761743703,
            "unit": "iter/sec",
            "range": "stddev: 0.00017703570822863535",
            "extra": "mean: 1.226310477299178 msec\nrounds: 859"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2097.193109366721,
            "unit": "iter/sec",
            "range": "stddev: 0.00001118121768668572",
            "extra": "mean: 476.827811198543 usec\nrounds: 2161"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d20e2b98b3d52154d520fc0c37ae0675836fefb7",
          "message": "Merge pull request #574 from TeoZosa/dependabot/pip/hypothesis-6.39.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b7a2128",
          "timestamp": "2022-03-28T15:41:55Z",
          "tree_id": "265d4eef2eb0c88d986a0495ad57dfd22708f9e4"
        },
        "date": 1648483982773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.200395184426,
            "unit": "iter/sec",
            "range": "stddev: 0.00044257505033914145",
            "extra": "mean: 3.7707334459459565 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 586.8747962297475,
            "unit": "iter/sec",
            "range": "stddev: 0.0004958438510950315",
            "extra": "mean: 1.703940953716683 msec\nrounds: 713"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1445.2807315535088,
            "unit": "iter/sec",
            "range": "stddev: 0.00021878757459534352",
            "extra": "mean: 691.9071002386619 usec\nrounds: 1676"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4d4b91ca43dd5387168610c7ef7915960b2b01a1",
          "message": "Merge pull request #574 from TeoZosa/dependabot/pip/hypothesis-6.39.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b5af0e1",
          "timestamp": "2022-03-28T15:52:01Z",
          "tree_id": "265d4eef2eb0c88d986a0495ad57dfd22708f9e4"
        },
        "date": 1648484607251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 383.64088215311233,
            "unit": "iter/sec",
            "range": "stddev: 0.000030433151457854357",
            "extra": "mean: 2.606604370179966 msec\nrounds: 389"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.0108388992581,
            "unit": "iter/sec",
            "range": "stddev: 0.00001771541413402129",
            "extra": "mean: 1.1975892448512844 msec\nrounds: 874"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2106.433752122711,
            "unit": "iter/sec",
            "range": "stddev: 0.000009433225789566419",
            "extra": "mean: 474.736031452341 usec\nrounds: 2162"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e456945ca83cfd48d3713835f6642060053e9147",
          "message": ":arrow_up: Auto-update dependencies in `pyproject.toml`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0414288",
          "timestamp": "2022-04-02T01:05:17Z",
          "tree_id": "098970b102852adaad33152017cfc5d937e0f4d6"
        },
        "date": 1648861911803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 351.7599033466373,
            "unit": "iter/sec",
            "range": "stddev: 0.0004307300982545239",
            "extra": "mean: 2.842848177083341 msec\nrounds: 384"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 771.898411860665,
            "unit": "iter/sec",
            "range": "stddev: 0.00017332310609453712",
            "extra": "mean: 1.2955072644721408 msec\nrounds: 881"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1702.906982794033,
            "unit": "iter/sec",
            "range": "stddev: 0.00010055862851406604",
            "extra": "mean: 587.2311348205625 usec\nrounds: 2062"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7eb4b820a7a5a4f2dc3076dfe31e2f32fd735ba1",
          "message": "Merge pull request #582 from TeoZosa/dependabot/pip/hypothesis-6.41.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9c21775",
          "timestamp": "2022-04-02T01:16:29Z",
          "tree_id": "ecbe86b80414198f52a1f2637e5fdbb1d67adf5d"
        },
        "date": 1648863121680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 355.9141060624034,
            "unit": "iter/sec",
            "range": "stddev: 0.00022083928572513603",
            "extra": "mean: 2.809666666666668 msec\nrounds: 447"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 719.4072252582473,
            "unit": "iter/sec",
            "range": "stddev: 0.00005712122126856228",
            "extra": "mean: 1.3900333008763257 msec\nrounds: 1027"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1814.099800033788,
            "unit": "iter/sec",
            "range": "stddev: 0.000025779687372123394",
            "extra": "mean: 551.2375890132257 usec\nrounds: 1966"
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
          "id": "6ea74d3c94a45b88eb7702d574d76b5945728e73",
          "message": "Merge pull request #870 from TeoZosa/ci/fix-benchmarks-gh-pages-publishing\n\n💚 Fix benchmarks not being published on pushes to `master`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@858a704",
          "timestamp": "2022-12-14T11:21:39Z",
          "tree_id": "5c3ad8c622a604eb8700975c5cea442686d6e8b2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6ea74d3c94a45b88eb7702d574d76b5945728e73"
        },
        "date": 1671017141359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.8568025452668,
            "unit": "iter/sec",
            "range": "stddev: 0.000021076021197674725",
            "extra": "mean: 2.433938038277517 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.8345299876272,
            "unit": "iter/sec",
            "range": "stddev: 0.00001850589232833472",
            "extra": "mean: 1.168450167597768 msec\nrounds: 895"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2260.456395140972,
            "unit": "iter/sec",
            "range": "stddev: 0.000009840375640975164",
            "extra": "mean: 442.3885380623039 usec\nrounds: 2312"
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
        "date": 1671079537480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 346.2075101419817,
            "unit": "iter/sec",
            "range": "stddev: 0.000044405592644771005",
            "extra": "mean: 2.888441095890422 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 725.4389260240342,
            "unit": "iter/sec",
            "range": "stddev: 0.00003564439664118561",
            "extra": "mean: 1.3784757946210202 msec\nrounds: 818"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1914.126186397539,
            "unit": "iter/sec",
            "range": "stddev: 0.000019236329538204315",
            "extra": "mean: 522.431596781004 usec\nrounds: 2361"
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
        "date": 1671188945715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 351.9360397706139,
            "unit": "iter/sec",
            "range": "stddev: 0.00006726904697998735",
            "extra": "mean: 2.841425392670167 msec\nrounds: 382"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 742.0608830496922,
            "unit": "iter/sec",
            "range": "stddev: 0.000057696042427848335",
            "extra": "mean: 1.3475983208955038 msec\nrounds: 1072"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1946.882725046488,
            "unit": "iter/sec",
            "range": "stddev: 0.00002405402611970665",
            "extra": "mean: 513.6416216216217 usec\nrounds: 2775"
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
        "date": 1671362193565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.9640071324206,
            "unit": "iter/sec",
            "range": "stddev: 0.00022488730006949286",
            "extra": "mean: 3.4487038922155624 msec\nrounds: 334"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 592.7920617355467,
            "unit": "iter/sec",
            "range": "stddev: 0.00044637050452800913",
            "extra": "mean: 1.686932171581803 msec\nrounds: 746"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1544.617046292599,
            "unit": "iter/sec",
            "range": "stddev: 0.00017356331613706038",
            "extra": "mean: 647.4096620908123 usec\nrounds: 1894"
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
        "date": 1671426648477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 402.2998009679743,
            "unit": "iter/sec",
            "range": "stddev: 0.00011098417037405167",
            "extra": "mean: 2.485708413461548 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 846.6575061832301,
            "unit": "iter/sec",
            "range": "stddev: 0.000021020054448913692",
            "extra": "mean: 1.1811151412429388 msec\nrounds: 885"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2266.4244336157944,
            "unit": "iter/sec",
            "range": "stddev: 0.000009321379041195006",
            "extra": "mean: 441.22362306367563 usec\nrounds: 2324"
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
        "date": 1671463944629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 405.7705183102948,
            "unit": "iter/sec",
            "range": "stddev: 0.0001621964699041767",
            "extra": "mean: 2.4644471563981263 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 917.6396229795491,
            "unit": "iter/sec",
            "range": "stddev: 0.000023043002869670264",
            "extra": "mean: 1.0897524201854198 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2632.888807749981,
            "unit": "iter/sec",
            "range": "stddev: 0.000006534885304571188",
            "extra": "mean: 379.81095025983336 usec\nrounds: 2694"
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
        "date": 1671464174815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.65849890223586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004714970515237986",
            "extra": "mean: 3.2823637075717933 msec\nrounds: 383"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 630.7747228309062,
            "unit": "iter/sec",
            "range": "stddev: 0.00038733720840089",
            "extra": "mean: 1.5853520501138931 msec\nrounds: 878"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1664.1997265628024,
            "unit": "iter/sec",
            "range": "stddev: 0.00015084387681930242",
            "extra": "mean: 600.8894149173883 usec\nrounds: 2239"
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
        "date": 1671464708283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.2168871005288,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468669059017397",
            "extra": "mean: 2.449678177457996 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.6117557246153,
            "unit": "iter/sec",
            "range": "stddev: 0.00016604875469062964",
            "extra": "mean: 1.1714927697441542 msec\nrounds: 899"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2278.473110896108,
            "unit": "iter/sec",
            "range": "stddev: 0.000008931731207241645",
            "extra": "mean: 438.8904109589016 usec\nrounds: 2336"
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
        "date": 1671465184060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.46151595385487,
            "unit": "iter/sec",
            "range": "stddev: 0.000026968200333715166",
            "extra": "mean: 2.448211057692331 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.4568822174319,
            "unit": "iter/sec",
            "range": "stddev: 0.0001175883086895887",
            "extra": "mean: 1.1758385650224359 msec\nrounds: 892"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2270.2651966976573,
            "unit": "iter/sec",
            "range": "stddev: 0.000009092775450225102",
            "extra": "mean: 440.4771748492672 usec\nrounds: 2322"
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
        "date": 1671546087097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.25802730518984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000450414384254462",
            "extra": "mean: 2.425665320665088 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.1468264708305,
            "unit": "iter/sec",
            "range": "stddev: 0.00002492660375369736",
            "extra": "mean: 1.095114138286877 msec\nrounds: 969"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2637.6465226748974,
            "unit": "iter/sec",
            "range": "stddev: 0.000007792322301859849",
            "extra": "mean: 379.1258576171447 usec\nrounds: 2711"
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
        "date": 1671718728644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.83764205831073,
            "unit": "iter/sec",
            "range": "stddev: 0.000028939008969421524",
            "extra": "mean: 2.428141330166253 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.7888588567619,
            "unit": "iter/sec",
            "range": "stddev: 0.00002264838253719268",
            "extra": "mean: 1.09554360824744 msec\nrounds: 970"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2620.3593746956517,
            "unit": "iter/sec",
            "range": "stddev: 0.00001087657438749238",
            "extra": "mean: 381.62704309066294 usec\nrounds: 2692"
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
        "date": 1672064823706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.4975192007235,
            "unit": "iter/sec",
            "range": "stddev: 0.0007174737288118424",
            "extra": "mean: 3.5778492877492827 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 597.6980925808749,
            "unit": "iter/sec",
            "range": "stddev: 0.0004106570621689761",
            "extra": "mean: 1.6730854797979624 msec\nrounds: 792"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1503.1629523292559,
            "unit": "iter/sec",
            "range": "stddev: 0.0003142897951076923",
            "extra": "mean: 665.2638680659541 usec\nrounds: 2001"
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
        "date": 1672324303545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 402.502415014487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008949566691566216",
            "extra": "mean: 2.484457142857162 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 849.2449609792025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001726975925514336",
            "extra": "mean: 1.177516554054054 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2275.1005293504527,
            "unit": "iter/sec",
            "range": "stddev: 0.000008979668490913326",
            "extra": "mean: 439.5410168031136 usec\nrounds: 2321"
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
        "date": 1672324590413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 414.7015505154282,
            "unit": "iter/sec",
            "range": "stddev: 0.00003229434582306056",
            "extra": "mean: 2.411372705882364 msec\nrounds: 425"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.952241106412,
            "unit": "iter/sec",
            "range": "stddev: 0.00010210313315665893",
            "extra": "mean: 1.0917599795291333 msec\nrounds: 977"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2638.0905634790747,
            "unit": "iter/sec",
            "range": "stddev: 0.000007399311932666751",
            "extra": "mean: 379.0620435263658 usec\nrounds: 2711"
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
        "date": 1672325827957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.1735099421275,
            "unit": "iter/sec",
            "range": "stddev: 0.000033636730827805474",
            "extra": "mean: 2.4559554479419163 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 856.1996845167375,
            "unit": "iter/sec",
            "range": "stddev: 0.000019408625889060873",
            "extra": "mean: 1.1679518435754006 msec\nrounds: 895"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2253.446073156004,
            "unit": "iter/sec",
            "range": "stddev: 0.00000983276503750006",
            "extra": "mean: 443.76477960241436 usec\nrounds: 2314"
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
        "date": 1672402756537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 315.03318220513216,
            "unit": "iter/sec",
            "range": "stddev: 0.0003582273752088843",
            "extra": "mean: 3.1742687960687754 msec\nrounds: 407"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 650.0255799102907,
            "unit": "iter/sec",
            "range": "stddev: 0.00025968076245934217",
            "extra": "mean: 1.5384009966777135 msec\nrounds: 903"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1648.1506947744117,
            "unit": "iter/sec",
            "range": "stddev: 0.0001196158079347517",
            "extra": "mean: 606.7406355320401 usec\nrounds: 2077"
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
        "date": 1672404082784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.25500767518395,
            "unit": "iter/sec",
            "range": "stddev: 0.000037994157346142594",
            "extra": "mean: 2.437508333333354 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 862.1664702790033,
            "unit": "iter/sec",
            "range": "stddev: 0.00001692353960969034",
            "extra": "mean: 1.1598688124306118 msec\nrounds: 901"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2270.220613407461,
            "unit": "iter/sec",
            "range": "stddev: 0.000008699791506728883",
            "extra": "mean: 440.48582507541494 usec\nrounds: 2321"
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
        "date": 1672404846753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 416.0719533594041,
            "unit": "iter/sec",
            "range": "stddev: 0.00004739754862364861",
            "extra": "mean: 2.403430444964881 msec\nrounds: 427"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 921.0769194126516,
            "unit": "iter/sec",
            "range": "stddev: 0.000024976889951902217",
            "extra": "mean: 1.0856856565656599 msec\nrounds: 990"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2652.6814081504417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072097166129002515",
            "extra": "mean: 376.977045538703 usec\nrounds: 2701"
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
        "date": 1672406146358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 414.50914980067347,
            "unit": "iter/sec",
            "range": "stddev: 0.00003265703551522442",
            "extra": "mean: 2.412491981132078 msec\nrounds: 424"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 918.4282487974842,
            "unit": "iter/sec",
            "range": "stddev: 0.000023842058936391344",
            "extra": "mean: 1.0888166836215234 msec\nrounds: 983"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2651.46855290055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070037193733390066",
            "extra": "mean: 377.14948529412464 usec\nrounds: 2720"
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
        "date": 1672408994462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.20145991389853,
            "unit": "iter/sec",
            "range": "stddev: 0.000034350066548447926",
            "extra": "mean: 2.443784047619022 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 906.1944163586837,
            "unit": "iter/sec",
            "range": "stddev: 0.00002749123840503723",
            "extra": "mean: 1.1035159585492158 msec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2622.671562450123,
            "unit": "iter/sec",
            "range": "stddev: 0.000009147947887740844",
            "extra": "mean: 381.29059479555696 usec\nrounds: 2690"
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
        "date": 1672412917851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.5840597067432,
            "unit": "iter/sec",
            "range": "stddev: 0.00005610508146726687",
            "extra": "mean: 2.860542328042284 msec\nrounds: 378"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 729.5835871204476,
            "unit": "iter/sec",
            "range": "stddev: 0.000052105075495529414",
            "extra": "mean: 1.3706448687351147 msec\nrounds: 838"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1932.4398866949807,
            "unit": "iter/sec",
            "range": "stddev: 0.000011653199354891561",
            "extra": "mean: 517.4805213269962 usec\nrounds: 2110"
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
        "date": 1672673505809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 276.11164309926426,
            "unit": "iter/sec",
            "range": "stddev: 0.0005678465430310265",
            "extra": "mean: 3.6217234042553295 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 588.242476683988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005640206759109234",
            "extra": "mean: 1.6999792426367297 msec\nrounds: 713"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1464.8791875397626,
            "unit": "iter/sec",
            "range": "stddev: 0.000293087818570326",
            "extra": "mean: 682.6501519756598 usec\nrounds: 1974"
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
        "date": 1672675966318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.62572281442846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000312853589133927",
            "extra": "mean: 2.423503782505904 msec\nrounds: 423"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 918.6282993440718,
            "unit": "iter/sec",
            "range": "stddev: 0.000022883462908001086",
            "extra": "mean: 1.088579570990824 msec\nrounds: 979"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2638.8570079998567,
            "unit": "iter/sec",
            "range": "stddev: 0.00000834157858792357",
            "extra": "mean: 378.9519466073526 usec\nrounds: 2697"
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
        "date": 1672676274451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.82735649477644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813366701958627",
            "extra": "mean: 3.5609066455696268 msec\nrounds: 316"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 544.6530157601259,
            "unit": "iter/sec",
            "range": "stddev: 0.0006213063585404857",
            "extra": "mean: 1.8360313283208118 msec\nrounds: 798"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1431.6997057095084,
            "unit": "iter/sec",
            "range": "stddev: 0.00034732291143053435",
            "extra": "mean: 698.4704935064783 usec\nrounds: 1925"
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
        "date": 1672677322102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.6902675565903,
            "unit": "iter/sec",
            "range": "stddev: 0.00047180365226735907",
            "extra": "mean: 3.2820214705882242 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 621.1388573125972,
            "unit": "iter/sec",
            "range": "stddev: 0.00047962974687609984",
            "extra": "mean: 1.6099459697732859 msec\nrounds: 794"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1527.7968279762297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070079606922871",
            "extra": "mean: 654.5372929754234 usec\nrounds: 1751"
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
        "date": 1672713853140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 414.6141134250267,
            "unit": "iter/sec",
            "range": "stddev: 0.000025796391486197364",
            "extra": "mean: 2.4118812351544006 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.4017853641091,
            "unit": "iter/sec",
            "range": "stddev: 0.000026906697202228807",
            "extra": "mean: 1.091224412665974 msec\nrounds: 979"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2651.570496571437,
            "unit": "iter/sec",
            "range": "stddev: 0.000006557962922377102",
            "extra": "mean: 377.1349852070805 usec\nrounds: 2704"
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
        "date": 1672715621624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.7549481348343,
            "unit": "iter/sec",
            "range": "stddev: 0.00008917938055733401",
            "extra": "mean: 2.4584826923076846 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.8400777643068,
            "unit": "iter/sec",
            "range": "stddev: 0.000019851344725195763",
            "extra": "mean: 1.175308998875124 msec\nrounds: 889"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2257.1016799857753,
            "unit": "iter/sec",
            "range": "stddev: 0.000008994247405880702",
            "extra": "mean: 443.04605719238236 usec\nrounds: 2308"
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
        "date": 1672716203215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.1023397597864,
            "unit": "iter/sec",
            "range": "stddev: 0.000024427891213914748",
            "extra": "mean: 2.4443761445783285 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.2030647484495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001845314859954201",
            "extra": "mean: 1.173429246344211 msec\nrounds: 889"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2270.9788493895817,
            "unit": "iter/sec",
            "range": "stddev: 0.000009740226363535648",
            "extra": "mean: 440.3387553648027 usec\nrounds: 2330"
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
        "date": 1672758349175,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.36800168791893,
            "unit": "iter/sec",
            "range": "stddev: 0.000055218241696144346",
            "extra": "mean: 2.436837170263803 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 863.4330922063178,
            "unit": "iter/sec",
            "range": "stddev: 0.000018400158652399994",
            "extra": "mean: 1.1581673311185177 msec\nrounds: 903"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2270.269114660655,
            "unit": "iter/sec",
            "range": "stddev: 0.000009124313171769736",
            "extra": "mean: 440.47641468684367 usec\nrounds: 2315"
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
        "date": 1672759115479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 345.84188147079294,
            "unit": "iter/sec",
            "range": "stddev: 0.00003779161631942346",
            "extra": "mean: 2.8914947945205767 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 724.1227295286355,
            "unit": "iter/sec",
            "range": "stddev: 0.000026978357084288592",
            "extra": "mean: 1.3809813712807295 msec\nrounds: 773"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1908.328893683187,
            "unit": "iter/sec",
            "range": "stddev: 0.000011659173388444783",
            "extra": "mean: 524.0186863543952 usec\nrounds: 1964"
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
        "date": 1672929487759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 403.0400130657754,
            "unit": "iter/sec",
            "range": "stddev: 0.00021576717309136823",
            "extra": "mean: 2.481143230403781 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 922.2356455616732,
            "unit": "iter/sec",
            "range": "stddev: 0.00002263270399241354",
            "extra": "mean: 1.084321566632751 msec\nrounds: 983"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2637.4144670480014,
            "unit": "iter/sec",
            "range": "stddev: 0.000007344548069985097",
            "extra": "mean: 379.1592153960077 usec\nrounds: 2702"
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
        "date": 1673069075804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.397504437381,
            "unit": "iter/sec",
            "range": "stddev: 0.00002871293230562335",
            "extra": "mean: 2.418979285714276 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.2723300307664,
            "unit": "iter/sec",
            "range": "stddev: 0.000022981519497400747",
            "extra": "mean: 1.0913785860655885 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2619.277398390765,
            "unit": "iter/sec",
            "range": "stddev: 0.000006672164800412057",
            "extra": "mean: 381.7846863468456 usec\nrounds: 2710"
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
        "date": 1673069710637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.5220019938915,
            "unit": "iter/sec",
            "range": "stddev: 0.00002640517736876762",
            "extra": "mean: 2.424113126491633 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 909.4384884255677,
            "unit": "iter/sec",
            "range": "stddev: 0.00010222413452557143",
            "extra": "mean: 1.099579589743572 msec\nrounds: 975"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2606.176726133697,
            "unit": "iter/sec",
            "range": "stddev: 0.000021425929226764886",
            "extra": "mean: 383.70383327132055 usec\nrounds: 2687"
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
        "date": 1673681428318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.6507889630957,
            "unit": "iter/sec",
            "range": "stddev: 0.000027172337414844234",
            "extra": "mean: 2.4174981087470284 msec\nrounds: 423"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 919.5810784733812,
            "unit": "iter/sec",
            "range": "stddev: 0.00002477894786707031",
            "extra": "mean: 1.08745169230768 msec\nrounds: 975"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2644.2608846538014,
            "unit": "iter/sec",
            "range": "stddev: 0.000007394701535303951",
            "extra": "mean: 378.17751107827036 usec\nrounds: 2708"
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
        "date": 1673685220687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.01414501471345,
            "unit": "iter/sec",
            "range": "stddev: 0.000028794551337344586",
            "extra": "mean: 2.4508954216867624 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.7988527306352,
            "unit": "iter/sec",
            "range": "stddev: 0.000016209189412601174",
            "extra": "mean: 1.168498878923775 msec\nrounds: 892"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2256.2367297398955,
            "unit": "iter/sec",
            "range": "stddev: 0.000008831476807602384",
            "extra": "mean: 443.2159031979249 usec\nrounds: 2314"
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
        "date": 1673687258907,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.4309574956872,
            "unit": "iter/sec",
            "range": "stddev: 0.000032062721894907525",
            "extra": "mean: 2.448394230769247 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 910.3981277178552,
            "unit": "iter/sec",
            "range": "stddev: 0.00002297839358204133",
            "extra": "mean: 1.0984205366357187 msec\nrounds: 969"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2620.9314454690043,
            "unit": "iter/sec",
            "range": "stddev: 0.000006964881577580468",
            "extra": "mean: 381.5437453462482 usec\nrounds: 2686"
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
        "date": 1673687849298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 348.08124817475624,
            "unit": "iter/sec",
            "range": "stddev: 0.000037513830212918233",
            "extra": "mean: 2.872892479108625 msec\nrounds: 359"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 729.3798028118076,
            "unit": "iter/sec",
            "range": "stddev: 0.000030484520028522697",
            "extra": "mean: 1.3710278186274607 msec\nrounds: 816"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1932.1258430975709,
            "unit": "iter/sec",
            "range": "stddev: 0.000017000764746326683",
            "extra": "mean: 517.5646315028876 usec\nrounds: 2768"
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
        "date": 1673688340635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.00643618802764,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700977410472328",
            "extra": "mean: 3.597039024390274 msec\nrounds: 328"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 609.1051552372243,
            "unit": "iter/sec",
            "range": "stddev: 0.00032862313471282136",
            "extra": "mean: 1.641752645502625 msec\nrounds: 756"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1543.7129965311615,
            "unit": "iter/sec",
            "range": "stddev: 0.00015458655426314015",
            "extra": "mean: 647.7888067581699 usec\nrounds: 1894"
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
        "date": 1673688856040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.87159774846015,
            "unit": "iter/sec",
            "range": "stddev: 0.000026394974098689648",
            "extra": "mean: 2.4279411483253672 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 865.245032985668,
            "unit": "iter/sec",
            "range": "stddev: 0.000016019451150956007",
            "extra": "mean: 1.1557419712070904 msec\nrounds: 903"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2275.1501852026454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000160354307284896",
            "extra": "mean: 439.5314236853032 usec\nrounds: 2339"
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
        "date": 1673689159385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.7028255944884,
            "unit": "iter/sec",
            "range": "stddev: 0.000028572273658005582",
            "extra": "mean: 2.4289364508393296 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.3843973548043,
            "unit": "iter/sec",
            "range": "stddev: 0.000021945975317260213",
            "extra": "mean: 1.0912451181911837 msec\nrounds: 973"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2625.33399320843,
            "unit": "iter/sec",
            "range": "stddev: 0.000006787537110680077",
            "extra": "mean: 380.90391644908254 usec\nrounds: 2681"
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
        "date": 1673689331605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.3140141524903,
            "unit": "iter/sec",
            "range": "stddev: 0.000029167378867655524",
            "extra": "mean: 2.4194679245283335 msec\nrounds: 424"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 924.7484745673084,
            "unit": "iter/sec",
            "range": "stddev: 0.000021821113854353022",
            "extra": "mean: 1.0813751279426569 msec\nrounds: 977"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2632.9047516766072,
            "unit": "iter/sec",
            "range": "stddev: 0.000006388932269493013",
            "extra": "mean: 379.80865026097507 usec\nrounds: 2682"
          }
        ]
      }
    ]
  }
}