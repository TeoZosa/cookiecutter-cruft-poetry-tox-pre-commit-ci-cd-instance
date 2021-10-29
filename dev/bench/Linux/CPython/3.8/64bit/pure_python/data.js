window.BENCHMARK_DATA = {
  "lastUpdate": 1635515052662,
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
      }
    ]
  }
}