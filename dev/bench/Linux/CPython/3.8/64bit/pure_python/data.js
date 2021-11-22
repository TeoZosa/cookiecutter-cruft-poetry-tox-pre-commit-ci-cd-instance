window.BENCHMARK_DATA = {
  "lastUpdate": 1637591825735,
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
      }
    ]
  }
}