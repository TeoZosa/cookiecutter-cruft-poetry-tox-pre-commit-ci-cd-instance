window.BENCHMARK_DATA = {
  "lastUpdate": 1714397275294,
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
        "date": 1673689871055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 405.44645151891393,
            "unit": "iter/sec",
            "range": "stddev: 0.000032856052676278594",
            "extra": "mean: 2.466416949152533 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 843.0761842639606,
            "unit": "iter/sec",
            "range": "stddev: 0.000018617022363632245",
            "extra": "mean: 1.186132426303846 msec\nrounds: 882"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2244.43132731462,
            "unit": "iter/sec",
            "range": "stddev: 0.00000936263962696041",
            "extra": "mean: 445.5471583514491 usec\nrounds: 2305"
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
        "date": 1673691036377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 402.59939172483104,
            "unit": "iter/sec",
            "range": "stddev: 0.000024733168938757225",
            "extra": "mean: 2.48385869565218 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 847.5073754688174,
            "unit": "iter/sec",
            "range": "stddev: 0.000019425023629635132",
            "extra": "mean: 1.1799307344633172 msec\nrounds: 885"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2263.6994080509935,
            "unit": "iter/sec",
            "range": "stddev: 0.00000990583500938933",
            "extra": "mean: 441.7547649848895 usec\nrounds: 2319"
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
        "date": 1673694419857,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.096683158988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002908025654755415",
            "extra": "mean: 2.4207408114558286 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.5980454945967,
            "unit": "iter/sec",
            "range": "stddev: 0.00002260641083079587",
            "extra": "mean: 1.0921823227132494 msec\nrounds: 973"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2639.2825139810616,
            "unit": "iter/sec",
            "range": "stddev: 0.000007361449509553269",
            "extra": "mean: 378.8908518518589 usec\nrounds: 2700"
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
        "date": 1673875654160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.27329246926297,
            "unit": "iter/sec",
            "range": "stddev: 0.000025227977374395444",
            "extra": "mean: 2.4613973365617086 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 846.5827519812797,
            "unit": "iter/sec",
            "range": "stddev: 0.000016357877069309794",
            "extra": "mean: 1.1812194350282639 msec\nrounds: 885"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2251.436657743231,
            "unit": "iter/sec",
            "range": "stddev: 0.000009448947971802488",
            "extra": "mean: 444.16084128361325 usec\nrounds: 2306"
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
        "date": 1673879467789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.28733658932975,
            "unit": "iter/sec",
            "range": "stddev: 0.000025557924495243302",
            "extra": "mean: 2.4373162679425646 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.5416558470528,
            "unit": "iter/sec",
            "range": "stddev: 0.00001787749419891727",
            "extra": "mean: 1.1647658482142975 msec\nrounds: 896"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2253.8120913567714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001029759780908243",
            "extra": "mean: 443.6927123760395 usec\nrounds: 2319"
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
        "date": 1673881662067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.3664054321018,
            "unit": "iter/sec",
            "range": "stddev: 0.00009436642902050903",
            "extra": "mean: 2.7982484777517675 msec\nrounds: 427"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 734.9599519835377,
            "unit": "iter/sec",
            "range": "stddev: 0.00004994933364676613",
            "extra": "mean: 1.3606183538316097 msec\nrounds: 1057"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1945.7734725853095,
            "unit": "iter/sec",
            "range": "stddev: 0.000018342393825515017",
            "extra": "mean: 513.9344400000069 usec\nrounds: 2500"
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
        "date": 1673882819585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.67705053395866,
            "unit": "iter/sec",
            "range": "stddev: 0.0004387896466934355",
            "extra": "mean: 3.562813554216865 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 616.9864290770347,
            "unit": "iter/sec",
            "range": "stddev: 0.00028050621201206494",
            "extra": "mean: 1.620781192053 msec\nrounds: 755"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1569.9639493273387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002107010175833307",
            "extra": "mean: 636.9573011077462 usec\nrounds: 1986"
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
        "date": 1673969553374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.74428341213996,
            "unit": "iter/sec",
            "range": "stddev: 0.000024504343546728884",
            "extra": "mean: 2.4286918854415256 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 914.6420605461122,
            "unit": "iter/sec",
            "range": "stddev: 0.000023492852677626475",
            "extra": "mean: 1.0933238729508266 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2630.293059630999,
            "unit": "iter/sec",
            "range": "stddev: 0.000007767999641778392",
            "extra": "mean: 380.1857729648912 usec\nrounds: 2678"
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
        "date": 1673970107991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.31531506332226,
            "unit": "iter/sec",
            "range": "stddev: 0.00025377506351197923",
            "extra": "mean: 3.296899135446665 msec\nrounds: 347"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 621.0098284074222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003635875150156176",
            "extra": "mean: 1.6102804726367967 msec\nrounds: 804"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1654.608446317816,
            "unit": "iter/sec",
            "range": "stddev: 0.00012673681447430317",
            "extra": "mean: 604.3725947521972 usec\nrounds: 2058"
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
        "date": 1673970496026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.3911229902399,
            "unit": "iter/sec",
            "range": "stddev: 0.00002474362272868645",
            "extra": "mean: 2.4190166270783946 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 928.1623121956952,
            "unit": "iter/sec",
            "range": "stddev: 0.00002277034209726469",
            "extra": "mean: 1.077397764227641 msec\nrounds: 984"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2626.5641448040974,
            "unit": "iter/sec",
            "range": "stddev: 0.000006949028649539602",
            "extra": "mean: 380.72552005943305 usec\nrounds: 2692"
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
        "date": 1674052121741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.25665473799324,
            "unit": "iter/sec",
            "range": "stddev: 0.00003027474596027106",
            "extra": "mean: 2.4256733966745614 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.8408658497182,
            "unit": "iter/sec",
            "range": "stddev: 0.000035487083168788616",
            "extra": "mean: 1.0954811921891223 msec\nrounds: 973"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2627.852802505706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072486527681461084",
            "extra": "mean: 380.53881824982034 usec\nrounds: 2674"
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
        "date": 1674053210425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.75644671949993,
            "unit": "iter/sec",
            "range": "stddev: 0.00002577677833945161",
            "extra": "mean: 2.4345326968973575 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 914.4956832434143,
            "unit": "iter/sec",
            "range": "stddev: 0.000024233305660558675",
            "extra": "mean: 1.0934988741043918 msec\nrounds: 977"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2622.216864374249,
            "unit": "iter/sec",
            "range": "stddev: 0.00000828986754054206",
            "extra": "mean: 381.35671140938774 usec\nrounds: 2682"
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
        "date": 1674054381875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.66737543099026,
            "unit": "iter/sec",
            "range": "stddev: 0.000049540486317286615",
            "extra": "mean: 2.8598607427056297 msec\nrounds: 377"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 733.7871391155319,
            "unit": "iter/sec",
            "range": "stddev: 0.000029823468991256647",
            "extra": "mean: 1.3627930317848675 msec\nrounds: 818"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1935.878511886597,
            "unit": "iter/sec",
            "range": "stddev: 0.000017826678590298145",
            "extra": "mean: 516.5613409415123 usec\nrounds: 2103"
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
        "date": 1674055111304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.31213747519587,
            "unit": "iter/sec",
            "range": "stddev: 0.0008360127835189134",
            "extra": "mean: 3.421000607902759 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 632.1238983537897,
            "unit": "iter/sec",
            "range": "stddev: 0.000307101511282252",
            "extra": "mean: 1.5819683492496528 msec\nrounds: 733"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1630.0854759966553,
            "unit": "iter/sec",
            "range": "stddev: 0.00014147197785396235",
            "extra": "mean: 613.4647628760615 usec\nrounds: 1961"
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
        "date": 1674055514397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.31281814373756,
            "unit": "iter/sec",
            "range": "stddev: 0.00002808244674419588",
            "extra": "mean: 2.4491026378896876 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.3915597921342,
            "unit": "iter/sec",
            "range": "stddev: 0.00001694267359228956",
            "extra": "mean: 1.1690552572707247 msec\nrounds: 894"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2256.978190155233,
            "unit": "iter/sec",
            "range": "stddev: 0.000010042894368156135",
            "extra": "mean: 443.0702983138801 usec\nrounds: 2313"
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
        "date": 1674056219148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.9965053989405,
            "unit": "iter/sec",
            "range": "stddev: 0.00024587729974937975",
            "extra": "mean: 3.030335120643404 msec\nrounds: 373"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 681.8038885156604,
            "unit": "iter/sec",
            "range": "stddev: 0.00023106445838058076",
            "extra": "mean: 1.4666974137931026 msec\nrounds: 812"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1713.5934728136951,
            "unit": "iter/sec",
            "range": "stddev: 0.00022077764289365294",
            "extra": "mean: 583.5689828801779 usec\nrounds: 1986"
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
        "date": 1674056532544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.42979728560556,
            "unit": "iter/sec",
            "range": "stddev: 0.00017377201527490421",
            "extra": "mean: 2.677879503105594 msec\nrounds: 483"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 771.1345736509599,
            "unit": "iter/sec",
            "range": "stddev: 0.00009042303123967266",
            "extra": "mean: 1.296790513834012 msec\nrounds: 1012"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2084.7392016628482,
            "unit": "iter/sec",
            "range": "stddev: 0.00004321863331339979",
            "extra": "mean: 479.6763063707782 usec\nrounds: 2794"
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
        "date": 1674138301932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.93646723481874,
            "unit": "iter/sec",
            "range": "stddev: 0.000024072298491499925",
            "extra": "mean: 2.4275588095238088 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 863.1645026947431,
            "unit": "iter/sec",
            "range": "stddev: 0.000018858297663983158",
            "extra": "mean: 1.1585277161862721 msec\nrounds: 902"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2289.938285184522,
            "unit": "iter/sec",
            "range": "stddev: 0.000008557380825480476",
            "extra": "mean: 436.6929914530079 usec\nrounds: 2340"
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
        "date": 1674396122378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.78499750591425,
            "unit": "iter/sec",
            "range": "stddev: 0.00002539863351251043",
            "extra": "mean: 2.440304076738601 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.4848910846044,
            "unit": "iter/sec",
            "range": "stddev: 0.000023706835175381997",
            "extra": "mean: 1.095908556701002 msec\nrounds: 970"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2617.176052440085,
            "unit": "iter/sec",
            "range": "stddev: 0.000007571824556273476",
            "extra": "mean: 382.091223503159 usec\nrounds: 2689"
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
        "date": 1674485629514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.80821622575513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000211079624552067",
            "extra": "mean: 2.458160774818416 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 851.5302372346243,
            "unit": "iter/sec",
            "range": "stddev: 0.000018047198029676887",
            "extra": "mean: 1.1743564189188824 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2274.746313688833,
            "unit": "iter/sec",
            "range": "stddev: 0.000009513587733958661",
            "extra": "mean: 439.6094606164474 usec\nrounds: 2336"
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
        "date": 1674486787447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 344.4633037290079,
            "unit": "iter/sec",
            "range": "stddev: 0.000027081860448776876",
            "extra": "mean: 2.9030668555240595 msec\nrounds: 353"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 720.4198332342513,
            "unit": "iter/sec",
            "range": "stddev: 0.000025232279132322157",
            "extra": "mean: 1.388079497354483 msec\nrounds: 756"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1895.7702587663223,
            "unit": "iter/sec",
            "range": "stddev: 0.00001173446434840898",
            "extra": "mean: 527.4900771208178 usec\nrounds: 1945"
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
        "date": 1674569552641,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.5124408402123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000240649848224041",
            "extra": "mean: 2.4300601895734513 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.2178677393057,
            "unit": "iter/sec",
            "range": "stddev: 0.000024284208648084412",
            "extra": "mean: 1.0914434603501237 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2610.864275014881,
            "unit": "iter/sec",
            "range": "stddev: 0.000008169235965907425",
            "extra": "mean: 383.0149309443902 usec\nrounds: 2679"
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
        "date": 1674743256859,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.70768022587436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000241369172570667",
            "extra": "mean: 2.423022511848341 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 917.6909919771122,
            "unit": "iter/sec",
            "range": "stddev: 0.000024094964809436963",
            "extra": "mean: 1.0896914198161167 msec\nrounds: 979"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2609.764398228937,
            "unit": "iter/sec",
            "range": "stddev: 0.000007749149896697298",
            "extra": "mean: 383.176351351344 usec\nrounds: 2664"
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
        "date": 1674828670210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.27972804034226,
            "unit": "iter/sec",
            "range": "stddev: 0.000022164700922212446",
            "extra": "mean: 2.4196686460807606 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 861.8105084067705,
            "unit": "iter/sec",
            "range": "stddev: 0.000016220098498328607",
            "extra": "mean: 1.1603478841870942 msec\nrounds: 898"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2269.914456374019,
            "unit": "iter/sec",
            "range": "stddev: 0.000009121972776879936",
            "extra": "mean: 440.5452360514979 usec\nrounds: 2330"
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
        "date": 1675090055827,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.235313210335,
            "unit": "iter/sec",
            "range": "stddev: 0.0006732621444569676",
            "extra": "mean: 3.659849044585996 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 601.0505816981268,
            "unit": "iter/sec",
            "range": "stddev: 0.00035456895649942007",
            "extra": "mean: 1.663753485063995 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1562.138020289886,
            "unit": "iter/sec",
            "range": "stddev: 0.00030986621315756794",
            "extra": "mean: 640.1483012457695 usec\nrounds: 1766"
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
        "date": 1675176928886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.09317912997847,
            "unit": "iter/sec",
            "range": "stddev: 0.000036045420601405305",
            "extra": "mean: 2.864564705882346 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 729.1729962933583,
            "unit": "iter/sec",
            "range": "stddev: 0.0000235362835837847",
            "extra": "mean: 1.3714166666666898 msec\nrounds: 768"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1926.3651311159797,
            "unit": "iter/sec",
            "range": "stddev: 0.000011560079620728607",
            "extra": "mean: 519.1123862487487 usec\nrounds: 1978"
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
        "date": 1675262145338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9693155904071,
            "unit": "iter/sec",
            "range": "stddev: 0.000023516967714704166",
            "extra": "mean: 2.4273652482269616 msec\nrounds: 423"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 917.7379256750567,
            "unit": "iter/sec",
            "range": "stddev: 0.000022062426315719536",
            "extra": "mean: 1.0896356923077295 msec\nrounds: 975"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2599.916732396504,
            "unit": "iter/sec",
            "range": "stddev: 0.000008433729100116612",
            "extra": "mean: 384.6277027027086 usec\nrounds: 2664"
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
        "date": 1675347123105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 332.1262751357656,
            "unit": "iter/sec",
            "range": "stddev: 0.000297163749087512",
            "extra": "mean: 3.0109030054644816 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 686.7282542810416,
            "unit": "iter/sec",
            "range": "stddev: 0.00026550426619173934",
            "extra": "mean: 1.4561800738007102 msec\nrounds: 813"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1848.5153081822966,
            "unit": "iter/sec",
            "range": "stddev: 0.00007844524889046626",
            "extra": "mean: 540.9746922698365 usec\nrounds: 2031"
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
        "date": 1675481867846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.70414959462164,
            "unit": "iter/sec",
            "range": "stddev: 0.00004752905573998061",
            "extra": "mean: 2.428928639618122 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 862.2484153917374,
            "unit": "iter/sec",
            "range": "stddev: 0.00001833195963027964",
            "extra": "mean: 1.159758582502792 msec\nrounds: 903"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2274.419894085285,
            "unit": "iter/sec",
            "range": "stddev: 0.000010877082858314539",
            "extra": "mean: 439.67255237282177 usec\nrounds: 2339"
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
        "date": 1675482827210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.7675215981904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002067318999543697",
            "extra": "mean: 2.4463783132530237 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.7904886791043,
            "unit": "iter/sec",
            "range": "stddev: 0.00001803672149075402",
            "extra": "mean: 1.1753775028121802 msec\nrounds: 889"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2265.692038711057,
            "unit": "iter/sec",
            "range": "stddev: 0.000008778926445996475",
            "extra": "mean: 441.366250538134 usec\nrounds: 2323"
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
        "date": 1675482934157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.0023891029552,
            "unit": "iter/sec",
            "range": "stddev: 0.00020197280374919502",
            "extra": "mean: 2.680947975708494 msec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 757.9989403851556,
            "unit": "iter/sec",
            "range": "stddev: 0.00009296668468321872",
            "extra": "mean: 1.3192630579297095 msec\nrounds: 1053"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2067.3159529699283,
            "unit": "iter/sec",
            "range": "stddev: 0.00005243162912287215",
            "extra": "mean: 483.71899736147697 usec\nrounds: 2653"
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
        "date": 1675483946480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 331.0957516519806,
            "unit": "iter/sec",
            "range": "stddev: 0.00032108282142364957",
            "extra": "mean: 3.020274331550814 msec\nrounds: 374"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 704.4150642017163,
            "unit": "iter/sec",
            "range": "stddev: 0.0002378345443332559",
            "extra": "mean: 1.4196175675675784 msec\nrounds: 814"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1765.406019869074,
            "unit": "iter/sec",
            "range": "stddev: 0.0001805950136667758",
            "extra": "mean: 566.4419338924437 usec\nrounds: 2027"
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
        "date": 1675692546665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.52167041267904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002769704530482035",
            "extra": "mean: 2.4359249999999877 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 910.5005285987502,
            "unit": "iter/sec",
            "range": "stddev: 0.000021844345869928275",
            "extra": "mean: 1.0982970010341329 msec\nrounds: 967"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2603.3160496095907,
            "unit": "iter/sec",
            "range": "stddev: 0.000007546147969565995",
            "extra": "mean: 384.1254695717664 usec\nrounds: 2662"
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
        "date": 1675693240624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9027103493219,
            "unit": "iter/sec",
            "range": "stddev: 0.00002346752221223575",
            "extra": "mean: 2.4277577565632695 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 919.717108476714,
            "unit": "iter/sec",
            "range": "stddev: 0.000022099014622520425",
            "extra": "mean: 1.0872908536585286 msec\nrounds: 984"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2616.293057550421,
            "unit": "iter/sec",
            "range": "stddev: 0.000008339618627424179",
            "extra": "mean: 382.22017870439885 usec\nrounds: 2686"
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
        "date": 1675870434474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.53149894042076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002384633890660684",
            "extra": "mean: 2.4181954761904954 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.2356133875948,
            "unit": "iter/sec",
            "range": "stddev: 0.00002384968134787635",
            "extra": "mean: 1.095007668711646 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2598.941258119992,
            "unit": "iter/sec",
            "range": "stddev: 0.000011257835572780653",
            "extra": "mean: 384.772067039089 usec\nrounds: 2685"
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
        "date": 1675870912946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 414.8998601826781,
            "unit": "iter/sec",
            "range": "stddev: 0.000027267462046192063",
            "extra": "mean: 2.4102201421801053 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 924.6192166410929,
            "unit": "iter/sec",
            "range": "stddev: 0.000022554853350455875",
            "extra": "mean: 1.0815262996942097 msec\nrounds: 981"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2603.324734296044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075828324194627235",
            "extra": "mean: 384.12418812991706 usec\nrounds: 2679"
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
        "date": 1675871112357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.6445212115411,
            "unit": "iter/sec",
            "range": "stddev: 0.000030214856337602668",
            "extra": "mean: 2.4471146634615826 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.5546374867159,
            "unit": "iter/sec",
            "range": "stddev: 0.000020954601611926895",
            "extra": "mean: 1.1729453527435436 msec\nrounds: 893"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2238.2979593049613,
            "unit": "iter/sec",
            "range": "stddev: 0.00003890902484676772",
            "extra": "mean: 446.7680434782334 usec\nrounds: 2300"
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
        "date": 1675871330999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.4359794675681,
            "unit": "iter/sec",
            "range": "stddev: 0.000025394016651046672",
            "extra": "mean: 2.436433573141504 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 856.7534088900225,
            "unit": "iter/sec",
            "range": "stddev: 0.000015790402468768253",
            "extra": "mean: 1.1671969899665322 msec\nrounds: 897"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2263.3743849233274,
            "unit": "iter/sec",
            "range": "stddev: 0.000008430916692695334",
            "extra": "mean: 441.8182014699594 usec\nrounds: 2313"
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
        "date": 1675871790390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.70320532614136,
            "unit": "iter/sec",
            "range": "stddev: 0.000021529149320829962",
            "extra": "mean: 2.428934210526304 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 857.059091641686,
            "unit": "iter/sec",
            "range": "stddev: 0.000017026347508034778",
            "extra": "mean: 1.1667806919643222 msec\nrounds: 896"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2260.643169589846,
            "unit": "iter/sec",
            "range": "stddev: 0.00000832515073903964",
            "extra": "mean: 442.3519878997234 usec\nrounds: 2314"
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
        "date": 1675953115733,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.7073049944475,
            "unit": "iter/sec",
            "range": "stddev: 0.000025074131139317624",
            "extra": "mean: 2.4289100238663157 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.6210556532334,
            "unit": "iter/sec",
            "range": "stddev: 0.00002253314016958819",
            "extra": "mean: 1.0909633744855953 msec\nrounds: 972"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2627.018556866315,
            "unit": "iter/sec",
            "range": "stddev: 0.000007189551279867312",
            "extra": "mean: 380.659663551394 usec\nrounds: 2675"
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
        "date": 1675953530891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 223.8644174424039,
            "unit": "iter/sec",
            "range": "stddev: 0.0012151739894031034",
            "extra": "mean: 4.4669894904458465 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 562.1116565142305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052452699602929",
            "extra": "mean: 1.779005982905967 msec\nrounds: 702"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1253.5545105972383,
            "unit": "iter/sec",
            "range": "stddev: 0.0002910573506451887",
            "extra": "mean: 797.7315637622844 usec\nrounds: 1733"
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
        "date": 1676301587565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.92394724904216,
            "unit": "iter/sec",
            "range": "stddev: 0.000021165733808295616",
            "extra": "mean: 2.451437349397604 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 856.6152999896138,
            "unit": "iter/sec",
            "range": "stddev: 0.00001933343851054435",
            "extra": "mean: 1.1673851727982498 msec\nrounds: 897"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2241.9064930765194,
            "unit": "iter/sec",
            "range": "stddev: 0.000008617659222377135",
            "extra": "mean: 446.04893339138414 usec\nrounds: 2297"
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
        "date": 1676301913922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.5843092596845,
            "unit": "iter/sec",
            "range": "stddev: 0.000026486532314994967",
            "extra": "mean: 2.4178866983372727 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 928.2248711947225,
            "unit": "iter/sec",
            "range": "stddev: 0.00002305342947243247",
            "extra": "mean: 1.077325151515166 msec\nrounds: 990"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2631.02566427299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075597949014322",
            "extra": "mean: 380.0799108800491 usec\nrounds: 2693"
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
        "date": 1676646991326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.17429244590727,
            "unit": "iter/sec",
            "range": "stddev: 0.00045153608143244146",
            "extra": "mean: 3.6078381987577646 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 585.4823586056455,
            "unit": "iter/sec",
            "range": "stddev: 0.00045150150902677384",
            "extra": "mean: 1.7079933926302207 msec\nrounds: 787"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1530.814192857088,
            "unit": "iter/sec",
            "range": "stddev: 0.00017377679428910603",
            "extra": "mean: 653.2471443406305 usec\nrounds: 1926"
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
        "date": 1676994127672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.63138757451554,
            "unit": "iter/sec",
            "range": "stddev: 0.00008333403692240667",
            "extra": "mean: 2.459229736211028 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 906.2089667219636,
            "unit": "iter/sec",
            "range": "stddev: 0.000021634012441294593",
            "extra": "mean: 1.1034982401656293 msec\nrounds: 966"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2607.954367905087,
            "unit": "iter/sec",
            "range": "stddev: 0.000008243054838601829",
            "extra": "mean: 383.4422918999454 usec\nrounds: 2679"
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
        "date": 1677076405199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.7123182720505,
            "unit": "iter/sec",
            "range": "stddev: 0.000028232980063833844",
            "extra": "mean: 2.434794272076381 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.2282768777571,
            "unit": "iter/sec",
            "range": "stddev: 0.000021823202206887987",
            "extra": "mean: 1.0926235839340936 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2610.1375646358856,
            "unit": "iter/sec",
            "range": "stddev: 0.00000981189998502801",
            "extra": "mean: 383.12156935663273 usec\nrounds: 2689"
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
        "date": 1677164852357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.0527647807022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005236034589287438",
            "extra": "mean: 3.4240388059701616 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 627.7124664830748,
            "unit": "iter/sec",
            "range": "stddev: 0.00022701584252850042",
            "extra": "mean: 1.5930860917941694 msec\nrounds: 719"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1605.6909819427574,
            "unit": "iter/sec",
            "range": "stddev: 0.00013031654495702184",
            "extra": "mean: 622.784839203668 usec\nrounds: 1959"
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
        "date": 1677182342540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.99259854894126,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844693137116682",
            "extra": "mean: 3.4014461756374077 msec\nrounds: 353"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 627.8968011318524,
            "unit": "iter/sec",
            "range": "stddev: 0.0003187175774222699",
            "extra": "mean: 1.5926184019370555 msec\nrounds: 826"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1603.2943079972945,
            "unit": "iter/sec",
            "range": "stddev: 0.00013238030508246556",
            "extra": "mean: 623.7158050221727 usec\nrounds: 2031"
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
        "date": 1677323211992,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 326.55187965498726,
            "unit": "iter/sec",
            "range": "stddev: 0.0003904736757174194",
            "extra": "mean: 3.0623005479451924 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 704.5210951139874,
            "unit": "iter/sec",
            "range": "stddev: 0.00019144862417612912",
            "extra": "mean: 1.4194039141414294 msec\nrounds: 792"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1690.2281704175937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604210932154508",
            "extra": "mean: 591.6360983102871 usec\nrounds: 1953"
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
        "date": 1677601050323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.295536685991,
            "unit": "iter/sec",
            "range": "stddev: 0.00024073132109723013",
            "extra": "mean: 2.52336932270918 msec\nrounds: 502"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 814.4008086196928,
            "unit": "iter/sec",
            "range": "stddev: 0.00010548989104474918",
            "extra": "mean: 1.2278966197183356 msec\nrounds: 1065"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2156.9650157486367,
            "unit": "iter/sec",
            "range": "stddev: 0.000050511881817572756",
            "extra": "mean: 463.61438071489596 usec\nrounds: 2406"
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
        "date": 1677601941035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.34320979916714,
            "unit": "iter/sec",
            "range": "stddev: 0.00002826045286442944",
            "extra": "mean: 2.4429377990430625 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 920.2932680453091,
            "unit": "iter/sec",
            "range": "stddev: 0.000022857919002122192",
            "extra": "mean: 1.0866101434426298 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2626.782908217542,
            "unit": "iter/sec",
            "range": "stddev: 0.000008662226105800613",
            "extra": "mean: 380.6938125231562 usec\nrounds: 2699"
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
        "date": 1677602131876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.1655669041226,
            "unit": "iter/sec",
            "range": "stddev: 0.000030709518200583925",
            "extra": "mean: 2.4380398568019066 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.0850138179417,
            "unit": "iter/sec",
            "range": "stddev: 0.00002312349007947552",
            "extra": "mean: 1.0916017453798619 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2629.260814547948,
            "unit": "iter/sec",
            "range": "stddev: 0.000008072249019062867",
            "extra": "mean: 380.33503350710043 usec\nrounds: 2686"
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
        "date": 1677602354466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 353.29976088336053,
            "unit": "iter/sec",
            "range": "stddev: 0.00006730679209129445",
            "extra": "mean: 2.8304576190475914 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 736.9402019980082,
            "unit": "iter/sec",
            "range": "stddev: 0.00003796522957039424",
            "extra": "mean: 1.356962203023771 msec\nrounds: 926"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1938.7649790349665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000210620919395008",
            "extra": "mean: 515.7922753988247 usec\nrounds: 2382"
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
        "date": 1677690974687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.7543990159547,
            "unit": "iter/sec",
            "range": "stddev: 0.000030885668740984226",
            "extra": "mean: 2.428632219570414 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 917.7114337204213,
            "unit": "iter/sec",
            "range": "stddev: 0.000022289042243243134",
            "extra": "mean: 1.0896671472708792 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2627.3647502285844,
            "unit": "iter/sec",
            "range": "stddev: 0.000007163193664705997",
            "extra": "mean: 380.6095061270037 usec\nrounds: 2693"
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
        "date": 1677692662469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 403.4345270208816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003581938515394441",
            "extra": "mean: 2.4787169491525463 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 847.6782350880849,
            "unit": "iter/sec",
            "range": "stddev: 0.000018328605340717637",
            "extra": "mean: 1.1796929054054182 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2243.957775192474,
            "unit": "iter/sec",
            "range": "stddev: 0.000010263150752184934",
            "extra": "mean: 445.64118409680225 usec\nrounds: 2314"
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
        "date": 1677694356683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.73032325287795,
            "unit": "iter/sec",
            "range": "stddev: 0.00002875392245651983",
            "extra": "mean: 2.4466009569378304 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 914.4770905686747,
            "unit": "iter/sec",
            "range": "stddev: 0.000022239186140894465",
            "extra": "mean: 1.0935211065573465 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2620.7069963813315,
            "unit": "iter/sec",
            "range": "stddev: 0.000008303325253285474",
            "extra": "mean: 381.57642246187714 usec\nrounds: 2689"
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
        "date": 1677769894462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.7978111965826,
            "unit": "iter/sec",
            "range": "stddev: 0.000026302276365669014",
            "extra": "mean: 2.4283761904762127 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 920.3306407931808,
            "unit": "iter/sec",
            "range": "stddev: 0.000025714667622856184",
            "extra": "mean: 1.086566018423723 msec\nrounds: 977"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2621.9164358610287,
            "unit": "iter/sec",
            "range": "stddev: 0.000007764250980769993",
            "extra": "mean: 381.4004086181348 usec\nrounds: 2692"
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
        "date": 1677771789537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.76002745555263,
            "unit": "iter/sec",
            "range": "stddev: 0.00043404385943927404",
            "extra": "mean: 3.2075953038673926 msec\nrounds: 362"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 669.6652320818746,
            "unit": "iter/sec",
            "range": "stddev: 0.00022295632017339744",
            "extra": "mean: 1.4932834378920512 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1728.2916513238113,
            "unit": "iter/sec",
            "range": "stddev: 0.00008160212747198895",
            "extra": "mean: 578.606046747975 usec\nrounds: 1968"
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
        "date": 1677773953526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.9050121720212,
            "unit": "iter/sec",
            "range": "stddev: 0.00002914731070982552",
            "extra": "mean: 2.4575760191846565 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 848.7050159999031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000169452777259506",
            "extra": "mean: 1.1782656884875935 msec\nrounds: 886"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2247.308176020971,
            "unit": "iter/sec",
            "range": "stddev: 0.000009905801643260338",
            "extra": "mean: 444.9767996530745 usec\nrounds: 2306"
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
          "id": "d75e4d76dc70a78f4fd63e1526b8e43f0b762ba9",
          "message": "Merge pull request #1020 from TeoZosa/dependabot/pip/pytest-7.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@686eb5b",
          "timestamp": "2023-03-06T15:33:03Z",
          "tree_id": "5d3f7ca01084ffe8711748d0a965ccbcfa87ab0b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d75e4d76dc70a78f4fd63e1526b8e43f0b762ba9"
        },
        "date": 1678118882780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.19744621850987,
            "unit": "iter/sec",
            "range": "stddev: 0.000028081571728177",
            "extra": "mean: 2.4319217183771156 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 859.7442193929545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001590031462512059",
            "extra": "mean: 1.163136636971025 msec\nrounds: 898"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2263.924427647023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000088931503667585",
            "extra": "mean: 441.71085738905845 usec\nrounds: 2321"
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
          "id": "dd120083e3d9944b0549a44ab6bbaa59d4f4d490",
          "message": "Merge pull request #939 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-6.1.3\n\n⬆️ Bump sphinx from 5.3.0 to 6.1.3 in /{{cookiecutter.project_slug}}/docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@33622d4",
          "timestamp": "2023-03-07T05:24:15Z",
          "tree_id": "1a3298588bc1294be88fcd45437492b22849821b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dd120083e3d9944b0549a44ab6bbaa59d4f4d490"
        },
        "date": 1678166822426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.079854713628,
            "unit": "iter/sec",
            "range": "stddev: 0.000023173931652730453",
            "extra": "mean: 2.4208394299287743 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 923.1639894597364,
            "unit": "iter/sec",
            "range": "stddev: 0.000022388269338031956",
            "extra": "mean: 1.0832311608961593 msec\nrounds: 982"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2626.3379188310905,
            "unit": "iter/sec",
            "range": "stddev: 0.000007198670008287633",
            "extra": "mean: 380.7583147735505 usec\nrounds: 2694"
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
          "id": "1ba2f26815b404e170a44be9fb32c7a5961fb4c4",
          "message": "Merge pull request #932 from TeoZosa/dependabot/pip/docs/sphinx-6.1.3\n\n⬆️ Bump sphinx from 5.3.0 to 6.1.3 in /docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4b3de47",
          "timestamp": "2023-03-07T05:42:42Z",
          "tree_id": "08447a37d5305732e9e6a6a900f1989bae57c075",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1ba2f26815b404e170a44be9fb32c7a5961fb4c4"
        },
        "date": 1678168518986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.286329411852,
            "unit": "iter/sec",
            "range": "stddev: 0.000025932311106786073",
            "extra": "mean: 2.4254988066826084 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 917.2748330927969,
            "unit": "iter/sec",
            "range": "stddev: 0.00002134326058675934",
            "extra": "mean: 1.0901858024691211 msec\nrounds: 972"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2621.495204648659,
            "unit": "iter/sec",
            "range": "stddev: 0.000007823073791644949",
            "extra": "mean: 381.4616933979947 usec\nrounds: 2681"
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
          "id": "be0858ad805b32de50def59e77bb39a9dd592783",
          "message": "Merge pull request #1015 from TeoZosa/dependabot/pip/tox-4.4.6\n\nBump tox from 3.28.0 to 4.4.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@77cb924",
          "timestamp": "2023-03-07T05:44:13Z",
          "tree_id": "08447a37d5305732e9e6a6a900f1989bae57c075",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/be0858ad805b32de50def59e77bb39a9dd592783"
        },
        "date": 1678168973482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.78969945553183,
            "unit": "iter/sec",
            "range": "stddev: 0.000025576874332789353",
            "extra": "mean: 2.4402760765550053 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 908.7717826550903,
            "unit": "iter/sec",
            "range": "stddev: 0.000022605407594766953",
            "extra": "mean: 1.10038627858622 msec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2622.143564404227,
            "unit": "iter/sec",
            "range": "stddev: 0.000007131293827221986",
            "extra": "mean: 381.3673719376263 usec\nrounds: 2694"
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
          "id": "680e9a432cfaab7f7056a77d73cd48554787e435",
          "message": "Merge pull request #1024 from TeoZosa/dependabot/pip/myst-parser-1.0.0\n\nBump myst-parser from 0.19.1 to 1.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@34a64d6",
          "timestamp": "2023-03-11T03:43:30Z",
          "tree_id": "ddfb038b79580fd06be1f018d05c1a0a22292669",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/680e9a432cfaab7f7056a77d73cd48554787e435"
        },
        "date": 1678508082851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.72822797996747,
            "unit": "iter/sec",
            "range": "stddev: 0.0003219931982561458",
            "extra": "mean: 3.416137920489287 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 627.2922873094017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793012106983445",
            "extra": "mean: 1.5941531886024392 msec\nrounds: 737"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1584.8279587305415,
            "unit": "iter/sec",
            "range": "stddev: 0.00019596666321636323",
            "extra": "mean: 630.983315565058 usec\nrounds: 1876"
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
          "id": "81dcb3798ee8fb61c37306ff1d1f2e0f67a71a0f",
          "message": "Merge pull request #1023 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/myst-parser-1.0.0\n\nBump myst-parser from 0.19.1 to 1.0.0 in /{{cookiecutter.project_slug}}/docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aa3564c",
          "timestamp": "2023-03-11T03:47:01Z",
          "tree_id": "ddfb038b79580fd06be1f018d05c1a0a22292669",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/81dcb3798ee8fb61c37306ff1d1f2e0f67a71a0f"
        },
        "date": 1678508963093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9108900096665,
            "unit": "iter/sec",
            "range": "stddev: 0.000024733178122377828",
            "extra": "mean: 2.42770954653938 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 864.7133942768484,
            "unit": "iter/sec",
            "range": "stddev: 0.000018784541639256617",
            "extra": "mean: 1.1564525386313584 msec\nrounds: 906"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2280.8624315789843,
            "unit": "iter/sec",
            "range": "stddev: 0.000008283242426821924",
            "extra": "mean: 438.4306506849362 usec\nrounds: 2336"
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
          "id": "ef872382ebc701d85624641c9b350e179eabdafe",
          "message": "Merge pull request #1022 from TeoZosa/dependabot/pip/docs/myst-parser-1.0.0\n\nBump myst-parser from 0.19.1 to 1.0.0 in /docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d389ddd",
          "timestamp": "2023-03-11T04:53:57Z",
          "tree_id": "35601bee508a4cdc65db47672c2f96367352de35",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ef872382ebc701d85624641c9b350e179eabdafe"
        },
        "date": 1678512066301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.41912765972387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005499544340595119",
            "extra": "mean: 3.4314837465564443 msec\nrounds: 363"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 619.4109790457005,
            "unit": "iter/sec",
            "range": "stddev: 0.00039265757024892667",
            "extra": "mean: 1.614436995515734 msec\nrounds: 892"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1572.8188454961257,
            "unit": "iter/sec",
            "range": "stddev: 0.00031581282748847456",
            "extra": "mean: 635.8011304757497 usec\nrounds: 2123"
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
          "id": "c181313f803e2190578e17e4f1444f69abed4b35",
          "message": "Merge pull request #1013 from TeoZosa/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3f4d4a4",
          "timestamp": "2023-03-11T04:55:23Z",
          "tree_id": "35601bee508a4cdc65db47672c2f96367352de35",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c181313f803e2190578e17e4f1444f69abed4b35"
        },
        "date": 1678512215303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.31478228372737,
            "unit": "iter/sec",
            "range": "stddev: 0.000030402949238974897",
            "extra": "mean: 2.4371532374100844 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.7287605114448,
            "unit": "iter/sec",
            "range": "stddev: 0.00002250068841380165",
            "extra": "mean: 1.0944166838310598 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2601.225834992641,
            "unit": "iter/sec",
            "range": "stddev: 0.000007977279505625672",
            "extra": "mean: 384.43413353336507 usec\nrounds: 2666"
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
          "id": "a49d4874b6aefa0d2035e8ec48e6b63c49ffb22b",
          "message": "Merge pull request #1021 from TeoZosa/dependabot/pip/mypy-1.1.1\n\nBump mypy from 0.991 to 1.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f1b3f45",
          "timestamp": "2023-03-12T12:25:13Z",
          "tree_id": "cf627e30819a15fb65e56fd98a6e09816e18b7f9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a49d4874b6aefa0d2035e8ec48e6b63c49ffb22b"
        },
        "date": 1678624057394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.655738431396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000232068391398364",
            "extra": "mean: 2.4351297362110516 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.102486291442,
            "unit": "iter/sec",
            "range": "stddev: 0.000018582005777136388",
            "extra": "mean: 1.173567752808989 msec\nrounds: 890"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2270.2714375050105,
            "unit": "iter/sec",
            "range": "stddev: 0.000008607556105504206",
            "extra": "mean: 440.47596401026965 usec\nrounds: 2334"
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
          "id": "67533348a91efa2b0a0a3c8a90e208ecc7acf214",
          "message": "Merge pull request #1025 from TeoZosa/dependabot/pip/tox-4.4.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@65d7f6d",
          "timestamp": "2023-03-13T15:09:32Z",
          "tree_id": "4cdc0a4160f556e8125ddb44041bdf5d2bb6a638",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/67533348a91efa2b0a0a3c8a90e208ecc7acf214"
        },
        "date": 1678722135639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 332.61260950511877,
            "unit": "iter/sec",
            "range": "stddev: 0.00040172415831151413",
            "extra": "mean: 3.006500569800588 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 674.6267887275927,
            "unit": "iter/sec",
            "range": "stddev: 0.0004038748958234787",
            "extra": "mean: 1.4823010540184607 msec\nrounds: 759"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1867.6044997176125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000622830346226028",
            "extra": "mean: 535.4452723535434 usec\nrounds: 1946"
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
          "id": "0137c4e5dd8b3620acdfcd9e41a00e56620ad107",
          "message": "Merge pull request #1027 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-gh-actions-3.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e849b3a",
          "timestamp": "2023-03-13T15:26:16Z",
          "tree_id": "4cdc0a4160f556e8125ddb44041bdf5d2bb6a638",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0137c4e5dd8b3620acdfcd9e41a00e56620ad107"
        },
        "date": 1678723820829,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.78318608537677,
            "unit": "iter/sec",
            "range": "stddev: 0.000024365125364446517",
            "extra": "mean: 2.434374224343644 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 917.6083771803916,
            "unit": "iter/sec",
            "range": "stddev: 0.000025125640572236857",
            "extra": "mean: 1.089789527720725 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2610.7422301194947,
            "unit": "iter/sec",
            "range": "stddev: 0.000009099230048500395",
            "extra": "mean: 383.03283582088056 usec\nrounds: 2680"
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
          "id": "fbf6c45c60f40507a9bdc8a750b6c5db1f1f05d1",
          "message": "Merge pull request #1028 from TeoZosa/dependabot/pip/pytest-xdist-3.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0d7532d",
          "timestamp": "2023-03-13T16:04:22Z",
          "tree_id": "199a82b6c540485ae26331b02c75b33f169eddda",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fbf6c45c60f40507a9bdc8a750b6c5db1f1f05d1"
        },
        "date": 1678724309675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 352.07940125608906,
            "unit": "iter/sec",
            "range": "stddev: 0.00004984277447284007",
            "extra": "mean: 2.8402684065934274 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 734.0211524617266,
            "unit": "iter/sec",
            "range": "stddev: 0.000037498194683780496",
            "extra": "mean: 1.3623585596222203 msec\nrounds: 847"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1946.6229524616467,
            "unit": "iter/sec",
            "range": "stddev: 0.00001837587803901691",
            "extra": "mean: 513.7101659750939 usec\nrounds: 2410"
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
          "id": "064cbb4e3395f5905c0143ea57c72f156cc2dfd0",
          "message": "Merge pull request #1026 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ae807dc",
          "timestamp": "2023-03-13T16:16:45Z",
          "tree_id": "af0918165e4edfbe0e79719067d65ebf8a430567",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/064cbb4e3395f5905c0143ea57c72f156cc2dfd0"
        },
        "date": 1678725015267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.31844634930104,
            "unit": "iter/sec",
            "range": "stddev: 0.00002731483484996517",
            "extra": "mean: 2.8627174157303155 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 733.7831067077325,
            "unit": "iter/sec",
            "range": "stddev: 0.000018327029923149434",
            "extra": "mean: 1.3628005208333345 msec\nrounds: 768"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1915.9901658832375,
            "unit": "iter/sec",
            "range": "stddev: 0.000012134593335109781",
            "extra": "mean: 521.9233468972518 usec\nrounds: 1966"
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
          "id": "b738a75c5cde29b4d63c233622ca8a2b9fa55b27",
          "message": "Merge pull request #1014 from TeoZosa/dependabot/pip/pre-commit-3.1.1\n\nBump pre-commit from 2.21.0 to 3.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b2e1d4a",
          "timestamp": "2023-03-15T08:00:06Z",
          "tree_id": "e6f81767157cadc21286d6657d9a2c8b71899da0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b738a75c5cde29b4d63c233622ca8a2b9fa55b27"
        },
        "date": 1678867393717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 315.0251503685626,
            "unit": "iter/sec",
            "range": "stddev: 0.000544674156394224",
            "extra": "mean: 3.174349726775952 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 635.647138312682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003909688000239021",
            "extra": "mean: 1.5731998773006173 msec\nrounds: 815"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1643.3530950362172,
            "unit": "iter/sec",
            "range": "stddev: 0.0002651594404421379",
            "extra": "mean: 608.511952191237 usec\nrounds: 2008"
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
          "id": "ad9354750f087629e1cffc3cb9fb8d42d44fbee6",
          "message": "Merge pull request #1012 from TeoZosa/dependabot/pip/emoji-2.2.0\n\nBump emoji from 1.7.0 to 2.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c340781",
          "timestamp": "2023-03-18T02:22:15Z",
          "tree_id": "c63a77e879cda58678dd102d2f16b1e4210b7e65",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ad9354750f087629e1cffc3cb9fb8d42d44fbee6"
        },
        "date": 1679106326671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.0380241861502,
            "unit": "iter/sec",
            "range": "stddev: 0.000277256848673969",
            "extra": "mean: 3.400920689655151 msec\nrounds: 319"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 609.2020311638653,
            "unit": "iter/sec",
            "range": "stddev: 0.00016339741354306497",
            "extra": "mean: 1.6414915723270405 msec\nrounds: 795"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1525.4201264752096,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899366688725875",
            "extra": "mean: 655.5571036752356 usec\nrounds: 1823"
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
          "id": "6a438668ce9400f71d7b710ed51d5dc010c70854",
          "message": "Merge pull request #1009 from TeoZosa/dependabot/pip/types-emoji-2.1.0.2\n\nBump types-emoji from 1.7.1 to 2.1.0.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@31e6a2b",
          "timestamp": "2023-03-18T02:51:40Z",
          "tree_id": "3c5f6204837013ee4ccd4061b495436beb1d5518",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6a438668ce9400f71d7b710ed51d5dc010c70854"
        },
        "date": 1679108093861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.69754079051984,
            "unit": "iter/sec",
            "range": "stddev: 0.000025030016678765715",
            "extra": "mean: 2.44082499999995 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.9056209253581,
            "unit": "iter/sec",
            "range": "stddev: 0.000017915234594682358",
            "extra": "mean: 1.1724626681613988 msec\nrounds: 892"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2248.913747388638,
            "unit": "iter/sec",
            "range": "stddev: 0.000008706779381120628",
            "extra": "mean: 444.65911650065095 usec\nrounds: 2309"
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
          "id": "990d9630027c17666ab5699e446b3d994d13721c",
          "message": "Merge pull request #1030 from TeoZosa/dependabot/pip/hypothesis-6.70.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b5583d4",
          "timestamp": "2023-03-18T03:27:32Z",
          "tree_id": "62846463f15d4e0a1f0874b32239de0ac3d3320e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/990d9630027c17666ab5699e446b3d994d13721c"
        },
        "date": 1679110204637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.21064240622536,
            "unit": "iter/sec",
            "range": "stddev: 0.000029598636927921714",
            "extra": "mean: 2.4318436754176305 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.5695467283899,
            "unit": "iter/sec",
            "range": "stddev: 0.00002354008440573848",
            "extra": "mean: 1.0946074150360294 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2615.80714638127,
            "unit": "iter/sec",
            "range": "stddev: 0.000008003771471398326",
            "extra": "mean: 382.2911797543671 usec\nrounds: 2687"
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
          "id": "1a148c50b83135ee0b7ff404eea53b2d8a689b79",
          "message": "Merge pull request #1032 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@841c12a",
          "timestamp": "2023-03-20T14:27:20Z",
          "tree_id": "97436235f2a2c3f6ab98c42fe2209ec9577b5369",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1a148c50b83135ee0b7ff404eea53b2d8a689b79"
        },
        "date": 1679326141606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 342.14561366399056,
            "unit": "iter/sec",
            "range": "stddev: 0.00004639764175690057",
            "extra": "mean: 2.9227321937321857 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 723.4318950604799,
            "unit": "iter/sec",
            "range": "stddev: 0.000022744016600492486",
            "extra": "mean: 1.382300126422265 msec\nrounds: 791"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1889.8806293243858,
            "unit": "iter/sec",
            "range": "stddev: 0.000012430847869525819",
            "extra": "mean: 529.1339487179623 usec\nrounds: 1950"
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
          "distinct": false,
          "id": "eeed1e97249a5e914edd5d728568d12b73fb9e94",
          "message": "Merge pull request #1038 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-6.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@00ca30c",
          "timestamp": "2023-03-20T15:12:24Z",
          "tree_id": "72cbda46abfd9965f02a33f25885a143aee58b91",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/eeed1e97249a5e914edd5d728568d12b73fb9e94"
        },
        "date": 1679327785984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 348.8752253071962,
            "unit": "iter/sec",
            "range": "stddev: 0.000030637145022427625",
            "extra": "mean: 2.866354293628809 msec\nrounds: 361"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 732.1786395372362,
            "unit": "iter/sec",
            "range": "stddev: 0.000021670546830100807",
            "extra": "mean: 1.3657869077306555 msec\nrounds: 802"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1923.3907257645776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001083194291551819",
            "extra": "mean: 519.915161596968 usec\nrounds: 2104"
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
          "id": "e541253399f04601203caaf3d2e2b61268cfebfd",
          "message": "Merge pull request #1040 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.20.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e6bce38",
          "timestamp": "2023-03-20T15:23:38Z",
          "tree_id": "72cbda46abfd9965f02a33f25885a143aee58b91",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e541253399f04601203caaf3d2e2b61268cfebfd"
        },
        "date": 1679328262551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.3294866009203,
            "unit": "iter/sec",
            "range": "stddev: 0.000028108697675645076",
            "extra": "mean: 2.4311410501193147 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 919.053969590313,
            "unit": "iter/sec",
            "range": "stddev: 0.000023045848246537928",
            "extra": "mean: 1.0880753830439036 msec\nrounds: 979"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2608.1389588261372,
            "unit": "iter/sec",
            "range": "stddev: 0.000007655879977597648",
            "extra": "mean: 383.41515378846105 usec\nrounds: 2666"
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
          "id": "67cae982c98dbf19e9029b7c9656a4b0fdfd0b05",
          "message": "Merge pull request #1036 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cb44e2c",
          "timestamp": "2023-03-20T15:36:05Z",
          "tree_id": "72cbda46abfd9965f02a33f25885a143aee58b91",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/67cae982c98dbf19e9029b7c9656a4b0fdfd0b05"
        },
        "date": 1679328616120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.5148630384267,
            "unit": "iter/sec",
            "range": "stddev: 0.000028049189883717713",
            "extra": "mean: 2.4359653937947523 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 918.3198615121014,
            "unit": "iter/sec",
            "range": "stddev: 0.000024258736724840104",
            "extra": "mean: 1.088945194274035 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2604.550917412911,
            "unit": "iter/sec",
            "range": "stddev: 0.000007732447753535852",
            "extra": "mean: 383.9433482810524 usec\nrounds: 2676"
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
          "id": "60c0bd7d393ee86b8d5d9b8f85730128eb2630e3",
          "message": "Merge pull request #1041 from TeoZosa/dependabot/pip/poetry-1.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@53cdf60",
          "timestamp": "2023-03-20T15:48:23Z",
          "tree_id": "ab48a9df32843d1b5d99b067af7e1759ead201b0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/60c0bd7d393ee86b8d5d9b8f85730128eb2630e3"
        },
        "date": 1679329894022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.40315048202064,
            "unit": "iter/sec",
            "range": "stddev: 0.000028052727256396887",
            "extra": "mean: 2.4307057416267956 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.162719418754,
            "unit": "iter/sec",
            "range": "stddev: 0.000021634920146765805",
            "extra": "mean: 1.0927018537589999 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2599.426101994737,
            "unit": "iter/sec",
            "range": "stddev: 0.000008399369509070616",
            "extra": "mean: 384.7002995132749 usec\nrounds: 2671"
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
          "id": "9cb81ab179925d49a437b035aa5f703c2ff479a0",
          "message": "Merge pull request #1033 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@97c7dec",
          "timestamp": "2023-03-20T16:08:37Z",
          "tree_id": "ab48a9df32843d1b5d99b067af7e1759ead201b0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9cb81ab179925d49a437b035aa5f703c2ff479a0"
        },
        "date": 1679330283621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.6211350112723,
            "unit": "iter/sec",
            "range": "stddev: 0.0001864068640829659",
            "extra": "mean: 3.2402187878787863 msec\nrounds: 330"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 654.7148320389102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001511016498265321",
            "extra": "mean: 1.5273825352112524 msec\nrounds: 710"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1646.2606875643855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002086027971572171",
            "extra": "mean: 607.4372106154602 usec\nrounds: 1771"
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
          "id": "8522c8981302f231860b291865c0f46330c168eb",
          "message": "Merge pull request #1043 from TeoZosa/dependabot/pip/importlib-metadata-6.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@54b2095",
          "timestamp": "2023-03-20T16:23:42Z",
          "tree_id": "94f99836f95e4be5b043b3a816fa9ea12025ef2a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8522c8981302f231860b291865c0f46330c168eb"
        },
        "date": 1679330702340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.2411098886746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003146919187174104",
            "extra": "mean: 2.4375909090909142 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 838.6958898084911,
            "unit": "iter/sec",
            "range": "stddev: 0.00006508968207221259",
            "extra": "mean: 1.1923272930648812 msec\nrounds: 894"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2267.474165846368,
            "unit": "iter/sec",
            "range": "stddev: 0.000009084663787120901",
            "extra": "mean: 441.019357601693 usec\nrounds: 2335"
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
          "id": "2b9f9e2714a2cab4c25fa88647bf40db5e815ad9",
          "message": "Merge pull request #1031 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e73076e",
          "timestamp": "2023-03-20T16:38:02Z",
          "tree_id": "94f99836f95e4be5b043b3a816fa9ea12025ef2a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2b9f9e2714a2cab4c25fa88647bf40db5e815ad9"
        },
        "date": 1679331053420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.3614901855339,
            "unit": "iter/sec",
            "range": "stddev: 0.000030454724265890792",
            "extra": "mean: 2.4368758373205948 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 856.6520319556665,
            "unit": "iter/sec",
            "range": "stddev: 0.000017092058509048414",
            "extra": "mean: 1.1673351170569009 msec\nrounds: 897"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2247.3506410667164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001034357814095486",
            "extra": "mean: 444.9683915480786 usec\nrounds: 2319"
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
          "id": "8abb83a11647d7eed9c66080dcb0de0083ded037",
          "message": "Merge pull request #1042 from TeoZosa/dependabot/pip/pre-commit-3.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@28cd7d9",
          "timestamp": "2023-03-20T16:47:27Z",
          "tree_id": "c0c9377f26e72a8fdb63876fb01e2e761a573348",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8abb83a11647d7eed9c66080dcb0de0083ded037"
        },
        "date": 1679331459937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.9700041550746,
            "unit": "iter/sec",
            "range": "stddev: 0.00007364956204227387",
            "extra": "mean: 2.9328093023255963 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 718.0847745742395,
            "unit": "iter/sec",
            "range": "stddev: 0.000027665537397639735",
            "extra": "mean: 1.3925932360742659 msec\nrounds: 754"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1890.211173304363,
            "unit": "iter/sec",
            "range": "stddev: 0.000013419092059967108",
            "extra": "mean: 529.0414182939439 usec\nrounds: 1946"
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
          "id": "3165d3dcef90d64d06d9e62683c9372ffd8d82e0",
          "message": "Merge pull request #1037 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-1d2b710\n\nBump python from `64eb366` to `1d2b710` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@faffd38",
          "timestamp": "2023-03-21T00:56:32Z",
          "tree_id": "3c953347942a864f0a7560b8d5c41b3c30a9ed0c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3165d3dcef90d64d06d9e62683c9372ffd8d82e0"
        },
        "date": 1679360333677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.8653714529624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003188383733404648",
            "extra": "mean: 2.439825536992855 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 920.5243682525592,
            "unit": "iter/sec",
            "range": "stddev: 0.000022389084991673017",
            "extra": "mean: 1.0863373469387998 msec\nrounds: 980"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2597.6268260395195,
            "unit": "iter/sec",
            "range": "stddev: 0.000011801394382389452",
            "extra": "mean: 384.96676657926776 usec\nrounds: 2669"
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
          "id": "a568a9d9adc720fe1a1e1ff89c8a4d1e03a4f456",
          "message": "Merge pull request #1045 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0f9214d",
          "timestamp": "2023-03-28T14:10:23Z",
          "tree_id": "6030396eeda950f7b67ba538befb70c66bae0b93",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a568a9d9adc720fe1a1e1ff89c8a4d1e03a4f456"
        },
        "date": 1680014244332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.8022206921236,
            "unit": "iter/sec",
            "range": "stddev: 0.00020472895534155572",
            "extra": "mean: 3.415274643874653 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 622.8699722592295,
            "unit": "iter/sec",
            "range": "stddev: 0.00017853877611663882",
            "extra": "mean: 1.6054715181932298 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1611.7565815159523,
            "unit": "iter/sec",
            "range": "stddev: 0.00008597270705648516",
            "extra": "mean: 620.4410836402113 usec\nrounds: 1901"
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
          "id": "abf833ca6359aa6b6f994d9e378a3522d6dccd1a",
          "message": "Merge pull request #1046 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef02abc",
          "timestamp": "2023-03-28T14:19:42Z",
          "tree_id": "0f1ca16c8100c521fc63cf66a3f2f7f0853bb216",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/abf833ca6359aa6b6f994d9e378a3522d6dccd1a"
        },
        "date": 1680016119063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.8714298041217,
            "unit": "iter/sec",
            "range": "stddev: 0.000039964013598952035",
            "extra": "mean: 2.4397894736842276 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 918.6984606187722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000230803365286747",
            "extra": "mean: 1.088496435845194 msec\nrounds: 982"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2597.12409970166,
            "unit": "iter/sec",
            "range": "stddev: 0.000007704685875763127",
            "extra": "mean: 385.04128474833885 usec\nrounds: 2662"
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
          "id": "cac6848f22c336813a0f94b6fb0ed24d42568f5e",
          "message": "Merge pull request #1048 from TeoZosa/dependabot/pip/hypothesis-6.70.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e858a90",
          "timestamp": "2023-03-28T14:42:13Z",
          "tree_id": "0f1ca16c8100c521fc63cf66a3f2f7f0853bb216",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cac6848f22c336813a0f94b6fb0ed24d42568f5e"
        },
        "date": 1680016707103,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.68495596157294,
            "unit": "iter/sec",
            "range": "stddev: 0.00031459079517835237",
            "extra": "mean: 3.488149549549574 msec\nrounds: 333"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 620.8400400007711,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989215038343988",
            "extra": "mean: 1.6107208549222405 msec\nrounds: 772"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1594.3762596882632,
            "unit": "iter/sec",
            "range": "stddev: 0.00010420502585764022",
            "extra": "mean: 627.2045220966365 usec\nrounds: 1946"
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
          "id": "f92c73934865b5c2b1aa30948de5ca505944a7b2",
          "message": "Merge pull request #1049 from TeoZosa/dependabot/pip/pre-commit-3.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@03fb1fe",
          "timestamp": "2023-03-28T15:21:16Z",
          "tree_id": "e0bda29c923b2e1d524b78434c45087ee2e0e650",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f92c73934865b5c2b1aa30948de5ca505944a7b2"
        },
        "date": 1680018289694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.70412369266654,
            "unit": "iter/sec",
            "range": "stddev: 0.0008764542239897547",
            "extra": "mean: 3.4757930722891808 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 634.4145262749888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004783922665624032",
            "extra": "mean: 1.5762564673157358 msec\nrounds: 719"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1578.181187574805,
            "unit": "iter/sec",
            "range": "stddev: 0.0002275044094216766",
            "extra": "mean: 633.6408061844295 usec\nrounds: 1811"
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
          "id": "ac9a4c49fc14a5add89e2b1f73153886f17f9ed7",
          "message": "Merge pull request #1047 from TeoZosa/dependabot/pip/tox-4.4.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@611a6ef",
          "timestamp": "2023-03-28T15:44:55Z",
          "tree_id": "70c1158a8bf359f6dd25101ecda9546fa9d4f828",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ac9a4c49fc14a5add89e2b1f73153886f17f9ed7"
        },
        "date": 1680018940053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.60148798468026,
            "unit": "iter/sec",
            "range": "stddev: 0.00003499667038777995",
            "extra": "mean: 2.4413973809523895 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 910.0552732957373,
            "unit": "iter/sec",
            "range": "stddev: 0.00009785550083485459",
            "extra": "mean: 1.0988343558282243 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2586.110035048969,
            "unit": "iter/sec",
            "range": "stddev: 0.000008622967724818351",
            "extra": "mean: 386.6811490799789 usec\nrounds: 2663"
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
          "id": "f741e9e273db3895f77a9d49b37953e5b173a138",
          "message": "Merge pull request #1051 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-2.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@578e22f",
          "timestamp": "2023-03-29T14:04:58Z",
          "tree_id": "9af58b72e2023ba92711dc6d6f30be09149805a0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f741e9e273db3895f77a9d49b37953e5b173a138"
        },
        "date": 1680100396872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.60306025546106,
            "unit": "iter/sec",
            "range": "stddev: 0.000034497299923885754",
            "extra": "mean: 2.441388009592312 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.2243862627073,
            "unit": "iter/sec",
            "range": "stddev: 0.000024075977774563232",
            "extra": "mean: 1.0962215163934619 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2608.8764987713594,
            "unit": "iter/sec",
            "range": "stddev: 0.000008191404005051842",
            "extra": "mean: 383.30676077267213 usec\nrounds: 2692"
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
          "id": "d7b68cc66fec0a4bf32a9fdab43e20d5b54da7ce",
          "message": "Merge pull request #1053 from TeoZosa/dependabot/pip/black-23.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6c617ed",
          "timestamp": "2023-03-29T14:37:44Z",
          "tree_id": "0f5fc5710d93473fc3483f85e826e320d7a29219",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d7b68cc66fec0a4bf32a9fdab43e20d5b54da7ce"
        },
        "date": 1680101787405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 405.7418548792685,
            "unit": "iter/sec",
            "range": "stddev: 0.000040509329716261395",
            "extra": "mean: 2.4646212560386638 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.2947677186916,
            "unit": "iter/sec",
            "range": "stddev: 0.000017542255524429394",
            "extra": "mean: 1.171927964205768 msec\nrounds: 894"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2244.082223172793,
            "unit": "iter/sec",
            "range": "stddev: 0.000008737994314700396",
            "extra": "mean: 445.6164705882083 usec\nrounds: 2295"
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
          "id": "96167c01fb92f61178096d4a152ace3cbd827338",
          "message": "Merge pull request #1054 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-autoapi-2.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1567cd7",
          "timestamp": "2023-03-29T14:39:26Z",
          "tree_id": "0f5fc5710d93473fc3483f85e826e320d7a29219",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/96167c01fb92f61178096d4a152ace3cbd827338"
        },
        "date": 1680102784246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.16148689823365,
            "unit": "iter/sec",
            "range": "stddev: 0.00038771576203781296",
            "extra": "mean: 2.983636363636356 msec\nrounds: 374"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 709.1630431499253,
            "unit": "iter/sec",
            "range": "stddev: 0.000103834711965776",
            "extra": "mean: 1.4101129629630014 msec\nrounds: 810"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1852.9097177029646,
            "unit": "iter/sec",
            "range": "stddev: 0.00005260519221438964",
            "extra": "mean: 539.6917024320488 usec\nrounds: 2097"
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
          "id": "6860abccb67b657ae6f7ac54f72ee1e5796d84c4",
          "message": "Merge pull request #1050 from TeoZosa/dependabot/pip/types-emoji-2.1.0.3\n\nBump types-emoji from 2.1.0.2 to 2.1.0.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@068f323",
          "timestamp": "2023-04-02T03:10:43Z",
          "tree_id": "9990d238c91d4f8b5b978220d34098c8e26a14e0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6860abccb67b657ae6f7ac54f72ee1e5796d84c4"
        },
        "date": 1680405217843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.5641327833367,
            "unit": "iter/sec",
            "range": "stddev: 0.00003234180307487316",
            "extra": "mean: 2.447596153846193 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 861.5808660580517,
            "unit": "iter/sec",
            "range": "stddev: 0.000017093425842385084",
            "extra": "mean: 1.1606571587125076 msec\nrounds: 901"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2225.9728384470186,
            "unit": "iter/sec",
            "range": "stddev: 0.000009261281133511105",
            "extra": "mean: 449.2417799211172 usec\nrounds: 2281"
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
          "id": "2bef9ab23e76ad9e34a63cc102799f4d9cb8e055",
          "message": "Merge pull request #1044 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-9ab472f\n\nBump python from `1d2b710` to `9ab472f` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@16672ff",
          "timestamp": "2023-04-02T03:13:09Z",
          "tree_id": "9990d238c91d4f8b5b978220d34098c8e26a14e0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2bef9ab23e76ad9e34a63cc102799f4d9cb8e055"
        },
        "date": 1680405484606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.49328102494167,
            "unit": "iter/sec",
            "range": "stddev: 0.00003557805734717799",
            "extra": "mean: 2.454028192771091 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.3662003411549,
            "unit": "iter/sec",
            "range": "stddev: 0.000017003372716713812",
            "extra": "mean: 1.1718298657718393 msec\nrounds: 894"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2254.4318510647636,
            "unit": "iter/sec",
            "range": "stddev: 0.000009935900261494467",
            "extra": "mean: 443.570738023286 usec\nrounds: 2317"
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
          "id": "75a75870fd473daca696e01ae92aeaa084120e85",
          "message": "Merge pull request #1055 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8ed3e15",
          "timestamp": "2023-04-03T14:32:55Z",
          "tree_id": "38287e46b43b49d18d8b773143afb6ad631618c6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/75a75870fd473daca696e01ae92aeaa084120e85"
        },
        "date": 1680534146456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.07151201133735,
            "unit": "iter/sec",
            "range": "stddev: 0.000026502378424706713",
            "extra": "mean: 2.426763245823426 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 862.5091754774678,
            "unit": "iter/sec",
            "range": "stddev: 0.00001798884741516965",
            "extra": "mean: 1.1594079558010733 msec\nrounds: 905"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2260.9966188399185,
            "unit": "iter/sec",
            "range": "stddev: 0.000008559864734132057",
            "extra": "mean: 442.2828374299313 usec\nrounds: 2319"
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
          "id": "379c37e58ceeb29665ffdc4c05d40c5444c3b1c0",
          "message": "Merge pull request #1059 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.21.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@51917a5",
          "timestamp": "2023-04-03T14:34:33Z",
          "tree_id": "38287e46b43b49d18d8b773143afb6ad631618c6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/379c37e58ceeb29665ffdc4c05d40c5444c3b1c0"
        },
        "date": 1680534829003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 320.5303211434271,
            "unit": "iter/sec",
            "range": "stddev: 0.0002687664405849803",
            "extra": "mean: 3.1198296511628048 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 680.9133562531199,
            "unit": "iter/sec",
            "range": "stddev: 0.00012387858710716422",
            "extra": "mean: 1.4686156334232106 msec\nrounds: 742"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1733.6634746611226,
            "unit": "iter/sec",
            "range": "stddev: 0.00018848725989887755",
            "extra": "mean: 576.813213530653 usec\nrounds: 1892"
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
          "id": "af6b0d633a2784a01fcf8816a8ce35c2892e608f",
          "message": "Merge pull request #1061 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e4d2175",
          "timestamp": "2023-04-03T15:08:17Z",
          "tree_id": "a8967ae7598ba5f44fb317dcaf04ec3985f736d2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af6b0d633a2784a01fcf8816a8ce35c2892e608f"
        },
        "date": 1680536096793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.41419639892865,
            "unit": "iter/sec",
            "range": "stddev: 0.000031934064916406583",
            "extra": "mean: 2.4484947115384434 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.6453536448918,
            "unit": "iter/sec",
            "range": "stddev: 0.000017057846106156603",
            "extra": "mean: 1.1728205586592315 msec\nrounds: 895"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2251.591771973406,
            "unit": "iter/sec",
            "range": "stddev: 0.000009338897709619365",
            "extra": "mean: 444.1302426343256 usec\nrounds: 2308"
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
          "id": "8ad4e6dfb4fa42eae2a10c712c5c5d1f8c94f726",
          "message": "Merge pull request #1062 from TeoZosa/dependabot/pip/hypothesis-6.70.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f354ee5",
          "timestamp": "2023-04-03T15:11:24Z",
          "tree_id": "09d9a88d895fdc3b8871a7cb86df4c23e4301fb1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8ad4e6dfb4fa42eae2a10c712c5c5d1f8c94f726"
        },
        "date": 1680536446319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.92530413852364,
            "unit": "iter/sec",
            "range": "stddev: 0.000022136552542571684",
            "extra": "mean: 2.439468824940058 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 861.8659588687909,
            "unit": "iter/sec",
            "range": "stddev: 0.00001787418971570102",
            "extra": "mean: 1.1602732300884835 msec\nrounds: 904"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2251.1138435317644,
            "unit": "iter/sec",
            "range": "stddev: 0.000008471704338828556",
            "extra": "mean: 444.22453483343327 usec\nrounds: 2311"
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
          "id": "7a5e2f414e17accd691bc7f4e11c6cffb1c0bc80",
          "message": "Merge pull request #1058 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a51cc9f",
          "timestamp": "2023-04-03T15:28:56Z",
          "tree_id": "09d9a88d895fdc3b8871a7cb86df4c23e4301fb1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7a5e2f414e17accd691bc7f4e11c6cffb1c0bc80"
        },
        "date": 1680537158140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9024985790839,
            "unit": "iter/sec",
            "range": "stddev: 0.000022166852742943645",
            "extra": "mean: 2.42775900473933 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 920.8995870723884,
            "unit": "iter/sec",
            "range": "stddev: 0.000022524536588473236",
            "extra": "mean: 1.085894720812155 msec\nrounds: 985"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2613.470195956755,
            "unit": "iter/sec",
            "range": "stddev: 0.000007785001216512933",
            "extra": "mean: 382.6330223880414 usec\nrounds: 2680"
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
          "id": "7cfe8935c385141a1fe2ab21687f0a3a7dcef1b1",
          "message": "Merge pull request #1063 from TeoZosa/dependabot/pip/docs/poetry-1.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@23c0da8",
          "timestamp": "2023-04-03T15:57:34Z",
          "tree_id": "503b11f4bba32c1567b72fd36c9dbcc00f4bd3d9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7cfe8935c385141a1fe2ab21687f0a3a7dcef1b1"
        },
        "date": 1680537746742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9321505473408,
            "unit": "iter/sec",
            "range": "stddev: 0.000022642791771981035",
            "extra": "mean: 2.4275842482100125 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 863.3337830462549,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663629197875331",
            "extra": "mean: 1.1583005549389267 msec\nrounds: 901"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2272.4916835694116,
            "unit": "iter/sec",
            "range": "stddev: 0.00001053139515863755",
            "extra": "mean: 440.04561478935585 usec\nrounds: 2326"
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
          "id": "3a3109757c1193a3258c0c2a3ffabfd28d1f4ac9",
          "message": "Merge pull request #1064 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@924eab1",
          "timestamp": "2023-04-04T14:05:23Z",
          "tree_id": "afa4b98a7e3491f056a769ac874f649070cb453c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3a3109757c1193a3258c0c2a3ffabfd28d1f4ac9"
        },
        "date": 1680619011501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.71232058356577,
            "unit": "iter/sec",
            "range": "stddev: 0.000025937934878378873",
            "extra": "mean: 2.4347942583732025 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 859.4661381299196,
            "unit": "iter/sec",
            "range": "stddev: 0.00001995237332125164",
            "extra": "mean: 1.1635129711751795 msec\nrounds: 902"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2269.8422533044827,
            "unit": "iter/sec",
            "range": "stddev: 0.000008654179495019707",
            "extra": "mean: 440.55924967657097 usec\nrounds: 2319"
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
          "id": "197386888a304ba452c0372cd80ef492d0d429af",
          "message": "Merge pull request #1065 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0d64ea3",
          "timestamp": "2023-04-04T14:42:35Z",
          "tree_id": "0f62bd2d3aeab91812febcf94eaf2e8c303af4c7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/197386888a304ba452c0372cd80ef492d0d429af"
        },
        "date": 1680621024932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.3455621619683,
            "unit": "iter/sec",
            "range": "stddev: 0.000029090728665024018",
            "extra": "mean: 2.454918115942015 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 907.0761542171384,
            "unit": "iter/sec",
            "range": "stddev: 0.00002371387329027009",
            "extra": "mean: 1.102443268242522 msec\nrounds: 973"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2597.2277938733428,
            "unit": "iter/sec",
            "range": "stddev: 0.000008662095034844063",
            "extra": "mean: 385.0259119969846 usec\nrounds: 2659"
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
          "id": "e34254fa96e72dcae380f678da465aa19cd02227",
          "message": "Merge pull request #1067 from TeoZosa/dependabot/pip/cruft-2.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@13df1d7",
          "timestamp": "2023-04-04T15:15:39Z",
          "tree_id": "b4be1b5d12a9960577549a49656e9303008413a5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e34254fa96e72dcae380f678da465aa19cd02227"
        },
        "date": 1680622181940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.20957392387857,
            "unit": "iter/sec",
            "range": "stddev: 0.00008291867898159036",
            "extra": "mean: 2.8073361111110913 msec\nrounds: 432"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 729.5421548430472,
            "unit": "iter/sec",
            "range": "stddev: 0.000027528547476024393",
            "extra": "mean: 1.3707227106227176 msec\nrounds: 819"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1981.8720154392752,
            "unit": "iter/sec",
            "range": "stddev: 0.000028476453206445482",
            "extra": "mean: 504.5734498543557 usec\nrounds: 2403"
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
          "id": "abe6c7c7e276b36180146b9ffdd099eebd2f9ddc",
          "message": "Merge pull request #1068 from TeoZosa/dependabot/pip/pre-commit-3.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ed5dd2a",
          "timestamp": "2023-04-04T15:28:43Z",
          "tree_id": "a470c8d0edc273daadf14b8412836f2caabbadfd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/abe6c7c7e276b36180146b9ffdd099eebd2f9ddc"
        },
        "date": 1680622378164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 310.21263327263364,
            "unit": "iter/sec",
            "range": "stddev: 0.0005849982722021265",
            "extra": "mean: 3.223595343137233 msec\nrounds: 408"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 648.3548859008172,
            "unit": "iter/sec",
            "range": "stddev: 0.000300632916938555",
            "extra": "mean: 1.5423651795430073 msec\nrounds: 919"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1720.9917385641695,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248866823687146",
            "extra": "mean: 581.0603139991271 usec\nrounds: 2293"
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
          "id": "fb334cf046910d9a4589685d844e97f474f39ff7",
          "message": "Merge pull request #1066 from TeoZosa/dependabot/pip/structlog-sentry-logger-1.0.0\n\nBump structlog-sentry-logger from 0.21.0 to 1.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0d3c760",
          "timestamp": "2023-04-05T13:36:52Z",
          "tree_id": "a7f896477f172647ad7abca6af422d0fdadcd0dd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fb334cf046910d9a4589685d844e97f474f39ff7"
        },
        "date": 1680702222770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.17319730699944,
            "unit": "iter/sec",
            "range": "stddev: 0.000031852508045200845",
            "extra": "mean: 2.449940384615381 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.876480096242,
            "unit": "iter/sec",
            "range": "stddev: 0.000023049246918462076",
            "extra": "mean: 1.17112957589286 msec\nrounds: 896"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2251.968933384802,
            "unit": "iter/sec",
            "range": "stddev: 0.00000935164252592745",
            "extra": "mean: 444.05585937500433 usec\nrounds: 2304"
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
          "id": "af6ff78fce2542bac5ae1659de587e4efef5656f",
          "message": "Merge pull request #1069 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@18bb106",
          "timestamp": "2023-04-06T14:21:25Z",
          "tree_id": "e1a511a812a2b80f676ef6e21f90afe1b10126b3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af6ff78fce2542bac5ae1659de587e4efef5656f"
        },
        "date": 1680792147754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 403.5947755635898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000347199378148208",
            "extra": "mean: 2.477732766990294 msec\nrounds: 412"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 845.1776387078634,
            "unit": "iter/sec",
            "range": "stddev: 0.000027868514686732708",
            "extra": "mean: 1.1831832199546055 msec\nrounds: 882"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2220.9827294789975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000103999989909555",
            "extra": "mean: 450.25113735782264 usec\nrounds: 2286"
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
          "id": "b757dd4bd387d9dfe402006874b936779f1636db",
          "message": "Merge pull request #1070 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.11.3-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e71e936",
          "timestamp": "2023-04-06T14:23:55Z",
          "tree_id": "e1a511a812a2b80f676ef6e21f90afe1b10126b3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b757dd4bd387d9dfe402006874b936779f1636db"
        },
        "date": 1680792871540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.7751806897399,
            "unit": "iter/sec",
            "range": "stddev: 0.000025716416236353076",
            "extra": "mean: 2.434421666666623 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 918.7722956658304,
            "unit": "iter/sec",
            "range": "stddev: 0.000025314548023449322",
            "extra": "mean: 1.0884089613034145 msec\nrounds: 982"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2597.5782444260385,
            "unit": "iter/sec",
            "range": "stddev: 0.000008158647462153734",
            "extra": "mean: 384.9739664804439 usec\nrounds: 2685"
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
          "id": "a9cf817ce8067d510d417f81118c1cb4abcf91b2",
          "message": "Merge pull request #1071 from TeoZosa/dependabot/pip/tox-4.4.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ab084be",
          "timestamp": "2023-04-06T14:49:23Z",
          "tree_id": "31632e6cea4dc49c9ff9ec00a3dde51e2608882d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a9cf817ce8067d510d417f81118c1cb4abcf91b2"
        },
        "date": 1680793705157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.96259434196907,
            "unit": "iter/sec",
            "range": "stddev: 0.00002244244676897258",
            "extra": "mean: 2.4333114832535894 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 911.8204129441958,
            "unit": "iter/sec",
            "range": "stddev: 0.000023568854971267146",
            "extra": "mean: 1.0967071868582974 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2614.824809660351,
            "unit": "iter/sec",
            "range": "stddev: 0.000008120768224306579",
            "extra": "mean: 382.43479880776164 usec\nrounds: 2684"
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
          "id": "1c2bf5f77776e73ab7a6e04ac042637180f59f2b",
          "message": "Merge pull request #1072 from TeoZosa/dependabot/pip/mypy-1.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@25d1b97",
          "timestamp": "2023-04-07T14:04:45Z",
          "tree_id": "69baa2269d421a4ce906f1b831c60d4a835aa33e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1c2bf5f77776e73ab7a6e04ac042637180f59f2b"
        },
        "date": 1680876444517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.17786538720327,
            "unit": "iter/sec",
            "range": "stddev: 0.00002472526503449323",
            "extra": "mean: 2.432037529691213 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 923.1192546369494,
            "unit": "iter/sec",
            "range": "stddev: 0.00002338473693644992",
            "extra": "mean: 1.083283654822352 msec\nrounds: 985"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2578.1433127214523,
            "unit": "iter/sec",
            "range": "stddev: 0.00002073835979126886",
            "extra": "mean: 387.8760327502562 usec\nrounds: 2687"
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
          "id": "54cb7fe06530fc30368ae3f1b7886bb8bf78cbfb",
          "message": "Merge pull request #1073 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d229bf7",
          "timestamp": "2023-04-10T14:27:53Z",
          "tree_id": "6274dd87dd5eaf41c33b7abf88b1a639f75d7865",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/54cb7fe06530fc30368ae3f1b7886bb8bf78cbfb"
        },
        "date": 1681141379715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 301.93137508339584,
            "unit": "iter/sec",
            "range": "stddev: 0.00033075422761433157",
            "extra": "mean: 3.3120108823529586 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 632.2025871275104,
            "unit": "iter/sec",
            "range": "stddev: 0.00023223958784012195",
            "extra": "mean: 1.581771445358397 msec\nrounds: 851"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1590.7209781922854,
            "unit": "iter/sec",
            "range": "stddev: 0.00017273830911940976",
            "extra": "mean: 628.6457610789871 usec\nrounds: 2076"
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
          "id": "7dae8885688e8b229c43c7930a2747f1224bf277",
          "message": "Merge pull request #1075 from TeoZosa/dependabot/pip/pytest-7.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d0ed442",
          "timestamp": "2023-04-10T15:21:06Z",
          "tree_id": "18aa02bf3e4ebd800ff56c10151b81d39b8a2688",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7dae8885688e8b229c43c7930a2747f1224bf277"
        },
        "date": 1681142798311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 404.53755969622637,
            "unit": "iter/sec",
            "range": "stddev: 0.000025563193337173666",
            "extra": "mean: 2.471958353510897 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 848.1615005992478,
            "unit": "iter/sec",
            "range": "stddev: 0.000021263559780416346",
            "extra": "mean: 1.1790207399103525 msec\nrounds: 892"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2237.178570506937,
            "unit": "iter/sec",
            "range": "stddev: 0.000009651820027552753",
            "extra": "mean: 446.9915871639176 usec\nrounds: 2306"
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
          "id": "603e7fb646eba9085d0c451f33c231e1e13dd810",
          "message": "Merge pull request #1074 from TeoZosa/dependabot/pip/docs/pygments-2.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@177bf7b",
          "timestamp": "2023-04-10T15:56:27Z",
          "tree_id": "7034dbd4279b34cb23fbece2a48b10c72be2c0d5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/603e7fb646eba9085d0c451f33c231e1e13dd810"
        },
        "date": 1681144154007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.0808456124898,
            "unit": "iter/sec",
            "range": "stddev: 0.00002629402961664613",
            "extra": "mean: 2.4445045783132815 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 856.8541221124005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000196552459734163",
            "extra": "mean: 1.1670597995545642 msec\nrounds: 898"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2243.3942555084855,
            "unit": "iter/sec",
            "range": "stddev: 0.000009032603114180946",
            "extra": "mean: 445.75312500001974 usec\nrounds: 2304"
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
          "id": "d27f37027f3c5135f827d9faa95e72f147d88e1f",
          "message": "Merge pull request #1080 from TeoZosa/dependabot/pip/pytest-sugar-0.9.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e4a70af",
          "timestamp": "2023-04-10T16:12:35Z",
          "tree_id": "b2cdad1e41e4831b8e8892ad6081b89b516c812e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d27f37027f3c5135f827d9faa95e72f147d88e1f"
        },
        "date": 1681144533601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 401.54525556694546,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208992398724925",
            "extra": "mean: 2.490379318734798 msec\nrounds: 411"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 851.5748801032078,
            "unit": "iter/sec",
            "range": "stddev: 0.000025665687185203186",
            "extra": "mean: 1.174294854586133 msec\nrounds: 894"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2237.414784821357,
            "unit": "iter/sec",
            "range": "stddev: 0.000011605468272897727",
            "extra": "mean: 446.9443961772352 usec\nrounds: 2302"
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
          "id": "0cd6f261466056a5ec62f4247c3dd025f577cbb2",
          "message": "Merge pull request #1078 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/pygments-2.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@755a910",
          "timestamp": "2023-04-10T16:22:45Z",
          "tree_id": "1d892af30cd9e86fa2a0251a55f7eefaddec88e5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0cd6f261466056a5ec62f4247c3dd025f577cbb2"
        },
        "date": 1681144790180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 332.17508334841284,
            "unit": "iter/sec",
            "range": "stddev: 0.00030478897805005507",
            "extra": "mean: 3.010460597826107 msec\nrounds: 368"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 705.4614874035752,
            "unit": "iter/sec",
            "range": "stddev: 0.00026500505852488206",
            "extra": "mean: 1.417511824324334 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1893.2867321461888,
            "unit": "iter/sec",
            "range": "stddev: 0.00010256259649154658",
            "extra": "mean: 528.1820143885029 usec\nrounds: 2224"
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
          "id": "52cb377125d5184881a1962fb1501be2d66b15ba",
          "message": "Merge pull request #1079 from TeoZosa/dependabot/pip/hypothesis-6.71.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dbd9bea",
          "timestamp": "2023-04-10T16:27:26Z",
          "tree_id": "1d892af30cd9e86fa2a0251a55f7eefaddec88e5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/52cb377125d5184881a1962fb1501be2d66b15ba"
        },
        "date": 1681144957807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 359.87934802884286,
            "unit": "iter/sec",
            "range": "stddev: 0.00010150338635963345",
            "extra": "mean: 2.7787090464547974 msec\nrounds: 409"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 738.1777789614093,
            "unit": "iter/sec",
            "range": "stddev: 0.000060923767389379126",
            "extra": "mean: 1.3546872156013223 msec\nrounds: 923"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1972.8908175719155,
            "unit": "iter/sec",
            "range": "stddev: 0.00003144211586042753",
            "extra": "mean: 506.8704213600245 usec\nrounds: 2397"
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
          "id": "098c6ddb26a165c5965f2e3d87176c2ebf9677ce",
          "message": "Merge pull request #1077 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-6.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4d3a369",
          "timestamp": "2023-04-10T16:42:22Z",
          "tree_id": "ea32851133b57d26b4d363d637bb5693309bece7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/098c6ddb26a165c5965f2e3d87176c2ebf9677ce"
        },
        "date": 1681145214834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.6818214301231,
            "unit": "iter/sec",
            "range": "stddev: 0.00005815197527904719",
            "extra": "mean: 2.4589247596153547 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 847.4189079822291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000310582770739426",
            "extra": "mean: 1.1800539149888436 msec\nrounds: 894"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2266.2461521029686,
            "unit": "iter/sec",
            "range": "stddev: 0.000011108926602055804",
            "extra": "mean: 441.2583333333175 usec\nrounds: 2328"
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
          "id": "e063e546f5fb43eed9e3847ea845da1c87becc34",
          "message": "Merge pull request #1076 from TeoZosa/dependabot/pip/pygments-2.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ae0a6b4",
          "timestamp": "2023-04-10T16:49:04Z",
          "tree_id": "9a4ced15dd86d0bd0682f04be94d711801cc4fcc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e063e546f5fb43eed9e3847ea845da1c87becc34"
        },
        "date": 1681145738434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 299.46614090124564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003825371981525915",
            "extra": "mean: 3.339275675675695 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 615.6649091428347,
            "unit": "iter/sec",
            "range": "stddev: 0.0004187277800922267",
            "extra": "mean: 1.6242601862631079 msec\nrounds: 859"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1627.3031559168028,
            "unit": "iter/sec",
            "range": "stddev: 0.00009749202133602102",
            "extra": "mean: 614.5136487716157 usec\nrounds: 2198"
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
          "id": "cc2c9198c059249b191d4dbdd9ae4616a16e46f0",
          "message": "Merge pull request #1081 from TeoZosa/dependabot/pip/importlib-metadata-6.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@37c74d5",
          "timestamp": "2023-04-10T16:55:49Z",
          "tree_id": "f34af5d3faea36330b41d37a7689262448b960d9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cc2c9198c059249b191d4dbdd9ae4616a16e46f0"
        },
        "date": 1681146141042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.6091439863454,
            "unit": "iter/sec",
            "range": "stddev: 0.000028503319543572878",
            "extra": "mean: 2.4593642685851203 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 903.9240336240932,
            "unit": "iter/sec",
            "range": "stddev: 0.000024564166573352822",
            "extra": "mean: 1.1062876556016665 msec\nrounds: 964"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2581.559565690625,
            "unit": "iter/sec",
            "range": "stddev: 0.00000848702338315233",
            "extra": "mean: 387.3627450980306 usec\nrounds: 2652"
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
          "id": "019c7feda5ee5ec27e1bbb8f818417d747164e35",
          "message": "Merge pull request #1092 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9b77e24",
          "timestamp": "2023-04-18T14:03:50Z",
          "tree_id": "95290bdd705e341f85cd4b04b9fedd5e59ad0884",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/019c7feda5ee5ec27e1bbb8f818417d747164e35"
        },
        "date": 1681826939127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.6580428724912,
            "unit": "iter/sec",
            "range": "stddev: 0.00002462261941538659",
            "extra": "mean: 2.441060336538435 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.9661467928474,
            "unit": "iter/sec",
            "range": "stddev: 0.000015533263563288614",
            "extra": "mean: 1.1710066069429061 msec\nrounds: 893"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2244.986270408478,
            "unit": "iter/sec",
            "range": "stddev: 0.000011641161641618223",
            "extra": "mean: 445.43702256942925 usec\nrounds: 2304"
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
          "distinct": false,
          "id": "7e641cd09093376e66aa5441a65e5b92a6f879d8",
          "message": "Merge pull request #1094 from TeoZosa/dependabot/pip/importlib-metadata-6.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@29cca57",
          "timestamp": "2023-04-18T14:18:31Z",
          "tree_id": "aa18512761438ebbebb98e771e3339ba9b61cc02",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7e641cd09093376e66aa5441a65e5b92a6f879d8"
        },
        "date": 1681828186611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.8011337674656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003769326427570089",
            "extra": "mean: 3.2916269521410553 msec\nrounds: 397"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 670.7742498817483,
            "unit": "iter/sec",
            "range": "stddev: 0.00028131693811978096",
            "extra": "mean: 1.4908145328719629 msec\nrounds: 867"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1791.6179463280048,
            "unit": "iter/sec",
            "range": "stddev: 0.00014711689059470557",
            "extra": "mean: 558.1547126436981 usec\nrounds: 2175"
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
          "id": "5a227235c8fc75c7eacb56640e5afd2f704b6c01",
          "message": "Merge pull request #1093 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-6.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3083a80",
          "timestamp": "2023-04-18T14:25:04Z",
          "tree_id": "52c2cc55a6c2c313c6084f934c030e7c91a3a5b7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5a227235c8fc75c7eacb56640e5afd2f704b6c01"
        },
        "date": 1681828523058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.226503069493,
            "unit": "iter/sec",
            "range": "stddev: 0.00002454362745794747",
            "extra": "mean: 2.4317498812351848 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 907.429833828297,
            "unit": "iter/sec",
            "range": "stddev: 0.000029735181351898412",
            "extra": "mean: 1.102013580246932 msec\nrounds: 972"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2623.4656331850756,
            "unit": "iter/sec",
            "range": "stddev: 0.000007747853358411545",
            "extra": "mean: 381.17518573549154 usec\nrounds: 2692"
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
          "id": "8e4b2c2c494e5a4070d89def02351b3734ef09ff",
          "message": "Merge pull request #1088 from TeoZosa/dependabot/pip/pytest-7.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c846d14",
          "timestamp": "2023-04-18T14:26:42Z",
          "tree_id": "52c2cc55a6c2c313c6084f934c030e7c91a3a5b7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8e4b2c2c494e5a4070d89def02351b3734ef09ff"
        },
        "date": 1681829220700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.0799285564666,
            "unit": "iter/sec",
            "range": "stddev: 0.00002336954678552161",
            "extra": "mean: 2.4326169451074 msec\nrounds: 419"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 907.9713263773812,
            "unit": "iter/sec",
            "range": "stddev: 0.00010274874950432625",
            "extra": "mean: 1.1013563655030763 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2595.8519044623176,
            "unit": "iter/sec",
            "range": "stddev: 0.000008159441301941678",
            "extra": "mean: 385.22998876822726 usec\nrounds: 2671"
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
          "distinct": false,
          "id": "ba1efae46ae9050c5d4b348a1eb14f7c8a150fe9",
          "message": "Merge pull request #1083 from TeoZosa/dependabot/pip/tox-4.4.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5984181",
          "timestamp": "2023-04-18T14:37:59Z",
          "tree_id": "37c3774be54899721d9f54bafffc58523407e6f7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ba1efae46ae9050c5d4b348a1eb14f7c8a150fe9"
        },
        "date": 1681829429671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.47254811784927,
            "unit": "iter/sec",
            "range": "stddev: 0.0008145998001307508",
            "extra": "mean: 3.5152776836158086 msec\nrounds: 354"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 609.2558383567448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005232423088932075",
            "extra": "mean: 1.641346601941725 msec\nrounds: 824"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1556.863397691724,
            "unit": "iter/sec",
            "range": "stddev: 0.0002921614189800316",
            "extra": "mean: 642.3171111111259 usec\nrounds: 2250"
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
          "distinct": false,
          "id": "bde513c6a0ac6592207953d87bcb53120867aca6",
          "message": "Merge pull request #1087 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.4.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d02e768",
          "timestamp": "2023-04-18T14:40:43Z",
          "tree_id": "37c3774be54899721d9f54bafffc58523407e6f7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bde513c6a0ac6592207953d87bcb53120867aca6"
        },
        "date": 1681829920506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.38924484934773,
            "unit": "iter/sec",
            "range": "stddev: 0.00002480945506680824",
            "extra": "mean: 2.4367110311750397 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.1839724658294,
            "unit": "iter/sec",
            "range": "stddev: 0.00003152062822847366",
            "extra": "mean: 1.0950695918367306 msec\nrounds: 980"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2598.053198611291,
            "unit": "iter/sec",
            "range": "stddev: 0.000008359492151493311",
            "extra": "mean: 384.90358878506373 usec\nrounds: 2675"
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
          "id": "9a759a5f9c43a18f9bfa9a8318f040ecfb48d0f5",
          "message": "Merge pull request #1090 from TeoZosa/dependabot/pip/hypothesis-6.72.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0b61011",
          "timestamp": "2023-04-18T14:54:47Z",
          "tree_id": "37c3774be54899721d9f54bafffc58523407e6f7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9a759a5f9c43a18f9bfa9a8318f040ecfb48d0f5"
        },
        "date": 1681830307842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 386.556560394787,
            "unit": "iter/sec",
            "range": "stddev: 0.0002205288560763316",
            "extra": "mean: 2.5869435483870933 msec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 813.8541444670842,
            "unit": "iter/sec",
            "range": "stddev: 0.00012897962468069366",
            "extra": "mean: 1.2287213953488005 msec\nrounds: 1075"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2158.8163855320136,
            "unit": "iter/sec",
            "range": "stddev: 0.00005492545188487588",
            "extra": "mean: 463.2167917113351 usec\nrounds: 2799"
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
          "id": "9459c8e17aa296a0300a4fd43366cf8de5ea304d",
          "message": "Merge pull request #1095 from TeoZosa/dependabot/pip/docs/pygments-2.15.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@efaffe1",
          "timestamp": "2023-04-19T14:05:52Z",
          "tree_id": "0f7b3358f5c62b4418a19fa97ac25d999ec06ce1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9459c8e17aa296a0300a4fd43366cf8de5ea304d"
        },
        "date": 1681914509421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.0537492683832,
            "unit": "iter/sec",
            "range": "stddev: 0.000023972672869871532",
            "extra": "mean: 2.444666506024108 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 849.7787306920518,
            "unit": "iter/sec",
            "range": "stddev: 0.00011610613136876546",
            "extra": "mean: 1.176776923076916 msec\nrounds: 897"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2225.0058566860885,
            "unit": "iter/sec",
            "range": "stddev: 0.000009814096980887762",
            "extra": "mean: 449.43701923076935 usec\nrounds: 2288"
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
          "id": "a6b47f5b4eb74758440c470f19dee65585cbcb8a",
          "message": "Merge pull request #1097 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/pygments-2.15.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3eb2d2a",
          "timestamp": "2023-04-19T14:32:29Z",
          "tree_id": "3f43382db1537e9f94dda15829f252e28b02ba6d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a6b47f5b4eb74758440c470f19dee65585cbcb8a"
        },
        "date": 1681915565411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.860412538548,
            "unit": "iter/sec",
            "range": "stddev: 0.0004870456135773402",
            "extra": "mean: 3.46187970588234 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 576.6257099082609,
            "unit": "iter/sec",
            "range": "stddev: 0.0003470461479608011",
            "extra": "mean: 1.7342272167487929 msec\nrounds: 812"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1513.181752062183,
            "unit": "iter/sec",
            "range": "stddev: 0.0001841934867669965",
            "extra": "mean: 660.8591457286525 usec\nrounds: 1990"
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
          "id": "23d882f43693517ac8281f3d296aded9edde3720",
          "message": "Merge pull request #1098 from TeoZosa/dependabot/github_actions/actions/setup-python-4.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9be6ce2",
          "timestamp": "2023-04-20T14:02:50Z",
          "tree_id": "c9f524d32589e55af60b2c4155d0fefec1c97335",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/23d882f43693517ac8281f3d296aded9edde3720"
        },
        "date": 1681999521884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.6820661444981,
            "unit": "iter/sec",
            "range": "stddev: 0.000023941034253378634",
            "extra": "mean: 2.4528918072289247 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 909.2841245943504,
            "unit": "iter/sec",
            "range": "stddev: 0.000026178645549882087",
            "extra": "mean: 1.0997662589194765 msec\nrounds: 981"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2586.713901641852,
            "unit": "iter/sec",
            "range": "stddev: 0.000009524180077829502",
            "extra": "mean: 386.5908786299386 usec\nrounds: 2686"
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
          "id": "5ae5edbb9b8f743bec807bcfee26985a037f0501",
          "message": "Merge pull request #1100 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@be59c6d",
          "timestamp": "2023-04-24T14:17:43Z",
          "tree_id": "56770a639d6e98acf70ef94ebb1f07391728d94a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5ae5edbb9b8f743bec807bcfee26985a037f0501"
        },
        "date": 1682347984507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 320.98894575987083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005355230189726532",
            "extra": "mean: 3.11537208121831 msec\nrounds: 394"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 667.6806247919691,
            "unit": "iter/sec",
            "range": "stddev: 0.0003442006756512403",
            "extra": "mean: 1.497722058823517 msec\nrounds: 884"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1722.3132101673614,
            "unit": "iter/sec",
            "range": "stddev: 0.00016447621373486554",
            "extra": "mean: 580.6144864341065 usec\nrounds: 2064"
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
          "id": "06c1382c237657b7089323ee67016e51fe03b033",
          "message": "Merge pull request #1101 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ae23898",
          "timestamp": "2023-04-24T14:19:01Z",
          "tree_id": "56770a639d6e98acf70ef94ebb1f07391728d94a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/06c1382c237657b7089323ee67016e51fe03b033"
        },
        "date": 1682348256293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.9070321269372,
            "unit": "iter/sec",
            "range": "stddev: 0.0002106992704121618",
            "extra": "mean: 2.7940216599190335 msec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 748.5654792278586,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655605844288064",
            "extra": "mean: 1.3358884796978545 msec\nrounds: 1059"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1977.4251542051659,
            "unit": "iter/sec",
            "range": "stddev: 0.00014013179318962722",
            "extra": "mean: 505.7081416575557 usec\nrounds: 2739"
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
          "id": "785dcd27fd8f4b3d94b885b02752ab22662d0c44",
          "message": "Merge pull request #1106 from TeoZosa/dependabot/pip/structlog-sentry-logger-1.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7c174a7",
          "timestamp": "2023-04-24T14:37:12Z",
          "tree_id": "56770a639d6e98acf70ef94ebb1f07391728d94a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/785dcd27fd8f4b3d94b885b02752ab22662d0c44"
        },
        "date": 1682349312353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.7292867854081,
            "unit": "iter/sec",
            "range": "stddev: 0.000030298547780625923",
            "extra": "mean: 2.8593544715447132 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 737.112318045074,
            "unit": "iter/sec",
            "range": "stddev: 0.00002086937308791433",
            "extra": "mean: 1.3566453517587949 msec\nrounds: 796"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1930.9092324055089,
            "unit": "iter/sec",
            "range": "stddev: 0.00001093247489420697",
            "extra": "mean: 517.8907341771883 usec\nrounds: 1975"
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
          "id": "7b7f4fff6c56fb6563e940db40ee1b6ad0b6658f",
          "message": "Merge pull request #1102 from TeoZosa/dependabot/pip/docs/sphinx-6.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a9b2f55",
          "timestamp": "2023-04-24T14:59:18Z",
          "tree_id": "4d0180d1f9b132ec620fb0da4976a69b40760094",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7b7f4fff6c56fb6563e940db40ee1b6ad0b6658f"
        },
        "date": 1682349674966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 414.91277680416954,
            "unit": "iter/sec",
            "range": "stddev: 0.00023921490070860405",
            "extra": "mean: 2.4101451097804585 msec\nrounds: 501"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 865.9615265664575,
            "unit": "iter/sec",
            "range": "stddev: 0.00014534234851674397",
            "extra": "mean: 1.1547857142857212 msec\nrounds: 1071"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2249.27857472303,
            "unit": "iter/sec",
            "range": "stddev: 0.00006528675709182728",
            "extra": "mean: 444.5869939089858 usec\nrounds: 2791"
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
          "id": "4f4cfdaf260575b9840d3a31259aeb683c06adb1",
          "message": "Merge pull request #1105 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-23.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e6037a1",
          "timestamp": "2023-04-24T15:05:28Z",
          "tree_id": "e82e5c0ffb97b596a4f70fcb93abe4d16ec970dd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4f4cfdaf260575b9840d3a31259aeb683c06adb1"
        },
        "date": 1682349852397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 342.40598638823855,
            "unit": "iter/sec",
            "range": "stddev: 0.000035898169752998124",
            "extra": "mean: 2.920509686609701 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 719.4867521769316,
            "unit": "iter/sec",
            "range": "stddev: 0.000021481681833042547",
            "extra": "mean: 1.3898796565389522 msec\nrounds: 757"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1882.4854579450787,
            "unit": "iter/sec",
            "range": "stddev: 0.000012445925885296284",
            "extra": "mean: 531.2126028806618 usec\nrounds: 1944"
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
          "id": "a77ec3055b7e792613ea7cac1513a64dd958f0b1",
          "message": "Merge pull request #1108 from TeoZosa/dependabot/pip/hypothesis-6.72.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ff71afa",
          "timestamp": "2023-04-24T15:07:07Z",
          "tree_id": "e82e5c0ffb97b596a4f70fcb93abe4d16ec970dd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a77ec3055b7e792613ea7cac1513a64dd958f0b1"
        },
        "date": 1682350110836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.59849272632,
            "unit": "iter/sec",
            "range": "stddev: 0.000028667797209217062",
            "extra": "mean: 2.429552142857141 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 914.0327635421515,
            "unit": "iter/sec",
            "range": "stddev: 0.000020983128915500215",
            "extra": "mean: 1.0940526859504462 msec\nrounds: 968"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2623.464166156437,
            "unit": "iter/sec",
            "range": "stddev: 0.000008016463639864144",
            "extra": "mean: 381.1753988868358 usec\nrounds: 2695"
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
          "id": "bec50351dd50829d4fae70bce7a7d6a895d04c2d",
          "message": "Merge pull request #1103 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-6.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a9cf9ff",
          "timestamp": "2023-04-24T15:18:41Z",
          "tree_id": "e82e5c0ffb97b596a4f70fcb93abe4d16ec970dd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bec50351dd50829d4fae70bce7a7d6a895d04c2d"
        },
        "date": 1682350539856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.8031087597178,
            "unit": "iter/sec",
            "range": "stddev: 0.0006115530800991051",
            "extra": "mean: 3.586760579710159 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 649.2509957116623,
            "unit": "iter/sec",
            "range": "stddev: 0.000309356320060902",
            "extra": "mean: 1.5402363748458665 msec\nrounds: 811"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1610.9465563632696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002555614016551121",
            "extra": "mean: 620.753057294161 usec\nrounds: 2077"
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
          "id": "f4dc01aca9558cd277e8ed45a093b9de2481581e",
          "message": "Merge pull request #1107 from TeoZosa/dependabot/pip/importlib-metadata-6.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fc4482e",
          "timestamp": "2023-04-24T15:36:13Z",
          "tree_id": "ae78406ca048b81fe856fd1abb6455ca2afc4401",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f4dc01aca9558cd277e8ed45a093b9de2481581e"
        },
        "date": 1682351253482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.9779255108729,
            "unit": "iter/sec",
            "range": "stddev: 0.00009758765063034386",
            "extra": "mean: 2.817076578947358 msec\nrounds: 380"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 741.6033990035318,
            "unit": "iter/sec",
            "range": "stddev: 0.00004547324845067256",
            "extra": "mean: 1.3484296341463202 msec\nrounds: 820"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1951.498751040744,
            "unit": "iter/sec",
            "range": "stddev: 0.000022453109512345705",
            "extra": "mean: 512.4266666666812 usec\nrounds: 2115"
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
          "id": "315e407df3dcae9f15fde4004973a1d2225f8acc",
          "message": "Merge pull request #1104 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-6.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dc66364",
          "timestamp": "2023-04-24T15:40:54Z",
          "tree_id": "d3e5b308e3de0e44ca1c451983316a17d8e4114f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/315e407df3dcae9f15fde4004973a1d2225f8acc"
        },
        "date": 1682351347635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 405.3536049300428,
            "unit": "iter/sec",
            "range": "stddev: 0.000027706618213121658",
            "extra": "mean: 2.4669818840579527 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 846.5058521137353,
            "unit": "iter/sec",
            "range": "stddev: 0.000019685118643472856",
            "extra": "mean: 1.1813267415730062 msec\nrounds: 890"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2223.9301455906175,
            "unit": "iter/sec",
            "range": "stddev: 0.000010206187546245346",
            "extra": "mean: 449.6544111255915 usec\nrounds: 2301"
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
          "id": "62ee0478e0ec8361da879f0e0ea3020fed44b602",
          "message": "Merge pull request #1110 from TeoZosa/dependabot/pip/docs/sphinx-6.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a98f94a",
          "timestamp": "2023-04-25T14:18:13Z",
          "tree_id": "aad70e75894f0769d0fafe35b90edca5b1f35026",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/62ee0478e0ec8361da879f0e0ea3020fed44b602"
        },
        "date": 1682433710177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.29266890106425,
            "unit": "iter/sec",
            "range": "stddev: 0.00004881583230247292",
            "extra": "mean: 2.9386469101123573 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 723.8136292498109,
            "unit": "iter/sec",
            "range": "stddev: 0.00002524097764152109",
            "extra": "mean: 1.3815711111110736 msec\nrounds: 765"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1892.7267997218955,
            "unit": "iter/sec",
            "range": "stddev: 0.000013218763579952644",
            "extra": "mean: 528.3382684426158 usec\nrounds: 1952"
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
          "id": "379e35619ffcf622030ee22e00150aa904f9b6d6",
          "message": "Merge pull request #1112 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5ac47e6",
          "timestamp": "2023-04-25T14:36:41Z",
          "tree_id": "89faeab00123f505edea546e90730e41f042b1d2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/379e35619ffcf622030ee22e00150aa904f9b6d6"
        },
        "date": 1682434716005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.42276783108406,
            "unit": "iter/sec",
            "range": "stddev: 0.00039008830453406476",
            "extra": "mean: 3.3849794561933595 msec\nrounds: 331"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 650.4240487485223,
            "unit": "iter/sec",
            "range": "stddev: 0.00021865483706800368",
            "extra": "mean: 1.5374585271317922 msec\nrounds: 774"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1661.7587821151299,
            "unit": "iter/sec",
            "range": "stddev: 0.00011125288701350456",
            "extra": "mean: 601.7720566682813 usec\nrounds: 2047"
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
          "id": "8ec01dbb82d0aef76597e5575e99975f21118490",
          "message": "Merge pull request #1111 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-6.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d75d25b",
          "timestamp": "2023-04-25T14:44:01Z",
          "tree_id": "d32c9682ece34d4e01af345323b4c9f4e96e941e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8ec01dbb82d0aef76597e5575e99975f21118490"
        },
        "date": 1682435081659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.1942717358089,
            "unit": "iter/sec",
            "range": "stddev: 0.00033948612578398567",
            "extra": "mean: 2.823309352517968 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 748.1723248188803,
            "unit": "iter/sec",
            "range": "stddev: 0.00028985269831122856",
            "extra": "mean: 1.336590470974829 msec\nrounds: 913"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1803.3439059399652,
            "unit": "iter/sec",
            "range": "stddev: 0.00015345288146793266",
            "extra": "mean: 554.5253995680681 usec\nrounds: 2315"
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
          "id": "cd183f58a0f27a8552010f0d0e5f1b0e1a61da76",
          "message": "Merge pull request #1114 from TeoZosa/dependabot/pip/hypothesis-6.72.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@effd9a3",
          "timestamp": "2023-04-25T14:49:11Z",
          "tree_id": "d32c9682ece34d4e01af345323b4c9f4e96e941e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cd183f58a0f27a8552010f0d0e5f1b0e1a61da76"
        },
        "date": 1682435550027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9449923966674,
            "unit": "iter/sec",
            "range": "stddev: 0.000031605257301999754",
            "extra": "mean: 2.4275085714286013 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.3470335284958,
            "unit": "iter/sec",
            "range": "stddev: 0.000024361738326609235",
            "extra": "mean: 1.0924818275153878 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2600.811409927645,
            "unit": "iter/sec",
            "range": "stddev: 0.00000804174162598034",
            "extra": "mean: 384.49539100869305 usec\nrounds: 2647"
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
          "id": "feb8ffdb165f026c8fabc7610b5496e42a8044f1",
          "message": "Merge pull request #1115 from TeoZosa/dependabot/pip/tox-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@98f2d42",
          "timestamp": "2023-04-25T15:09:13Z",
          "tree_id": "93f67f22484c880b80f4914947eb0b6b2d4d5d47",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/feb8ffdb165f026c8fabc7610b5496e42a8044f1"
        },
        "date": 1682435890382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 388.60083206295786,
            "unit": "iter/sec",
            "range": "stddev: 0.00021910457992672575",
            "extra": "mean: 2.5733346855983785 msec\nrounds: 493"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 832.4259706841455,
            "unit": "iter/sec",
            "range": "stddev: 0.0001212832522632706",
            "extra": "mean: 1.2013080264400335 msec\nrounds: 1059"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2194.02165351211,
            "unit": "iter/sec",
            "range": "stddev: 0.00005363378421714105",
            "extra": "mean: 455.78401580460087 usec\nrounds: 2784"
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
          "id": "78eb808006c09eae30917163f79bfad94abfb8bf",
          "message": "Merge pull request #1116 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-23.1.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@de6774a",
          "timestamp": "2023-04-26T14:04:06Z",
          "tree_id": "cb1bf7723055004f9a6c3435534da8ab3b8bb63c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/78eb808006c09eae30917163f79bfad94abfb8bf"
        },
        "date": 1682518502156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 285.2398905455215,
            "unit": "iter/sec",
            "range": "stddev: 0.0005778375636054965",
            "extra": "mean: 3.505821005917157 msec\nrounds: 338"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 589.6136080963747,
            "unit": "iter/sec",
            "range": "stddev: 0.0003573759974893002",
            "extra": "mean: 1.696025984251954 msec\nrounds: 762"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1542.464892923949,
            "unit": "iter/sec",
            "range": "stddev: 0.00019782703232530923",
            "extra": "mean: 648.3129726890354 usec\nrounds: 1904"
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
          "id": "8c7a81462df25f562562f8209fcbbb76af5e076b",
          "message": "Merge pull request #1117 from TeoZosa/dependabot/pip/hypothesis-6.74.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e06f442",
          "timestamp": "2023-04-26T14:07:29Z",
          "tree_id": "cfcc162363da7ca9f49b65d440e61a02c8ca1238",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8c7a81462df25f562562f8209fcbbb76af5e076b"
        },
        "date": 1682518805650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.6574289804509,
            "unit": "iter/sec",
            "range": "stddev: 0.000023067751357403288",
            "extra": "mean: 2.435119711538457 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.5150157619064,
            "unit": "iter/sec",
            "range": "stddev: 0.00003009094977603228",
            "extra": "mean: 1.1688865555555654 msec\nrounds: 900"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2260.274918796183,
            "unit": "iter/sec",
            "range": "stddev: 0.000008379191351955698",
            "extra": "mean: 442.42405721716256 usec\nrounds: 2307"
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
          "id": "0e3b456ab04fbed1e4fa4873772ee41ed5747aac",
          "message": "Merge pull request #1118 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.1.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f246715",
          "timestamp": "2023-04-26T14:10:02Z",
          "tree_id": "cfcc162363da7ca9f49b65d440e61a02c8ca1238",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0e3b456ab04fbed1e4fa4873772ee41ed5747aac"
        },
        "date": 1682519013242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.5612838488342,
            "unit": "iter/sec",
            "range": "stddev: 0.000021645312650059847",
            "extra": "mean: 2.447613221153856 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.3216938943157,
            "unit": "iter/sec",
            "range": "stddev: 0.000019952918458952198",
            "extra": "mean: 1.1760255056179802 msec\nrounds: 890"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2268.0851341121806,
            "unit": "iter/sec",
            "range": "stddev: 0.000009467058860303473",
            "extra": "mean: 440.90055746141115 usec\nrounds: 2332"
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
          "id": "4b5a9e4a585ee730b9a15c158fea9353da40b33d",
          "message": "Merge pull request #1120 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@03b191e",
          "timestamp": "2023-04-27T14:07:03Z",
          "tree_id": "8478a52191dee0b301e6be067a5b6d027b391847",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4b5a9e4a585ee730b9a15c158fea9353da40b33d"
        },
        "date": 1682604717030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.3706412841308,
            "unit": "iter/sec",
            "range": "stddev: 0.000031606600476757214",
            "extra": "mean: 2.4608076923076947 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 854.564953557674,
            "unit": "iter/sec",
            "range": "stddev: 0.00002332831270994229",
            "extra": "mean: 1.170186064659988 msec\nrounds: 897"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2261.914305260435,
            "unit": "iter/sec",
            "range": "stddev: 0.000010460152714847102",
            "extra": "mean: 442.10339784948695 usec\nrounds: 2325"
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
          "id": "585cf91a6008a1399c8a1c7131a4c47eb6fc909a",
          "message": "Merge pull request #1121 from TeoZosa/dependabot/pip/hypothesis-6.74.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@182cf86",
          "timestamp": "2023-04-28T14:07:43Z",
          "tree_id": "97014af3984f448e0b6ef9900197792f365ab4a9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/585cf91a6008a1399c8a1c7131a4c47eb6fc909a"
        },
        "date": 1682691521919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.94235634906653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006770569761401769",
            "extra": "mean: 3.4850205202312345 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 627.136282191646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002033241080049632",
            "extra": "mean: 1.5945497468354268 msec\nrounds: 790"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1594.7141960424117,
            "unit": "iter/sec",
            "range": "stddev: 0.0001595293135650973",
            "extra": "mean: 627.0716110019533 usec\nrounds: 2036"
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
          "id": "e127ec5de8fc27645e5f65d6454e41c0ae735580",
          "message": "Merge pull request #1125 from TeoZosa/dependabot/pip/hypothesis-6.75.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a0cbfe8",
          "timestamp": "2023-05-01T14:22:18Z",
          "tree_id": "d9b1d96f5d77756e99b32e606a62d0a0f603fb22",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e127ec5de8fc27645e5f65d6454e41c0ae735580"
        },
        "date": 1682951298155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.6501076026795,
            "unit": "iter/sec",
            "range": "stddev: 0.000027520661738628297",
            "extra": "mean: 2.423360570071269 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 918.610373325857,
            "unit": "iter/sec",
            "range": "stddev: 0.000021623202616490364",
            "extra": "mean: 1.0886008138352163 msec\nrounds: 983"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2639.3188544398386,
            "unit": "iter/sec",
            "range": "stddev: 0.00000714770573488656",
            "extra": "mean: 378.88563495002086 usec\nrounds: 2701"
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
          "id": "19a3f88c503947380380fd3ddaa55190814b094a",
          "message": "Merge pull request #1126 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@10747b8",
          "timestamp": "2023-05-02T14:03:19Z",
          "tree_id": "da13275b47d6f4a9860a2c6aea36f538a44e21f6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/19a3f88c503947380380fd3ddaa55190814b094a"
        },
        "date": 1683036728033,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.1083156838785,
            "unit": "iter/sec",
            "range": "stddev: 0.000029457911082567",
            "extra": "mean: 2.450329879518069 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.0378763982372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006352209561265327",
            "extra": "mean: 1.1722808888888705 msec\nrounds: 900"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2245.642722432098,
            "unit": "iter/sec",
            "range": "stddev: 0.000009341010678504661",
            "extra": "mean: 445.3068112798328 usec\nrounds: 2305"
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
          "id": "2f1ef8543666e9c16e266368ade6733ad88c6619",
          "message": "Merge pull request #1127 from TeoZosa/dependabot/pip/typer-0.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@abf45ac",
          "timestamp": "2023-05-02T14:06:08Z",
          "tree_id": "1176e41c92891d5269a43f6489a560129e6edf02",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2f1ef8543666e9c16e266368ade6733ad88c6619"
        },
        "date": 1683037598933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 324.36032080271605,
            "unit": "iter/sec",
            "range": "stddev: 0.00044307851339789263",
            "extra": "mean: 3.08299115479117 msec\nrounds: 407"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 690.7185020713285,
            "unit": "iter/sec",
            "range": "stddev: 0.00042729060953446195",
            "extra": "mean: 1.4477677910772582 msec\nrounds: 919"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1694.8304241862763,
            "unit": "iter/sec",
            "range": "stddev: 0.00011894411667630996",
            "extra": "mean: 590.0295308187667 usec\nrounds: 2174"
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
          "id": "2c2eb8d3a415b166171088033c2e16e22a6284aa",
          "message": "Merge pull request #1129 from TeoZosa/dependabot/pip/pre-commit-3.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b22df2b",
          "timestamp": "2023-05-02T14:38:13Z",
          "tree_id": "18576a244e736b0d32bcdf221aa1ef74107f73fa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2c2eb8d3a415b166171088033c2e16e22a6284aa"
        },
        "date": 1683038539715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.9743384174802,
            "unit": "iter/sec",
            "range": "stddev: 0.00039807509811550646",
            "extra": "mean: 3.3225423976608406 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 640.1522708868359,
            "unit": "iter/sec",
            "range": "stddev: 0.00018763320491193018",
            "extra": "mean: 1.5621283333333311 msec\nrounds: 720"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1598.582418365177,
            "unit": "iter/sec",
            "range": "stddev: 0.00027049023798911926",
            "extra": "mean: 625.5542338709507 usec\nrounds: 1984"
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
          "id": "a8b700f4d3748e71f9fc9f3a4641dd76fc6ca0f0",
          "message": "Merge pull request #1130 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@112984c",
          "timestamp": "2023-05-03T14:08:10Z",
          "tree_id": "b2241defeb18ea8d3eb770652ab89e11b2c671a4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a8b700f4d3748e71f9fc9f3a4641dd76fc6ca0f0"
        },
        "date": 1683123342533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.10559473407227,
            "unit": "iter/sec",
            "range": "stddev: 0.00002190270561607067",
            "extra": "mean: 2.432465071770332 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.437696924478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002543343854462387",
            "extra": "mean: 1.1649069042316023 msec\nrounds: 898"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2254.951461024289,
            "unit": "iter/sec",
            "range": "stddev: 0.000008517968202450127",
            "extra": "mean: 443.4685257241679 usec\nrounds: 2313"
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
          "id": "05a5d5f4dafbabf164e31047b2db16a78ab65592",
          "message": "Merge pull request #1131 from TeoZosa/dependabot/pip/hypothesis-6.75.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@de78d7a",
          "timestamp": "2023-05-05T14:04:43Z",
          "tree_id": "fed6dfb27b8d03b4523276d20ac20b51a9afffbd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/05a5d5f4dafbabf164e31047b2db16a78ab65592"
        },
        "date": 1683296144034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.9679773670098,
            "unit": "iter/sec",
            "range": "stddev: 0.000028675057669657443",
            "extra": "mean: 2.421495260663486 msec\nrounds: 422"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 923.750460700571,
            "unit": "iter/sec",
            "range": "stddev: 0.000021083775655775836",
            "extra": "mean: 1.0825434384537156 msec\nrounds: 983"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2621.4728117275286,
            "unit": "iter/sec",
            "range": "stddev: 0.000007227891668567217",
            "extra": "mean: 381.4649518874882 usec\nrounds: 2702"
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
          "id": "64170f62a616f5db84ab5bea35fc672afec591c3",
          "message": "Merge pull request #1132 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@85cf5da",
          "timestamp": "2023-05-11T14:20:23Z",
          "tree_id": "8b500906e0434ea31cd81dc799516caf69736baf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/64170f62a616f5db84ab5bea35fc672afec591c3"
        },
        "date": 1683815426500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.4129142709947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003709669659256665",
            "extra": "mean: 2.448502398081538 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 854.6454343709318,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650202000578529",
            "extra": "mean: 1.1700758698091656 msec\nrounds: 891"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2259.1886935123234,
            "unit": "iter/sec",
            "range": "stddev: 0.000009943241873224133",
            "extra": "mean: 442.6367761452084 usec\nrounds: 2314"
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
          "id": "7a32977c6b5791943517a0eb7dbcbfab46478121",
          "message": "Merge pull request #1133 from TeoZosa/dependabot/pip/cruft-2.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c72c750",
          "timestamp": "2023-05-11T14:29:13Z",
          "tree_id": "f6fff315bc0e739b48257ccd624ce135d987191c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7a32977c6b5791943517a0eb7dbcbfab46478121"
        },
        "date": 1683816050400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.15533996177334,
            "unit": "iter/sec",
            "range": "stddev: 0.00030228417809936067",
            "extra": "mean: 3.365243243243221 msec\nrounds: 333"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 609.2003480864529,
            "unit": "iter/sec",
            "range": "stddev: 0.0003691286791155625",
            "extra": "mean: 1.6414961073825387 msec\nrounds: 745"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1656.6068689940573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006326058550177159",
            "extra": "mean: 603.6435190005162 usec\nrounds: 1921"
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
          "id": "8de21b964be51baa0a29e1f08d537e453e7cdc63",
          "message": "Merge pull request #1134 from TeoZosa/dependabot/pip/mypy-1.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@85a8e8d",
          "timestamp": "2023-05-11T14:50:56Z",
          "tree_id": "7eeeeef5821a87a08a24e6f3fc1362b70ccd606e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8de21b964be51baa0a29e1f08d537e453e7cdc63"
        },
        "date": 1683817283889,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 341.1705950195229,
            "unit": "iter/sec",
            "range": "stddev: 0.00022530972112760108",
            "extra": "mean: 2.931084960422151 msec\nrounds: 379"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 683.8031890094204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852190636039203",
            "extra": "mean: 1.4624090909090854 msec\nrounds: 891"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1859.1963359747676,
            "unit": "iter/sec",
            "range": "stddev: 0.00017544807486705895",
            "extra": "mean: 537.8668087121121 usec\nrounds: 2112"
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
          "id": "23083e335f74904c5326b5e846c53c8404c25627",
          "message": "Merge pull request #1137 from TeoZosa/dependabot/pip/pytest-xdist-3.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@661dd87",
          "timestamp": "2023-05-15T14:22:36Z",
          "tree_id": "738da7f909038fc19b8acc747366d818ddd072f1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/23083e335f74904c5326b5e846c53c8404c25627"
        },
        "date": 1684161440677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.0491059547304,
            "unit": "iter/sec",
            "range": "stddev: 0.0004716896592758246",
            "extra": "mean: 3.3107199468085002 msec\nrounds: 376"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 641.2753194963473,
            "unit": "iter/sec",
            "range": "stddev: 0.0002862507422774253",
            "extra": "mean: 1.5593926190476068 msec\nrounds: 840"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1662.299891699144,
            "unit": "iter/sec",
            "range": "stddev: 0.00015436585450939177",
            "extra": "mean: 601.5761686525982 usec\nrounds: 2182"
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
          "id": "28a95e14c656925585716e9512b634e22d4a0104",
          "message": "Merge pull request #1138 from TeoZosa/dependabot/pip/hypothesis-6.75.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0ddf8de",
          "timestamp": "2023-05-15T14:40:47Z",
          "tree_id": "28ae4a733ebb6f7c4de2bab29b7e6fa8f593397a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/28a95e14c656925585716e9512b634e22d4a0104"
        },
        "date": 1684162172101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.2379703019451,
            "unit": "iter/sec",
            "range": "stddev: 0.000024386614831663053",
            "extra": "mean: 2.443566024096389 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 909.4248747933497,
            "unit": "iter/sec",
            "range": "stddev: 0.000021657890228409926",
            "extra": "mean: 1.099596049896075 msec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2623.734182369785,
            "unit": "iter/sec",
            "range": "stddev: 0.000007649432867278459",
            "extra": "mean: 381.13617100372164 usec\nrounds: 2690"
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
          "id": "1d085a5fcf17c6f88981a7e76e143e87701b3731",
          "message": "Merge pull request #1140 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c33d2ca",
          "timestamp": "2023-05-18T14:03:13Z",
          "tree_id": "3c1ff7b666c8e85a710bafd8003af69d0e67782b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1d085a5fcf17c6f88981a7e76e143e87701b3731"
        },
        "date": 1684419234556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 350.1863135100044,
            "unit": "iter/sec",
            "range": "stddev: 0.000025593237283943688",
            "extra": "mean: 2.8556227397260376 msec\nrounds: 365"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 736.0456554399358,
            "unit": "iter/sec",
            "range": "stddev: 0.00002218468747932102",
            "extra": "mean: 1.3586113749999629 msec\nrounds: 800"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1930.8232151232494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000143789659598421",
            "extra": "mean: 517.913805970148 usec\nrounds: 2412"
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
          "id": "48c0d6fc24fef170c0bb247508aff037123636c0",
          "message": "Merge pull request #1141 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-gh-actions-3.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d42bb6",
          "timestamp": "2023-05-18T14:05:21Z",
          "tree_id": "3c1ff7b666c8e85a710bafd8003af69d0e67782b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/48c0d6fc24fef170c0bb247508aff037123636c0"
        },
        "date": 1684419743390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.3233023683234,
            "unit": "iter/sec",
            "range": "stddev: 0.000023024464473288514",
            "extra": "mean: 2.4371026315789344 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 920.1944974643437,
            "unit": "iter/sec",
            "range": "stddev: 0.000022809261634231476",
            "extra": "mean: 1.0867267765190574 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2630.229211670487,
            "unit": "iter/sec",
            "range": "stddev: 0.000007569617694866936",
            "extra": "mean: 380.19500185114634 usec\nrounds: 2701"
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
          "id": "5696eedb8807612a961fabb5c9332b9782f8759e",
          "message": "Merge pull request #1142 from TeoZosa/dependabot/pip/pre-commit-3.3.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7985d76",
          "timestamp": "2023-05-18T14:35:38Z",
          "tree_id": "9a17b2406a66be74c947f7eb14ef6480e3db1f52",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5696eedb8807612a961fabb5c9332b9782f8759e"
        },
        "date": 1684420961034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.92480247892814,
            "unit": "iter/sec",
            "range": "stddev: 0.0003526102616425639",
            "extra": "mean: 3.2902875706214614 msec\nrounds: 354"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 636.4688022775189,
            "unit": "iter/sec",
            "range": "stddev: 0.0002191169575521139",
            "extra": "mean: 1.571168918918937 msec\nrounds: 814"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1635.4386085434007,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903530040643029",
            "extra": "mean: 611.4567644276465 usec\nrounds: 2114"
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
          "id": "0fd2e32d9d17a6ec113ff9dc81ad48b928e5b7e6",
          "message": "Merge pull request #1143 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8eddf82",
          "timestamp": "2023-05-19T14:11:12Z",
          "tree_id": "f09782a230697552f49f3b42313a2d511e65096d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0fd2e32d9d17a6ec113ff9dc81ad48b928e5b7e6"
        },
        "date": 1684506949176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 362.5645066239284,
            "unit": "iter/sec",
            "range": "stddev: 0.00011210873901877091",
            "extra": "mean: 2.7581298823529194 msec\nrounds: 425"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 737.3064422219999,
            "unit": "iter/sec",
            "range": "stddev: 0.000045417580182223745",
            "extra": "mean: 1.3562881628788268 msec\nrounds: 1056"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1971.5648458441053,
            "unit": "iter/sec",
            "range": "stddev: 0.00002715866591180752",
            "extra": "mean: 507.21131597974926 usec\nrounds: 2766"
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
          "id": "c14567dabe4d20ba11228e348011d5ed74697a26",
          "message": "Merge pull request #1149 from TeoZosa/dependabot/pip/pytest-xdist-3.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3142532",
          "timestamp": "2023-05-19T14:37:29Z",
          "tree_id": "d2c7dd267ca43dbcd9212f3a0cdf0b4328197393",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c14567dabe4d20ba11228e348011d5ed74697a26"
        },
        "date": 1684508649514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.5976596626323,
            "unit": "iter/sec",
            "range": "stddev: 0.000026207071637382348",
            "extra": "mean: 2.4533997590361483 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.9522221878086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001849120536291623",
            "extra": "mean: 1.171025701459058 msec\nrounds: 891"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2242.051487857575,
            "unit": "iter/sec",
            "range": "stddev: 0.00000882071114292702",
            "extra": "mean: 446.02008714597565 usec\nrounds: 2295"
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
          "id": "fc83d2287714d4283933950ee6e3338752ced425",
          "message": "Merge pull request #1146 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/poetry-1.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4fae4f7",
          "timestamp": "2023-05-19T14:39:00Z",
          "tree_id": "d2c7dd267ca43dbcd9212f3a0cdf0b4328197393",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fc83d2287714d4283933950ee6e3338752ced425"
        },
        "date": 1684508986310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.25834765055464,
            "unit": "iter/sec",
            "range": "stddev: 0.000021368321310868736",
            "extra": "mean: 2.4374884892086803 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.4918872461791,
            "unit": "iter/sec",
            "range": "stddev: 0.000019777589945835924",
            "extra": "mean: 1.1730316909294223 msec\nrounds: 893"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2242.832160222048,
            "unit": "iter/sec",
            "range": "stddev: 0.000008872859494412454",
            "extra": "mean: 445.864838990447 usec\nrounds: 2298"
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
          "id": "7ab4e534b8fe54b740984f6dabce0bfc5e855f16",
          "message": "Merge pull request #1145 from TeoZosa/dependabot/pip/poetry-1.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@99e0aa2",
          "timestamp": "2023-05-19T14:55:38Z",
          "tree_id": "d2c7dd267ca43dbcd9212f3a0cdf0b4328197393",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7ab4e534b8fe54b740984f6dabce0bfc5e855f16"
        },
        "date": 1684509270353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 393.2456825879344,
            "unit": "iter/sec",
            "range": "stddev: 0.000030167554581451482",
            "extra": "mean: 2.5429395522387916 msec\nrounds: 402"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.6667004898726,
            "unit": "iter/sec",
            "range": "stddev: 0.00002063786056156701",
            "extra": "mean: 1.1755485426009165 msec\nrounds: 892"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2266.355581455518,
            "unit": "iter/sec",
            "range": "stddev: 0.000012117584069199917",
            "extra": "mean: 441.23702749141046 usec\nrounds: 2328"
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
          "id": "b2a1e97166b75cdeadf8072a3d2ef4ef762abe75",
          "message": "Merge pull request #1147 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@54ccee2",
          "timestamp": "2023-05-19T15:11:08Z",
          "tree_id": "b0bb3c73a7fb4164feb4a2461072c96a0361915a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b2a1e97166b75cdeadf8072a3d2ef4ef762abe75"
        },
        "date": 1684509539657,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9456756002716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000230997742762731",
            "extra": "mean: 2.4275045454545383 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.4930468312365,
            "unit": "iter/sec",
            "range": "stddev: 0.000021787090501338794",
            "extra": "mean: 1.0958987616099036 msec\nrounds: 969"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2614.2235342923213,
            "unit": "iter/sec",
            "range": "stddev: 0.000007898399832421393",
            "extra": "mean: 382.52275939008524 usec\nrounds: 2689"
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
          "id": "517c5fbe13a5faf3d1b15daf5fad460136c3d08c",
          "message": "Merge pull request #1150 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinxcontrib-confluencebuilder-2.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a37546e",
          "timestamp": "2023-05-22T14:05:24Z",
          "tree_id": "05a80835213f7bdc43628fec701c798d028b7870",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/517c5fbe13a5faf3d1b15daf5fad460136c3d08c"
        },
        "date": 1684764697817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 347.01571873376105,
            "unit": "iter/sec",
            "range": "stddev: 0.000029536981293789363",
            "extra": "mean: 2.881713841807911 msec\nrounds: 354"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 726.7622807684764,
            "unit": "iter/sec",
            "range": "stddev: 0.00002031303508302195",
            "extra": "mean: 1.3759657407407038 msec\nrounds: 756"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1910.5007054305868,
            "unit": "iter/sec",
            "range": "stddev: 0.000011155827506211638",
            "extra": "mean: 523.422994379173 usec\nrounds: 1957"
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
          "id": "d81cd4badaaa73cde8c2ee8e7d3f7ed7b87d7321",
          "message": "Merge pull request #1151 from TeoZosa/dependabot/pip/requests-2.31.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8789ecd",
          "timestamp": "2023-05-23T03:29:08Z",
          "tree_id": "373dc2747bbf7b27b397fc8ae0e515b243028d80",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d81cd4badaaa73cde8c2ee8e7d3f7ed7b87d7321"
        },
        "date": 1684812890652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.90997857005556,
            "unit": "iter/sec",
            "range": "stddev: 0.00002401898760474113",
            "extra": "mean: 2.457546024096421 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 851.4904003317289,
            "unit": "iter/sec",
            "range": "stddev: 0.000017498727600237084",
            "extra": "mean: 1.1744113610798357 msec\nrounds: 889"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2259.1888781273537,
            "unit": "iter/sec",
            "range": "stddev: 0.000009435954811642723",
            "extra": "mean: 442.63673997408404 usec\nrounds: 2319"
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
          "id": "d7b5892b814e506a7056ecef0602b941c7aa133c",
          "message": "Merge pull request #1152 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-1.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3b7aeda",
          "timestamp": "2023-05-23T14:01:53Z",
          "tree_id": "29a9c09cdecf177ef9bbf021a4e9137f512aef92",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d7b5892b814e506a7056ecef0602b941c7aa133c"
        },
        "date": 1684851278027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 348.29045153900574,
            "unit": "iter/sec",
            "range": "stddev: 0.00003564820872873842",
            "extra": "mean: 2.871166853932566 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 730.7957038956353,
            "unit": "iter/sec",
            "range": "stddev: 0.00001973831494611843",
            "extra": "mean: 1.368371481481519 msec\nrounds: 810"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1921.183493154587,
            "unit": "iter/sec",
            "range": "stddev: 0.000010844117293590666",
            "extra": "mean: 520.5124880382967 usec\nrounds: 2090"
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
          "id": "3e9bc7465421f7efefd704e51e7ef656cf96637b",
          "message": "Merge pull request #1154 from TeoZosa/dependabot/pip/sphinx-rtd-theme-1.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fe0419f",
          "timestamp": "2023-05-23T14:47:28Z",
          "tree_id": "b0e83f38e087668e85237e3c4b95ab84d95e923f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3e9bc7465421f7efefd704e51e7ef656cf96637b"
        },
        "date": 1684854461682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.22145957975783,
            "unit": "iter/sec",
            "range": "stddev: 0.000029695138306563982",
            "extra": "mean: 2.4377076738609134 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.4021664185682,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662951736674314",
            "extra": "mean: 1.1690407614781242 msec\nrounds: 893"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2274.14144807973,
            "unit": "iter/sec",
            "range": "stddev: 0.000008766844734411263",
            "extra": "mean: 439.72638590462066 usec\nrounds: 2327"
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
          "id": "5936b5be45dc9f1c847124fddce5c30870227f45",
          "message": "Merge pull request #1153 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-rtd-theme-1.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0154713",
          "timestamp": "2023-05-23T15:03:20Z",
          "tree_id": "fc2ec920dd872b6ea1eb11bdd0e6bc1cf3e14dbe",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5936b5be45dc9f1c847124fddce5c30870227f45"
        },
        "date": 1684854722822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.50720832267695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004526372676016316",
            "extra": "mean: 3.4070713483146102 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 635.3115056913455,
            "unit": "iter/sec",
            "range": "stddev: 0.000329521414996523",
            "extra": "mean: 1.5740309927360767 msec\nrounds: 826"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1625.1401751865544,
            "unit": "iter/sec",
            "range": "stddev: 0.00014249099783013354",
            "extra": "mean: 615.3315358690257 usec\nrounds: 2077"
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
          "id": "5619e0b6939ccf51d34d96d648f71f79f50210cb",
          "message": "Merge pull request #1155 from TeoZosa/dependabot/github_actions/actions/setup-python-4.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3d02d94",
          "timestamp": "2023-05-25T14:04:17Z",
          "tree_id": "3d8e6001ef98a95b7f8126d67c83ca7e235d9281",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5619e0b6939ccf51d34d96d648f71f79f50210cb"
        },
        "date": 1685025487929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.1511294238844,
            "unit": "iter/sec",
            "range": "stddev: 0.00003803642870209542",
            "extra": "mean: 2.4621376811594144 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 845.3362421715518,
            "unit": "iter/sec",
            "range": "stddev: 0.000025040082513221032",
            "extra": "mean: 1.1829612290502751 msec\nrounds: 895"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2247.201847913685,
            "unit": "iter/sec",
            "range": "stddev: 0.000012088467179893333",
            "extra": "mean: 444.99785407724085 usec\nrounds: 2330"
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
          "id": "dbf1c9fea1d5454a0ae95813846f52e0427302ac",
          "message": "Merge pull request #1156 from TeoZosa/dependabot/pip/docs/emoji-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2e53fda",
          "timestamp": "2023-05-25T14:06:31Z",
          "tree_id": "3d8e6001ef98a95b7f8126d67c83ca7e235d9281",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dbf1c9fea1d5454a0ae95813846f52e0427302ac"
        },
        "date": 1685025895901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.6465925321905,
            "unit": "iter/sec",
            "range": "stddev: 0.00002648911375905947",
            "extra": "mean: 2.435183971291836 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 905.348688047122,
            "unit": "iter/sec",
            "range": "stddev: 0.00005970472091706438",
            "extra": "mean: 1.1045468041236635 msec\nrounds: 970"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2629.4671193720087,
            "unit": "iter/sec",
            "range": "stddev: 0.00000770028569212735",
            "extra": "mean: 380.30519287833056 usec\nrounds: 2696"
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
          "id": "03932366a936b9ecd3452cb943691dc63d3a966c",
          "message": "Merge pull request #1158 from TeoZosa/dependabot/pip/emoji-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d9ab9f5",
          "timestamp": "2023-05-25T14:56:16Z",
          "tree_id": "1092f8b0c2fded333aba825823d28995ee349bbb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/03932366a936b9ecd3452cb943691dc63d3a966c"
        },
        "date": 1685028077415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.9383257708329,
            "unit": "iter/sec",
            "range": "stddev: 0.00002427853035025892",
            "extra": "mean: 2.4275478571428533 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 916.0051598476615,
            "unit": "iter/sec",
            "range": "stddev: 0.00002708301176068138",
            "extra": "mean: 1.091696907216448 msec\nrounds: 970"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2612.4426270403524,
            "unit": "iter/sec",
            "range": "stddev: 0.000007324353660352192",
            "extra": "mean: 382.7835259038413 usec\nrounds: 2683"
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
          "id": "69f55bf491f6ef5cda2d2d96e57a802acae2a0dc",
          "message": "Merge pull request #1157 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/emoji-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0416775",
          "timestamp": "2023-05-25T15:14:21Z",
          "tree_id": "dbd33557ece47163d11f33fac96ab4befc0d60e9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/69f55bf491f6ef5cda2d2d96e57a802acae2a0dc"
        },
        "date": 1685028722493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.2086598254451,
            "unit": "iter/sec",
            "range": "stddev: 0.00002357633882041379",
            "extra": "mean: 2.86361741573035 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 728.6840291994408,
            "unit": "iter/sec",
            "range": "stddev: 0.00002093221555163203",
            "extra": "mean: 1.372336925098574 msec\nrounds: 761"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1931.9506886811416,
            "unit": "iter/sec",
            "range": "stddev: 0.000010650947283166248",
            "extra": "mean: 517.6115549215474 usec\nrounds: 2103"
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
          "id": "fd3ba39e6e5a159bb96e29ef90c6aa93f4e8fef3",
          "message": "Merge pull request #1160 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@41c449c",
          "timestamp": "2023-05-26T14:07:05Z",
          "tree_id": "3d49572bb0be585c33c16a02fe1e1c0f92a22e88",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fd3ba39e6e5a159bb96e29ef90c6aa93f4e8fef3"
        },
        "date": 1685111045461,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.425276937097,
            "unit": "iter/sec",
            "range": "stddev: 0.000030901224346758755",
            "extra": "mean: 2.454437799043066 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 910.6557098584777,
            "unit": "iter/sec",
            "range": "stddev: 0.00002234304770116842",
            "extra": "mean: 1.0981098445595943 msec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2615.0523423474415,
            "unit": "iter/sec",
            "range": "stddev: 0.000008096025546407942",
            "extra": "mean: 382.4015235971662 usec\nrounds: 2691"
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
          "id": "3dc1f1705d6a19627b0769ade124ebbad6e164a1",
          "message": "Merge pull request #1161 from TeoZosa/dependabot/pip/hypothesis-6.75.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3be8454",
          "timestamp": "2023-05-26T14:20:06Z",
          "tree_id": "3d49572bb0be585c33c16a02fe1e1c0f92a22e88",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3dc1f1705d6a19627b0769ade124ebbad6e164a1"
        },
        "date": 1685111960044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.4214127522323,
            "unit": "iter/sec",
            "range": "stddev: 0.000020919140207204436",
            "extra": "mean: 2.4305978468899565 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.1361569035578,
            "unit": "iter/sec",
            "range": "stddev: 0.00001968289544074898",
            "extra": "mean: 1.1653162402669692 msec\nrounds: 899"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2283.264163860289,
            "unit": "iter/sec",
            "range": "stddev: 0.000008433883740773835",
            "extra": "mean: 437.96947187631207 usec\nrounds: 2329"
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
          "id": "ad4296b9dab6dc6a10394f858eba560390dc5f0c",
          "message": "Merge pull request #1159 from TeoZosa/dependabot/pip/pytest-cov-4.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@51fe9fb",
          "timestamp": "2023-05-26T14:49:51Z",
          "tree_id": "0f9f9365efcf691362543b28b346951e4263e1c9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ad4296b9dab6dc6a10394f858eba560390dc5f0c"
        },
        "date": 1685113076448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 399.89940394605713,
            "unit": "iter/sec",
            "range": "stddev: 0.00003444976688820351",
            "extra": "mean: 2.500628883495138 msec\nrounds: 412"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 841.7653803441224,
            "unit": "iter/sec",
            "range": "stddev: 0.000027125545558592143",
            "extra": "mean: 1.1879794813979991 msec\nrounds: 887"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2197.551685932676,
            "unit": "iter/sec",
            "range": "stddev: 0.000011570971388546168",
            "extra": "mean: 455.05186813186793 usec\nrounds: 2275"
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
          "id": "60f71667518dbe9a2acc71cd646c1406c3a140fa",
          "message": "Merge pull request #1162 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.5.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@744b107",
          "timestamp": "2023-05-29T14:10:43Z",
          "tree_id": "d17b5e0b933b1643a96673a01abab7f9daedea14",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/60f71667518dbe9a2acc71cd646c1406c3a140fa"
        },
        "date": 1685369965867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 375.4336634246226,
            "unit": "iter/sec",
            "range": "stddev: 0.0001911836657330358",
            "extra": "mean: 2.6635863999999945 msec\nrounds: 500"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 790.5790653044229,
            "unit": "iter/sec",
            "range": "stddev: 0.00010585004607852591",
            "extra": "mean: 1.2648956238361015 msec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2080.2905698587915,
            "unit": "iter/sec",
            "range": "stddev: 0.000047639384432246455",
            "extra": "mean: 480.7020781081939 usec\nrounds: 2791"
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
          "id": "4799d165c7f2c708f739ec11ae3c6bcf83ee399d",
          "message": "Merge pull request #1164 from TeoZosa/dependabot/pip/tox-4.5.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dfe23cf",
          "timestamp": "2023-05-29T14:49:32Z",
          "tree_id": "0fc92995f6ff58d85fa1efc32aa4f620b9efe9a2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4799d165c7f2c708f739ec11ae3c6bcf83ee399d"
        },
        "date": 1685372403216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.8130662945428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000319779263534199",
            "extra": "mean: 2.446105769230764 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 857.2328809303565,
            "unit": "iter/sec",
            "range": "stddev: 0.000019370260128025717",
            "extra": "mean: 1.1665441471571856 msec\nrounds: 897"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2264.8765290843257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001074293273174449",
            "extra": "mean: 441.5251724138327 usec\nrounds: 2320"
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
          "id": "3f94e6950b530a84fd6e1eef72734c026e0a89d2",
          "message": "Merge pull request #1165 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a4c61d6",
          "timestamp": "2023-05-30T14:08:31Z",
          "tree_id": "f5b1b7653994fa81a6c28d05db61557f3de65144",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3f94e6950b530a84fd6e1eef72734c026e0a89d2"
        },
        "date": 1685456574797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.11055643813637,
            "unit": "iter/sec",
            "range": "stddev: 0.000027972326261534773",
            "extra": "mean: 2.4324357142857247 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.1349207961621,
            "unit": "iter/sec",
            "range": "stddev: 0.000022757162191106807",
            "extra": "mean: 1.092735046248706 msec\nrounds: 973"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2620.6161601334106,
            "unit": "iter/sec",
            "range": "stddev: 0.000007572673530534167",
            "extra": "mean: 381.5896487294392 usec\nrounds: 2676"
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
          "id": "825d9ba04354f00438a4d98272801bd1f7905c6e",
          "message": "Merge pull request #1166 from TeoZosa/dependabot/pip/docs/poetry-1.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1f42a8b",
          "timestamp": "2023-05-30T14:22:10Z",
          "tree_id": "f14466c222842c86e4054f2ff5f008efc16af96d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/825d9ba04354f00438a4d98272801bd1f7905c6e"
        },
        "date": 1685457359204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 344.55118244190544,
            "unit": "iter/sec",
            "range": "stddev: 0.00003699177179201864",
            "extra": "mean: 2.9023264204545556 msec\nrounds: 352"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 722.7409146671034,
            "unit": "iter/sec",
            "range": "stddev: 0.000022803254391721388",
            "extra": "mean: 1.3836216819973488 msec\nrounds: 761"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1857.1492504085136,
            "unit": "iter/sec",
            "range": "stddev: 0.00009727652625386904",
            "extra": "mean: 538.4596847991791 usec\nrounds: 1967"
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
          "id": "c67ca28fb929ba773614908811db3a5ba780cd50",
          "message": "Merge pull request #1169 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/poetry-1.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@512a1b5",
          "timestamp": "2023-05-30T14:39:47Z",
          "tree_id": "e57a9260b55cca5b8005b6237fc99e384b8adadb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c67ca28fb929ba773614908811db3a5ba780cd50"
        },
        "date": 1685457909681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.09269288554543,
            "unit": "iter/sec",
            "range": "stddev: 0.00003163690418322656",
            "extra": "mean: 2.450423684210543 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.8738663097803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000242283589163184",
            "extra": "mean: 1.10880250260685 msec\nrounds: 959"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2588.3401659321553,
            "unit": "iter/sec",
            "range": "stddev: 0.000009571856314696733",
            "extra": "mean: 386.3479820628073 usec\nrounds: 2676"
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
          "id": "dc4e77c7d97eff73225300824a6d91c7d83b1ca1",
          "message": "Merge pull request #1168 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@192e53c",
          "timestamp": "2023-05-30T14:50:55Z",
          "tree_id": "9896a71379fa4004ab9c5f66a1bb446f4e556374",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dc4e77c7d97eff73225300824a6d91c7d83b1ca1"
        },
        "date": 1685458672931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.06218912622325,
            "unit": "iter/sec",
            "range": "stddev: 0.000029002543918162373",
            "extra": "mean: 2.44461606714629 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.7473871830808,
            "unit": "iter/sec",
            "range": "stddev: 0.00001688449037171037",
            "extra": "mean: 1.1685691536748535 msec\nrounds: 898"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2255.7745498933687,
            "unit": "iter/sec",
            "range": "stddev: 0.000015361664851231216",
            "extra": "mean: 443.306712564547 usec\nrounds: 2324"
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
          "id": "dc232284ac5248a867b3e3e66cee7b4c0d9090ec",
          "message": "Merge pull request #1171 from TeoZosa/dependabot/pip/hypothesis-6.75.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f9b860e",
          "timestamp": "2023-05-31T14:07:47Z",
          "tree_id": "2b8b84fd8cd753ac1c2db3667399fd5a5c6f79a8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dc232284ac5248a867b3e3e66cee7b4c0d9090ec"
        },
        "date": 1685542238718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 336.99548151756335,
            "unit": "iter/sec",
            "range": "stddev: 0.000030317864122381",
            "extra": "mean: 2.967398837209284 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 703.4777932160022,
            "unit": "iter/sec",
            "range": "stddev: 0.00002311455422036178",
            "extra": "mean: 1.4215089795918419 msec\nrounds: 735"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1846.3961889292161,
            "unit": "iter/sec",
            "range": "stddev: 0.000010599703512816377",
            "extra": "mean: 541.5955719557305 usec\nrounds: 1897"
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
          "id": "ca955ab3146a4812a697e10223136335a8241130",
          "message": "Merge pull request #1172 from TeoZosa/dependabot/pip/hypothesis-6.75.9\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9713081",
          "timestamp": "2023-06-01T14:06:10Z",
          "tree_id": "1bf7fb7b117c9e0a803082eb400b59e7f06ae9cd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ca955ab3146a4812a697e10223136335a8241130"
        },
        "date": 1685628860478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 407.13902623306217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002543394111261943",
            "extra": "mean: 2.4561634615384706 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 846.2528893015622,
            "unit": "iter/sec",
            "range": "stddev: 0.00016418911918166155",
            "extra": "mean: 1.1816798650168627 msec\nrounds: 889"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2227.0015370982796,
            "unit": "iter/sec",
            "range": "stddev: 0.000009237618512794634",
            "extra": "mean: 449.0342657342626 usec\nrounds: 2288"
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
          "id": "80f9d87a01c86c728a724927184e9eb24a29d14f",
          "message": "Merge pull request #1173 from TeoZosa/dependabot/pip/hypothesis-6.76.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@900b20f",
          "timestamp": "2023-06-05T13:16:01Z",
          "tree_id": "3fd3e2f517713066039757e1979942954fdacf2e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/80f9d87a01c86c728a724927184e9eb24a29d14f"
        },
        "date": 1685971280080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.65508856722505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113992761915776",
            "extra": "mean: 3.2609926829268305 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 615.2546524698234,
            "unit": "iter/sec",
            "range": "stddev: 0.00040792140091670435",
            "extra": "mean: 1.6253432558139773 msec\nrounds: 860"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1716.6981269166456,
            "unit": "iter/sec",
            "range": "stddev: 0.000144222777187365",
            "extra": "mean: 582.5135964912456 usec\nrounds: 2280"
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
          "id": "a4362d86f1fa5ddf1ec7f7ea152a182d196bebf3",
          "message": "Merge pull request #1174 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1189a64",
          "timestamp": "2023-06-06T14:04:32Z",
          "tree_id": "4e40a8dc7071ec1a645041e5c0f2844f8c1512bf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a4362d86f1fa5ddf1ec7f7ea152a182d196bebf3"
        },
        "date": 1686061069346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.71606258036206,
            "unit": "iter/sec",
            "range": "stddev: 0.00016542552008501574",
            "extra": "mean: 2.6758282560706497 msec\nrounds: 453"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 761.8347460070356,
            "unit": "iter/sec",
            "range": "stddev: 0.00008337686501473331",
            "extra": "mean: 1.312620624408702 msec\nrounds: 1057"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2038.8750951185257,
            "unit": "iter/sec",
            "range": "stddev: 0.00003871263613076923",
            "extra": "mean: 490.46653343022325 usec\nrounds: 2752"
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
          "id": "636087cf20cc6800f83d597040e9f4a83aef0875",
          "message": "Merge pull request #1175 from TeoZosa/dependabot/pip/tox-4.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e6c2d91",
          "timestamp": "2023-06-06T14:14:55Z",
          "tree_id": "7c8905ef77cc5ed8d1ca0835a55f61389595dbd6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/636087cf20cc6800f83d597040e9f4a83aef0875"
        },
        "date": 1686061204613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 404.59446475491467,
            "unit": "iter/sec",
            "range": "stddev: 0.00003240909100965154",
            "extra": "mean: 2.4716106796116337 msec\nrounds: 412"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.725426294883,
            "unit": "iter/sec",
            "range": "stddev: 0.000023124496438509076",
            "extra": "mean: 1.1089850311850684 msec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2588.4533208942366,
            "unit": "iter/sec",
            "range": "stddev: 0.000013586962935231606",
            "extra": "mean: 386.3310927525356 usec\nrounds: 2663"
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
          "id": "f3354170859570e16362f0bd82e963e7f804d4fc",
          "message": "Merge pull request #1176 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-1.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@05aba5f",
          "timestamp": "2023-06-07T14:02:40Z",
          "tree_id": "c971cfffbf35661644abb0b9ca3ae791dbeeb2b5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f3354170859570e16362f0bd82e963e7f804d4fc"
        },
        "date": 1686147447898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.6286175178375,
            "unit": "iter/sec",
            "range": "stddev: 0.000029061876046519146",
            "extra": "mean: 2.4592464891041104 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 902.3557035372648,
            "unit": "iter/sec",
            "range": "stddev: 0.00002351442846995896",
            "extra": "mean: 1.1082104275287077 msec\nrounds: 959"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2564.6897009795475,
            "unit": "iter/sec",
            "range": "stddev: 0.000010442736895405751",
            "extra": "mean: 389.9107169253512 usec\nrounds: 2706"
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
          "id": "70c40b7ee7cc22220e89e217fdf60290d1fa37f7",
          "message": "Merge pull request #1178 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-rtd-theme-1.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8490b1a",
          "timestamp": "2023-06-07T14:11:20Z",
          "tree_id": "5cf995b6361f7bca2a4bee94250a4a6226f4e640",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/70c40b7ee7cc22220e89e217fdf60290d1fa37f7"
        },
        "date": 1686147733414,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.3593033581033,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517064508892468",
            "extra": "mean: 2.430964832535861 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 859.9686871913204,
            "unit": "iter/sec",
            "range": "stddev: 0.00001588186653524283",
            "extra": "mean: 1.1628330367074473 msec\nrounds: 899"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2272.3491547515027,
            "unit": "iter/sec",
            "range": "stddev: 0.000009510864446197369",
            "extra": "mean: 440.073215821165 usec\nrounds: 2326"
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
          "id": "cf1ed6bd85dc5848e342b1b881dd4ebb65730bdc",
          "message": "Merge pull request #1177 from TeoZosa/dependabot/pip/sphinx-rtd-theme-1.2.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@908e8f9",
          "timestamp": "2023-06-07T14:29:20Z",
          "tree_id": "d49f6575d143eaee7c9afc8406a9f52bdc8bf1f1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cf1ed6bd85dc5848e342b1b881dd4ebb65730bdc"
        },
        "date": 1686149104000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.1228751626834,
            "unit": "iter/sec",
            "range": "stddev: 0.000023013127203892308",
            "extra": "mean: 2.4323628297362316 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 859.4182511057901,
            "unit": "iter/sec",
            "range": "stddev: 0.00011516124471582648",
            "extra": "mean: 1.1635778024417416 msec\nrounds: 901"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2286.2985994358164,
            "unit": "iter/sec",
            "range": "stddev: 0.000008550372623638868",
            "extra": "mean: 437.3881872852335 usec\nrounds: 2328"
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
          "id": "8d1a3cf0444569796f3d57f7d1caacd77da638d1",
          "message": "Merge pull request #1179 from TeoZosa/dependabot/pip/docs/emoji-2.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@972006e",
          "timestamp": "2023-06-08T14:10:15Z",
          "tree_id": "a3687c9cd631a72854b84495b0f4f5b91b0a7ca5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8d1a3cf0444569796f3d57f7d1caacd77da638d1"
        },
        "date": 1686236276841,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 395.9508474674529,
            "unit": "iter/sec",
            "range": "stddev: 0.00005503258384128666",
            "extra": "mean: 2.525566004962775 msec\nrounds: 403"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 831.0141758203952,
            "unit": "iter/sec",
            "range": "stddev: 0.00001649239775506592",
            "extra": "mean: 1.2033489067894398 msec\nrounds: 869"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2181.6014572863346,
            "unit": "iter/sec",
            "range": "stddev: 0.000009727872437151782",
            "extra": "mean: 458.3788650580968 usec\nrounds: 2238"
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
          "id": "19c61101eb6f9be32307b01a21b0142a6347f396",
          "message": "Merge pull request #1181 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.11.4-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@510b034",
          "timestamp": "2023-06-08T14:43:00Z",
          "tree_id": "d3c002419acf42902e7912eaa54b77f26a0bdbd4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/19c61101eb6f9be32307b01a21b0142a6347f396"
        },
        "date": 1686237393444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.86940349959275,
            "unit": "iter/sec",
            "range": "stddev: 0.00036307609178072375",
            "extra": "mean: 3.3237012084592163 msec\nrounds: 331"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 650.793058334976,
            "unit": "iter/sec",
            "range": "stddev: 0.00021393863424400085",
            "extra": "mean: 1.536586764705902 msec\nrounds: 748"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1617.5977702904695,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498311872153099",
            "extra": "mean: 618.2006543075487 usec\nrounds: 1834"
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
          "id": "0a20c110d0984883cf31011a54de217a930e66b1",
          "message": "Merge pull request #1180 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/emoji-2.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a3ef38b",
          "timestamp": "2023-06-08T14:51:54Z",
          "tree_id": "d3c002419acf42902e7912eaa54b77f26a0bdbd4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0a20c110d0984883cf31011a54de217a930e66b1"
        },
        "date": 1686237529662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 404.9739387072449,
            "unit": "iter/sec",
            "range": "stddev: 0.00004026271600789533",
            "extra": "mean: 2.4692946987951703 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.8900849728644,
            "unit": "iter/sec",
            "range": "stddev: 0.000022067626871256402",
            "extra": "mean: 1.164293333333326 msec\nrounds: 900"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2254.7499611720614,
            "unit": "iter/sec",
            "range": "stddev: 0.000009922885218017136",
            "extra": "mean: 443.5081570996818 usec\nrounds: 2317"
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
          "id": "5cecbad18ff3a05d3d2f0583c3e6c86cf2372876",
          "message": "Merge pull request #1182 from TeoZosa/dependabot/pip/emoji-2.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ba66f6c",
          "timestamp": "2023-06-08T15:23:31Z",
          "tree_id": "19bed80837b60df5511deae99eaf3c3a66d95552",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5cecbad18ff3a05d3d2f0583c3e6c86cf2372876"
        },
        "date": 1686238329161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 362.33975568708814,
            "unit": "iter/sec",
            "range": "stddev: 0.000124862930101478",
            "extra": "mean: 2.7598406862745333 msec\nrounds: 408"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 751.3574741406429,
            "unit": "iter/sec",
            "range": "stddev: 0.00005967173959595772",
            "extra": "mean: 1.3309244060475198 msec\nrounds: 926"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1931.4997906670208,
            "unit": "iter/sec",
            "range": "stddev: 0.00001775759013101237",
            "extra": "mean: 517.732388495192 usec\nrounds: 2399"
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
          "id": "c5f5a5dd104ef4fb614bf0667cace19eed218a25",
          "message": "Merge pull request #1183 from TeoZosa/dependabot/pip/hypothesis-6.77.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@83360f7",
          "timestamp": "2023-06-09T14:04:26Z",
          "tree_id": "ec83899062086dd862728775c9a961f39a0a314a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c5f5a5dd104ef4fb614bf0667cace19eed218a25"
        },
        "date": 1686319810104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 402.53302880497705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017152480095702113",
            "extra": "mean: 2.4842681927710566 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 894.8383705198668,
            "unit": "iter/sec",
            "range": "stddev: 0.00002636261735238428",
            "extra": "mean: 1.1175202505219333 msec\nrounds: 958"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2591.5475575174887,
            "unit": "iter/sec",
            "range": "stddev: 0.00000907135979171383",
            "extra": "mean: 385.8698240359232 usec\nrounds: 2671"
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
          "id": "16a784e24e4ac6f3aea2f5b8df7b4ab68b6daa7c",
          "message": "Merge pull request #1247 from TeoZosa/dependabot/pip/hypothesis-6.82.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8af08e5",
          "timestamp": "2023-08-07T13:46:08Z",
          "tree_id": "1fb2ab450f1d871a845053bf632c4811159da6e3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/16a784e24e4ac6f3aea2f5b8df7b4ab68b6daa7c"
        },
        "date": 1691416931027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.2461630400357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530783503569393",
            "extra": "mean: 3.421772897196282 msec\nrounds: 321"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 618.3480954961386,
            "unit": "iter/sec",
            "range": "stddev: 0.00019758199633839295",
            "extra": "mean: 1.6172120643432057 msec\nrounds: 746"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1660.958483087526,
            "unit": "iter/sec",
            "range": "stddev: 0.00006720147964594557",
            "extra": "mean: 602.0620082815783 usec\nrounds: 1932"
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
          "id": "c32e09531fdbc074ffcea001a95ad9976e90cf9e",
          "message": "Merge pull request #1225 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6a62ddf",
          "timestamp": "2023-08-07T14:01:51Z",
          "tree_id": "1994c2da0756aea4ad648b65d8d1406e9158fa2e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c32e09531fdbc074ffcea001a95ad9976e90cf9e"
        },
        "date": 1691418018280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.2168624233346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003659009877768186",
            "extra": "mean: 3.244468820224716 msec\nrounds: 356"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 644.1694564980388,
            "unit": "iter/sec",
            "range": "stddev: 0.0003459054243151462",
            "extra": "mean: 1.552386549707584 msec\nrounds: 855"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1690.6125702226493,
            "unit": "iter/sec",
            "range": "stddev: 0.00015379203434080844",
            "extra": "mean: 591.5015761821188 usec\nrounds: 2284"
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
          "id": "0bdba187b9c5b8e0fb033c65a45add488a04dfc9",
          "message": "Merge pull request #1228 from TeoZosa/dependabot/pip/black-23.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1e59f1c",
          "timestamp": "2023-08-07T14:13:12Z",
          "tree_id": "ef80886087b5c1ef1c4cbe035b1c36ccdfcbe36f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0bdba187b9c5b8e0fb033c65a45add488a04dfc9"
        },
        "date": 1691418869553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.24105017418174,
            "unit": "iter/sec",
            "range": "stddev: 0.000531005377326517",
            "extra": "mean: 3.387062874251516 msec\nrounds: 334"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 617.9136214474477,
            "unit": "iter/sec",
            "range": "stddev: 0.0003887853902112501",
            "extra": "mean: 1.6183491758241617 msec\nrounds: 728"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1619.5747190404643,
            "unit": "iter/sec",
            "range": "stddev: 0.00015048196913663775",
            "extra": "mean: 617.4460420032128 usec\nrounds: 1857"
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
          "id": "2faf23baf7c63e20b9e0ea1b73033d384525b0c7",
          "message": "Merge pull request #1239 from TeoZosa/dependabot/pip/docs/emoji-2.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f722537",
          "timestamp": "2023-08-07T14:39:04Z",
          "tree_id": "e74d35f5ebe9e06ba7205f5b8db327fd2fee186b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2faf23baf7c63e20b9e0ea1b73033d384525b0c7"
        },
        "date": 1691420707826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.86593123847973,
            "unit": "iter/sec",
            "range": "stddev: 0.0008665133043664037",
            "extra": "mean: 3.7055436950146285 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 602.7444910400617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003495337122677862",
            "extra": "mean: 1.6590777931034373 msec\nrounds: 725"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1516.8474110841573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002617183773800698",
            "extra": "mean: 659.2620936638948 usec\nrounds: 1815"
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
          "id": "171b5919bc45362c1f05f7682ef614c8865b082c",
          "message": "Merge pull request #1248 from TeoZosa/dependabot/pip/pygments-2.16.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fffd0a6",
          "timestamp": "2023-08-07T14:51:45Z",
          "tree_id": "f57cae2cb4890db7da84e2a1127fb447114eb367",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/171b5919bc45362c1f05f7682ef614c8865b082c"
        },
        "date": 1691420932079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 405.5155204208906,
            "unit": "iter/sec",
            "range": "stddev: 0.00003544972178477661",
            "extra": "mean: 2.465996859903377 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 899.2935082961991,
            "unit": "iter/sec",
            "range": "stddev: 0.000034193122397049394",
            "extra": "mean: 1.1119840083073649 msec\nrounds: 963"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2606.7190484672915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009388835272589387",
            "extra": "mean: 383.6240045078827 usec\nrounds: 2662"
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
          "id": "6c3f3ecd1b79fe90f7655b89b10147d9a6881cd4",
          "message": "Merge pull request #1226 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-6.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5b119f6",
          "timestamp": "2023-08-07T14:58:16Z",
          "tree_id": "f57cae2cb4890db7da84e2a1127fb447114eb367",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6c3f3ecd1b79fe90f7655b89b10147d9a6881cd4"
        },
        "date": 1691421552328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.56438768354116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003645365790097021",
            "extra": "mean: 3.294194050991505 msec\nrounds: 353"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 652.9359538602913,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931376935751792",
            "extra": "mean: 1.5315437817259028 msec\nrounds: 788"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1668.960821502421,
            "unit": "iter/sec",
            "range": "stddev: 0.00010109786601978002",
            "extra": "mean: 599.1752395360526 usec\nrounds: 1983"
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
          "id": "9cb92efc6fe52cad54aec78d9c700f49101f1ce5",
          "message": "Merge pull request #1250 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/pygments-2.16.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1529e41",
          "timestamp": "2023-08-07T15:12:52Z",
          "tree_id": "0dd0170bdf4f5218aa24ed217e1ec690a80be790",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9cb92efc6fe52cad54aec78d9c700f49101f1ce5"
        },
        "date": 1691421825461,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.6229016062864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006210153493473957",
            "extra": "mean: 3.3487049875311663 msec\nrounds: 401"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 663.9430049791127,
            "unit": "iter/sec",
            "range": "stddev: 0.0002953226889881528",
            "extra": "mean: 1.5061533783784038 msec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1764.988637935048,
            "unit": "iter/sec",
            "range": "stddev: 0.00016551842947073154",
            "extra": "mean: 566.5758852532625 usec\nrounds: 2231"
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
          "id": "699feb4c94128c4e1e3a61defa59c6c41fe33db0",
          "message": "Merge pull request #1249 from TeoZosa/dependabot/pip/docs/pygments-2.16.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@37a4a79",
          "timestamp": "2023-08-07T15:23:57Z",
          "tree_id": "d3848413ea676ea7ee0bda92880f3713831ad5f0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/699feb4c94128c4e1e3a61defa59c6c41fe33db0"
        },
        "date": 1691422455475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 398.59736923773227,
            "unit": "iter/sec",
            "range": "stddev: 0.00003012833238653932",
            "extra": "mean: 2.508797290640365 msec\nrounds: 406"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 828.3006347247729,
            "unit": "iter/sec",
            "range": "stddev: 0.000030242533131015703",
            "extra": "mean: 1.2072911188004571 msec\nrounds: 867"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2192.9535629639713,
            "unit": "iter/sec",
            "range": "stddev: 0.000009941947902235161",
            "extra": "mean: 456.00600801068094 usec\nrounds: 2247"
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
          "id": "499600aa2e7d23452048ab7f6572b56965e181c3",
          "message": "Merge pull request #1224 from TeoZosa/dependabot/pip/importlib-metadata-6.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4bc0dbb",
          "timestamp": "2023-08-07T15:35:26Z",
          "tree_id": "447eb2482c4362e6800cd90bbc763bc653d696cc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/499600aa2e7d23452048ab7f6572b56965e181c3"
        },
        "date": 1691426539841,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 398.66530015253915,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342425574960565",
            "extra": "mean: 2.508369801980196 msec\nrounds: 404"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 826.4928134119594,
            "unit": "iter/sec",
            "range": "stddev: 0.000033032204420066125",
            "extra": "mean: 1.2099318757192352 msec\nrounds: 869"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2197.082294286311,
            "unit": "iter/sec",
            "range": "stddev: 0.000008998147230243543",
            "extra": "mean: 455.1490868596868 usec\nrounds: 2245"
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
          "id": "3eb0ede1a41ac19d729355bb7d1d1e0937a3382a",
          "message": "Merge pull request #1242 from TeoZosa/dependabot/pip/emoji-2.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@22bbba8",
          "timestamp": "2023-08-07T16:49:11Z",
          "tree_id": "d80a472f06a49a01d7d28dc1e3dac31be19eaa59",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3eb0ede1a41ac19d729355bb7d1d1e0937a3382a"
        },
        "date": 1691430131148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 409.4339070579192,
            "unit": "iter/sec",
            "range": "stddev: 0.000024909132713655764",
            "extra": "mean: 2.44239664268582 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 902.8572173195881,
            "unit": "iter/sec",
            "range": "stddev: 0.0001370525023283186",
            "extra": "mean: 1.1075948453608315 msec\nrounds: 970"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2616.7933125654695,
            "unit": "iter/sec",
            "range": "stddev: 0.00000786566362203623",
            "extra": "mean: 382.1471092875934 usec\nrounds: 2681"
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
          "id": "4eb1f2473d83dc236b7f206345869ea763494637",
          "message": "Merge pull request #1251 from TeoZosa/dependabot/pip/hypothesis-6.82.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@865e6a8",
          "timestamp": "2023-08-08T13:25:19Z",
          "tree_id": "4948273258dcfee312547d13151152c8e71d8102",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4eb1f2473d83dc236b7f206345869ea763494637"
        },
        "date": 1691501264287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 410.6430464786324,
            "unit": "iter/sec",
            "range": "stddev: 0.000024271006672897666",
            "extra": "mean: 2.435205000000005 msec\nrounds: 420"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 900.3656661431116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000358133463984073",
            "extra": "mean: 1.110659854771774 msec\nrounds: 964"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2617.337717016441,
            "unit": "iter/sec",
            "range": "stddev: 0.000007704614656487682",
            "extra": "mean: 382.0676229508209 usec\nrounds: 2684"
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
          "id": "8b6b8b0ee459303a0a567dbcda684947b209f869",
          "message": "Merge pull request #1252 from TeoZosa/dependabot/pip/tox-4.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@af5068c",
          "timestamp": "2023-08-09T13:07:29Z",
          "tree_id": "c5ea62678bcd5ce1e4471eb30b6f9564e6dd5ace",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8b6b8b0ee459303a0a567dbcda684947b209f869"
        },
        "date": 1691586831849,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 398.26029725483164,
            "unit": "iter/sec",
            "range": "stddev: 0.000039057542702476934",
            "extra": "mean: 2.5109206388206404 msec\nrounds: 407"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 827.8951982078465,
            "unit": "iter/sec",
            "range": "stddev: 0.000033629382704194154",
            "extra": "mean: 1.2078823529411822 msec\nrounds: 867"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2191.565041989831,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913928470968769",
            "extra": "mean: 456.2949220489711 usec\nrounds: 2245"
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
          "id": "044434b58843ff452d1b3461816512c6103662ba",
          "message": "Merge pull request #1253 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fc41200",
          "timestamp": "2023-08-09T13:53:05Z",
          "tree_id": "599726e6fceb1c51dc0b3b04342f5a8a005d6da6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/044434b58843ff452d1b3461816512c6103662ba"
        },
        "date": 1691589463612,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.27753086360457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005353071326165745",
            "extra": "mean: 3.6592836477987265 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 616.07006441628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558666106661553",
            "extra": "mean: 1.6231920000000155 msec\nrounds: 700"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1593.0436908107367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806354851557705",
            "extra": "mean: 627.7291738879281 usec\nrounds: 1731"
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
          "id": "66663322666b6d4243028bebe15320bb0504baf5",
          "message": "Merge pull request #1236 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-23.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@74c2e4d",
          "timestamp": "2023-08-09T13:59:46Z",
          "tree_id": "33e4bdd27ee9a62e78002ee5e82382444ea45e79",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/66663322666b6d4243028bebe15320bb0504baf5"
        },
        "date": 1691589869148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.43289094505235,
            "unit": "iter/sec",
            "range": "stddev: 0.00002877017484104834",
            "extra": "mean: 2.522495037220827 msec\nrounds: 403"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 828.7875230919208,
            "unit": "iter/sec",
            "range": "stddev: 0.000022108680202831546",
            "extra": "mean: 1.206581870669752 msec\nrounds: 866"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2174.0522862499542,
            "unit": "iter/sec",
            "range": "stddev: 0.000011501267887158103",
            "extra": "mean: 459.97053811659265 usec\nrounds: 2230"
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
          "id": "3365db4100b7e10d0dc583598109cee5dca4a610",
          "message": "Merge pull request #1237 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7a2375d",
          "timestamp": "2023-08-09T14:06:32Z",
          "tree_id": "0a80785a6f9f1e851a6af2cc078f8cbafd0b2c96",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3365db4100b7e10d0dc583598109cee5dca4a610"
        },
        "date": 1691590322891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.8380242209075,
            "unit": "iter/sec",
            "range": "stddev: 0.00003801475492443798",
            "extra": "mean: 2.951262634408599 msec\nrounds: 372"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 712.2623701177777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000317950393639104",
            "extra": "mean: 1.4039770202020398 msec\nrounds: 792"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1891.9040350499322,
            "unit": "iter/sec",
            "range": "stddev: 0.000019261660343748274",
            "extra": "mean: 528.5680359435395 usec\nrounds: 2337"
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
          "id": "653cf4d0e9ebbc807f772e15c7f8f259cbd33213",
          "message": "Merge pull request #1254 from TeoZosa/dependabot/pip/mypy-1.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b211c56",
          "timestamp": "2023-08-10T13:13:32Z",
          "tree_id": "52bb0666d2db723f54942b667fb2db7454dfb045",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/653cf4d0e9ebbc807f772e15c7f8f259cbd33213"
        },
        "date": 1691673565436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 405.4540540545868,
            "unit": "iter/sec",
            "range": "stddev: 0.000023544292873953236",
            "extra": "mean: 2.4663707021791645 msec\nrounds: 413"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 897.8342894382337,
            "unit": "iter/sec",
            "range": "stddev: 0.000033044098090826136",
            "extra": "mean: 1.1137912772586245 msec\nrounds: 963"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2601.960110811574,
            "unit": "iter/sec",
            "range": "stddev: 0.000007740547776052652",
            "extra": "mean: 384.32564582555847 usec\nrounds: 2671"
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
          "id": "76289b8a9f808dadd23fd56a48295f54e90eb718",
          "message": "Merge pull request #1255 from TeoZosa/dependabot/pip/tox-4.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7ec7b98",
          "timestamp": "2023-08-14T13:46:17Z",
          "tree_id": "b37144d45a46bbeabbd7694f388b812159941810",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/76289b8a9f808dadd23fd56a48295f54e90eb718"
        },
        "date": 1692021127637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 267.3819063247055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007910062887480413",
            "extra": "mean: 3.7399688473520403 msec\nrounds: 321"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 594.4187341389111,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471900586097084",
            "extra": "mean: 1.6823157524613073 msec\nrounds: 711"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1554.7332782727954,
            "unit": "iter/sec",
            "range": "stddev: 0.00015307474073448404",
            "extra": "mean: 643.1971412555941 usec\nrounds: 1784"
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
          "id": "ad2ec9c272d2429813b22fd0dc3251aa0362c8b0",
          "message": "Merge pull request #1256 from TeoZosa/dependabot/pip/hypothesis-6.82.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3e3431d",
          "timestamp": "2023-08-14T13:54:06Z",
          "tree_id": "3412f45a176daf15fad3f177c227e9a53d4f772f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ad2ec9c272d2429813b22fd0dc3251aa0362c8b0"
        },
        "date": 1692022080532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.3190027324747,
            "unit": "iter/sec",
            "range": "stddev: 0.0005961564402373476",
            "extra": "mean: 2.938419518072288 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 686.8142178799673,
            "unit": "iter/sec",
            "range": "stddev: 0.00023939239094886356",
            "extra": "mean: 1.4559978142076953 msec\nrounds: 915"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1764.3434952586892,
            "unit": "iter/sec",
            "range": "stddev: 0.000124691115730074",
            "extra": "mean: 566.7830570902405 usec\nrounds: 2172"
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
          "id": "ccedc806b39f2d654feb4e0e2cf04b56fde9bd3b",
          "message": "Merge pull request #1257 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d73b155",
          "timestamp": "2023-08-14T14:05:26Z",
          "tree_id": "3ca319f1b6aef30d93c6093c5f0c24faa986b1be",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ccedc806b39f2d654feb4e0e2cf04b56fde9bd3b"
        },
        "date": 1692022148990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 395.2122353765817,
            "unit": "iter/sec",
            "range": "stddev: 0.000024637216857628264",
            "extra": "mean: 2.530286034912711 msec\nrounds: 401"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 825.3040714745688,
            "unit": "iter/sec",
            "range": "stddev: 0.00001963614600654996",
            "extra": "mean: 1.2116746234067433 msec\nrounds: 863"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2194.2125613827434,
            "unit": "iter/sec",
            "range": "stddev: 0.00000943972654158713",
            "extra": "mean: 455.7443602318193 usec\nrounds: 2243"
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
          "id": "c789788f0b814896a13d315d16695f1f59d3fef1",
          "message": "Merge pull request #1258 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/emoji-2.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@edf0ea3",
          "timestamp": "2023-08-16T13:28:02Z",
          "tree_id": "07c04814df8d82c949976f4d8d7a40f01c42379e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c789788f0b814896a13d315d16695f1f59d3fef1"
        },
        "date": 1692192689743,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.73769339475206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005897669313004156",
            "extra": "mean: 3.4160274626865905 msec\nrounds: 335"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 610.2618582778689,
            "unit": "iter/sec",
            "range": "stddev: 0.00029026488607529185",
            "extra": "mean: 1.6386408333333404 msec\nrounds: 720"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1593.0504578344098,
            "unit": "iter/sec",
            "range": "stddev: 0.00010831417504158365",
            "extra": "mean: 627.7265073947491 usec\nrounds: 1758"
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
          "id": "26c09e5e015b5d22e0d7d9dd58981349f37c6453",
          "message": "Merge pull request #1259 from TeoZosa/dependabot/pip/docs/emoji-2.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0e4f58b",
          "timestamp": "2023-08-16T13:33:04Z",
          "tree_id": "0c30ab1146c2229ba3df37f060ff8163629d6478",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/26c09e5e015b5d22e0d7d9dd58981349f37c6453"
        },
        "date": 1692193313352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.7668424315902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005856611726299478",
            "extra": "mean: 3.5116447949526672 msec\nrounds: 317"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 611.3662544448515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000752580241896",
            "extra": "mean: 1.6356807277628458 msec\nrounds: 742"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1578.0125694507722,
            "unit": "iter/sec",
            "range": "stddev: 0.00024221514190071709",
            "extra": "mean: 633.7085137085128 usec\nrounds: 2079"
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
          "id": "ae06dd289d0143bc2650efc31d32619cb32547ff",
          "message": "Merge pull request #1260 from TeoZosa/dependabot/pip/emoji-2.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4a6a450",
          "timestamp": "2023-08-16T13:52:44Z",
          "tree_id": "39d5de91fac7a94cc192ff926a6543a51b6a7ff7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ae06dd289d0143bc2650efc31d32619cb32547ff"
        },
        "date": 1692194739592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.14440417030704,
            "unit": "iter/sec",
            "range": "stddev: 0.00002296291608450372",
            "extra": "mean: 2.5243320099255735 msec\nrounds: 403"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 832.8773250201396,
            "unit": "iter/sec",
            "range": "stddev: 0.00001563779068115591",
            "extra": "mean: 1.200657011494243 msec\nrounds: 870"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2177.0909669477414,
            "unit": "iter/sec",
            "range": "stddev: 0.000009762980249379966",
            "extra": "mean: 459.3285329744349 usec\nrounds: 2229"
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
          "id": "c4d5dd463ac2da4e0481589bd0d613eee8f0c1ce",
          "message": "Merge pull request #1265 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@108ed4e",
          "timestamp": "2023-08-17T13:47:58Z",
          "tree_id": "b5d54ad042abfa455ee2f9c1d8f1963b6a83ee21",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c4d5dd463ac2da4e0481589bd0d613eee8f0c1ce"
        },
        "date": 1692280432409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 394.63800131696956,
            "unit": "iter/sec",
            "range": "stddev: 0.000024356965893380085",
            "extra": "mean: 2.5339678304239364 msec\nrounds: 401"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 826.5019230295883,
            "unit": "iter/sec",
            "range": "stddev: 0.000015313083867759184",
            "extra": "mean: 1.209918539976828 msec\nrounds: 863"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2214.680791890267,
            "unit": "iter/sec",
            "range": "stddev: 0.00000817271064760236",
            "extra": "mean: 451.53233985764757 usec\nrounds: 2248"
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
          "id": "2442a34b242e67865a5ccf0cdb9875f4bfad1a69",
          "message": "Merge pull request #1263 from TeoZosa/dependabot/pip/tox-4.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b29570b",
          "timestamp": "2023-08-17T13:55:26Z",
          "tree_id": "0c9972443a50550255aabbb7f0b0abe15abcffce",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2442a34b242e67865a5ccf0cdb9875f4bfad1a69"
        },
        "date": 1692280924204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.4984772585098,
            "unit": "iter/sec",
            "range": "stddev: 0.00032500074894346864",
            "extra": "mean: 3.407172702702687 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 606.9459466440252,
            "unit": "iter/sec",
            "range": "stddev: 0.0004698207563753334",
            "extra": "mean: 1.6475931761786715 msec\nrounds: 806"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1653.4787517267935,
            "unit": "iter/sec",
            "range": "stddev: 0.00015837193493868713",
            "extra": "mean: 604.785515964847 usec\nrounds: 2161"
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
          "id": "b5cae0f0a42357d7d63cb0a7f0fa0584b64a7284",
          "message": "Merge pull request #1268 from TeoZosa/dependabot/pip/hypothesis-6.82.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@acd44ab",
          "timestamp": "2023-08-18T13:58:59Z",
          "tree_id": "e7989d51e46702bb6b9342e3235f3e078f874932",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b5cae0f0a42357d7d63cb0a7f0fa0584b64a7284"
        },
        "date": 1692367554974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 403.77988938979104,
            "unit": "iter/sec",
            "range": "stddev: 0.000024764189370530815",
            "extra": "mean: 2.4765968446601976 msec\nrounds: 412"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 893.7771142386255,
            "unit": "iter/sec",
            "range": "stddev: 0.00002378356030338449",
            "extra": "mean: 1.1188471757322427 msec\nrounds: 956"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2582.794630803881,
            "unit": "iter/sec",
            "range": "stddev: 0.000008765319917917417",
            "extra": "mean: 387.1775123246076 usec\nrounds: 2637"
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
          "id": "e5d42c8ff3c4902a3a951f5167aed34f61c52f9d",
          "message": "Merge pull request #1269 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e945116",
          "timestamp": "2023-08-21T13:10:26Z",
          "tree_id": "26d5f20d98dc98398e3bede15fb322b20f4b528f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e5d42c8ff3c4902a3a951f5167aed34f61c52f9d"
        },
        "date": 1692623942067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 408.0985635717265,
            "unit": "iter/sec",
            "range": "stddev: 0.00002468813815205123",
            "extra": "mean: 2.4503884337349353 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 902.7871621780839,
            "unit": "iter/sec",
            "range": "stddev: 0.00002590109849882526",
            "extra": "mean: 1.1076807933194113 msec\nrounds: 958"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2616.4821431666496,
            "unit": "iter/sec",
            "range": "stddev: 0.000007096195511867417",
            "extra": "mean: 382.1925567547463 usec\nrounds: 2687"
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
          "id": "bc7023dfa3046502477748fc0f2ad001e39998ec",
          "message": "Merge pull request #1270 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c951195",
          "timestamp": "2023-08-21T13:21:50Z",
          "tree_id": "a9307160dc29a1bb58d54c3c97af8ecbc7be663a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bc7023dfa3046502477748fc0f2ad001e39998ec"
        },
        "date": 1692625017355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 406.1449038894807,
            "unit": "iter/sec",
            "range": "stddev: 0.000025530373560877928",
            "extra": "mean: 2.4621754216867333 msec\nrounds: 415"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 893.9819819552517,
            "unit": "iter/sec",
            "range": "stddev: 0.00003730170821286671",
            "extra": "mean: 1.1185907772021013 msec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2614.326372153556,
            "unit": "iter/sec",
            "range": "stddev: 0.000007061451957422098",
            "extra": "mean: 382.5077123696106 usec\nrounds: 2684"
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
          "id": "8e1a0f077ef893a5d93d4b83d442e4a4c7c1a3d1",
          "message": "Merge pull request #1271 from TeoZosa/dependabot/pip/poetry-1.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@90cb469",
          "timestamp": "2023-08-21T13:45:25Z",
          "tree_id": "2ac5ded93ea849899eff5d32524d156eab8243cb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8e1a0f077ef893a5d93d4b83d442e4a4c7c1a3d1"
        },
        "date": 1692626235436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 398.7454385490963,
            "unit": "iter/sec",
            "range": "stddev: 0.000024659897142390968",
            "extra": "mean: 2.5078656790123333 msec\nrounds: 405"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.6487768191024,
            "unit": "iter/sec",
            "range": "stddev: 0.000015183495140563333",
            "extra": "mean: 1.1966750000000008 msec\nrounds: 872"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2205.0196312349253,
            "unit": "iter/sec",
            "range": "stddev: 0.000009124203733846375",
            "extra": "mean: 453.5107015985831 usec\nrounds: 2252"
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
          "id": "dbd19b95f0a651cdf834620b64d30739158d0021",
          "message": "Merge pull request #1273 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5a2452d",
          "timestamp": "2023-08-21T13:56:36Z",
          "tree_id": "a45f3ce846b08e173ac56669e84645b665fd5e0e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dbd19b95f0a651cdf834620b64d30739158d0021"
        },
        "date": 1692626740916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 341.0125171192159,
            "unit": "iter/sec",
            "range": "stddev: 0.000030226511641701684",
            "extra": "mean: 2.9324436781609573 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 715.8446511694839,
            "unit": "iter/sec",
            "range": "stddev: 0.000018572848618532658",
            "extra": "mean: 1.3969511378848585 msec\nrounds: 747"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1879.418284801651,
            "unit": "iter/sec",
            "range": "stddev: 0.00000996358470146948",
            "extra": "mean: 532.0795312500311 usec\nrounds: 1920"
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
          "id": "ff17fe332f33bff3b051ba9da65ece15870d7b10",
          "message": "Merge pull request #1274 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3962c40",
          "timestamp": "2023-08-22T13:55:17Z",
          "tree_id": "3178762bc8b61608045bc4645398cce9d1034e35",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ff17fe332f33bff3b051ba9da65ece15870d7b10"
        },
        "date": 1692714311561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.69128050963576,
            "unit": "iter/sec",
            "range": "stddev: 0.000027228498627550657",
            "extra": "mean: 2.5208519801980116 msec\nrounds: 404"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 830.7609062464148,
            "unit": "iter/sec",
            "range": "stddev: 0.000017683983941295323",
            "extra": "mean: 1.2037157652473678 msec\nrounds: 869"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2213.72926975739,
            "unit": "iter/sec",
            "range": "stddev: 0.000009021132649207623",
            "extra": "mean: 451.7264209591417 usec\nrounds: 2252"
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
          "id": "c57b5e8b7a5382540eded6dbadbbe973f8584995",
          "message": "Merge pull request #1279 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f199faa",
          "timestamp": "2023-08-22T14:19:43Z",
          "tree_id": "b5c23dd5861f29087f4058d4f2099f36932c828e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c57b5e8b7a5382540eded6dbadbbe973f8584995"
        },
        "date": 1692715697613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 387.65673341497546,
            "unit": "iter/sec",
            "range": "stddev: 0.000021666828353538",
            "extra": "mean: 2.579601781170478 msec\nrounds: 393"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 810.4931334600811,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734813349595742",
            "extra": "mean: 1.2338167452830773 msec\nrounds: 848"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2157.017357824191,
            "unit": "iter/sec",
            "range": "stddev: 0.000009331059142962716",
            "extra": "mean: 463.6031306714712 usec\nrounds: 2204"
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
          "id": "b82eb3f86857c17c14143dd46cecdf5f9e6a6e2c",
          "message": "Merge pull request #1235 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinxcontrib-confluencebuilder-2.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a54f94f",
          "timestamp": "2023-08-22T14:30:41Z",
          "tree_id": "b03f3f229a19ab82597e27b653e351ff9f582509",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b82eb3f86857c17c14143dd46cecdf5f9e6a6e2c"
        },
        "date": 1692716633050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.22444267776086,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842058080727613",
            "extra": "mean: 3.5183462427745837 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 626.7473048632049,
            "unit": "iter/sec",
            "range": "stddev: 0.00019492908289244073",
            "extra": "mean: 1.5955393700787621 msec\nrounds: 762"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1572.5751753456764,
            "unit": "iter/sec",
            "range": "stddev: 0.00021685054555762976",
            "extra": "mean: 635.8996477101227 usec\nrounds: 1987"
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
          "id": "5659d8997d4e8271cb97dde5734ca4b68764bc1b",
          "message": "Merge pull request #1276 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@18ad7a8",
          "timestamp": "2023-08-22T14:44:32Z",
          "tree_id": "b1b4928e7c34d701b1c6fc252fd5cca6d08ec543",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5659d8997d4e8271cb97dde5734ca4b68764bc1b"
        },
        "date": 1692717022225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.7371164029649,
            "unit": "iter/sec",
            "range": "stddev: 0.000021088898690160076",
            "extra": "mean: 2.520560740740734 msec\nrounds: 405"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.3161037559825,
            "unit": "iter/sec",
            "range": "stddev: 0.000019401729696898177",
            "extra": "mean: 1.2058128323699349 msec\nrounds: 865"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2207.6348121482224,
            "unit": "iter/sec",
            "range": "stddev: 0.000008975862821512872",
            "extra": "mean: 452.9734693877708 usec\nrounds: 2254"
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
          "id": "b17f54b4aac27c8f572835529a99c31b20ce282e",
          "message": "Merge pull request #1281 from TeoZosa/dependabot/pip/tox-4.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cca1202",
          "timestamp": "2023-08-22T14:46:42Z",
          "tree_id": "b1b4928e7c34d701b1c6fc252fd5cca6d08ec543",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b17f54b4aac27c8f572835529a99c31b20ce282e"
        },
        "date": 1692717235918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 393.97855361531913,
            "unit": "iter/sec",
            "range": "stddev: 0.00002422657403867618",
            "extra": "mean: 2.5382092269326937 msec\nrounds: 401"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 824.3454396666513,
            "unit": "iter/sec",
            "range": "stddev: 0.000021752589113375064",
            "extra": "mean: 1.2130836805555447 msec\nrounds: 864"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2195.9537612061013,
            "unit": "iter/sec",
            "range": "stddev: 0.000011278203225921556",
            "extra": "mean: 455.3829946996525 usec\nrounds: 2264"
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
          "id": "bd7f5799bf2d281a3657ccb9db7ea8a0eee29d9c",
          "message": "Merge pull request #1278 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-1.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f568ce1",
          "timestamp": "2023-08-22T14:56:35Z",
          "tree_id": "29167564948dfc725c6f3ddea937cab1a30dd572",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bd7f5799bf2d281a3657ccb9db7ea8a0eee29d9c"
        },
        "date": 1692717623107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.5452093049326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000301457961158907",
            "extra": "mean: 2.980224340175968 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 695.5827584840908,
            "unit": "iter/sec",
            "range": "stddev: 0.00015343420017976928",
            "extra": "mean: 1.4376434547908246 msec\nrounds: 741"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1857.7840028812222,
            "unit": "iter/sec",
            "range": "stddev: 0.000012885002478387671",
            "extra": "mean: 538.2757082896117 usec\nrounds: 1906"
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
          "id": "89fdf0d2e4ebfbfaee8fd29ba3d8df9b4c432001",
          "message": "Merge pull request #1280 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@50fdad7",
          "timestamp": "2023-08-22T15:14:25Z",
          "tree_id": "665f0234c9abc08c3e154e19a0a5880ed7a0286d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/89fdf0d2e4ebfbfaee8fd29ba3d8df9b4c432001"
        },
        "date": 1692718566325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.7214703148923,
            "unit": "iter/sec",
            "range": "stddev: 0.0001792573949681145",
            "extra": "mean: 3.48770532915358 msec\nrounds: 319"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 595.1068936060357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526192743610683",
            "extra": "mean: 1.6803703851261484 msec\nrounds: 753"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1533.3350492456104,
            "unit": "iter/sec",
            "range": "stddev: 0.00014445041808381604",
            "extra": "mean: 652.1731832139313 usec\nrounds: 1954"
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
          "id": "aa2670daf005e6a9914ad15833c40053aa1436ad",
          "message": "Merge pull request #1283 from TeoZosa/dependabot/pip/sphinx-rtd-theme-1.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@00c1197",
          "timestamp": "2023-08-22T15:24:13Z",
          "tree_id": "e6ad3852fc3ea001ec82a542b006a077faeec55c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/aa2670daf005e6a9914ad15833c40053aa1436ad"
        },
        "date": 1692718720760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 376.75196488890134,
            "unit": "iter/sec",
            "range": "stddev: 0.00018214607451558159",
            "extra": "mean: 2.6542661835748764 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 767.5724105459733,
            "unit": "iter/sec",
            "range": "stddev: 0.000210489508377211",
            "extra": "mean: 1.3028086813186799 msec\nrounds: 910"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1994.751590842976,
            "unit": "iter/sec",
            "range": "stddev: 0.00018535019500634346",
            "extra": "mean: 501.31555457359127 usec\nrounds: 2263"
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
          "id": "101a5bd34d7ded183a90d1eaa5684adf4cb40eae",
          "message": "Merge pull request #1410 from TeoZosa/dependabot/pip/gitpython-3.1.41\n\nBump gitpython from 3.1.30 to 3.1.41\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c6b6a81",
          "timestamp": "2024-02-17T13:54:54Z",
          "tree_id": "8bcd364db6186bfcb09710726bd67bd633067438",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/101a5bd34d7ded183a90d1eaa5684adf4cb40eae"
        },
        "date": 1708178409382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.22678689809476,
            "unit": "iter/sec",
            "range": "stddev: 0.000040650662126103564",
            "extra": "mean: 1.9676255281690047 msec\nrounds: 568"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1090.7162987212093,
            "unit": "iter/sec",
            "range": "stddev: 0.000032193133640784774",
            "extra": "mean: 916.8286942923949 usec\nrounds: 1279"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 3021.173629730647,
            "unit": "iter/sec",
            "range": "stddev: 0.000019515490206196187",
            "extra": "mean: 330.99719597683475 usec\nrounds: 3281"
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
          "id": "e99f6d0cad8de2461406225934e337b1aee582bc",
          "message": "Merge pull request #1340 from TeoZosa/dependabot/pip/urllib3-1.26.18\n\nBump urllib3 from 1.26.8 to 1.26.18\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5f479b5",
          "timestamp": "2024-02-17T14:06:40Z",
          "tree_id": "c523d84f72c26e5af9ebe2eb16e90a49e79330e0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e99f6d0cad8de2461406225934e337b1aee582bc"
        },
        "date": 1708179372051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.0556281497955,
            "unit": "iter/sec",
            "range": "stddev: 0.00007239943440878185",
            "extra": "mean: 1.9918111538461543 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1100.5935004035532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003716147288974034",
            "extra": "mean: 908.6006773920901 usec\nrounds: 1181"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2918.424247914221,
            "unit": "iter/sec",
            "range": "stddev: 0.000015045711147185645",
            "extra": "mean: 342.6506618133719 usec\nrounds: 3022"
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
          "id": "f7300947c148dcc592e297f3a51dfbe54988549a",
          "message": "Merge pull request #1316 from TeoZosa/dependabot/pip/docs/sphinx-7.2.6\n\nBump sphinx from 6.2.1 to 7.2.6 in /docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f1875ef",
          "timestamp": "2024-02-17T14:11:12Z",
          "tree_id": "cafccf9f232dea8938bf8cf57a4815e10f3d7dce",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f7300947c148dcc592e297f3a51dfbe54988549a"
        },
        "date": 1708179709898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 504.4927451328857,
            "unit": "iter/sec",
            "range": "stddev: 0.000038370191446129234",
            "extra": "mean: 1.9821890595009355 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1071.5994028367356,
            "unit": "iter/sec",
            "range": "stddev: 0.00024178909021716855",
            "extra": "mean: 933.184543918933 usec\nrounds: 1184"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2895.586831398079,
            "unit": "iter/sec",
            "range": "stddev: 0.00001727816298759844",
            "extra": "mean: 345.3531384921961 usec\nrounds: 3011"
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
          "id": "ed657c71b4a8f686e3b520f369fc567ae4d66e66",
          "message": "Merge pull request #1452 from TeoZosa/dependabot/pip/hypothesis-6.98.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d7a65c2",
          "timestamp": "2024-02-17T14:13:51Z",
          "tree_id": "cafccf9f232dea8938bf8cf57a4815e10f3d7dce",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ed657c71b4a8f686e3b520f369fc567ae4d66e66"
        },
        "date": 1708179920514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.038131399255,
            "unit": "iter/sec",
            "range": "stddev: 0.000043335993007067494",
            "extra": "mean: 1.9644893738140567 msec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1111.9574497121741,
            "unit": "iter/sec",
            "range": "stddev: 0.000030976677385643884",
            "extra": "mean: 899.3149875104 usec\nrounds: 1201"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2932.5220246526214,
            "unit": "iter/sec",
            "range": "stddev: 0.00001822045126293183",
            "extra": "mean: 341.0034064853979 usec\nrounds: 3053"
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
          "id": "e7bdc3bb9d1acdbc5fa39d78353e3be81fcaa36e",
          "message": "Merge pull request #1113 from TeoZosa/dependabot/pip/sphinx-6.2.1\n\nBump sphinx from 5.3.0 to 6.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4ef5943",
          "timestamp": "2024-02-18T00:59:53Z",
          "tree_id": "367a89d13c654cb1c5a514bc2094e69b1bc254df",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e7bdc3bb9d1acdbc5fa39d78353e3be81fcaa36e"
        },
        "date": 1708218654794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 496.93454700482704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000456580133667251",
            "extra": "mean: 2.0123374517374546 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1077.4814530717113,
            "unit": "iter/sec",
            "range": "stddev: 0.00003798048992479841",
            "extra": "mean: 928.0902210884232 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2890.2203387080835,
            "unit": "iter/sec",
            "range": "stddev: 0.000022250967511665736",
            "extra": "mean: 345.9943820224433 usec\nrounds: 3026"
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
          "id": "e961b2b949ba28ecaf34e51efbda52a62610d361",
          "message": "Merge pull request #1322 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-autoapi-3.0.0\n\nBump sphinx-autoapi from 2.1.0 to 3.0.0 in /{{cookiecutter.project_slug}}/docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@828233d",
          "timestamp": "2024-02-18T01:01:13Z",
          "tree_id": "11e0583a08a3de897c959918a224c0c27b3a96f0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e961b2b949ba28ecaf34e51efbda52a62610d361"
        },
        "date": 1708218932652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.4522462077961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004261751587140982",
            "extra": "mean: 1.9981926499032703 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1095.1943278521342,
            "unit": "iter/sec",
            "range": "stddev: 0.00003144594783723964",
            "extra": "mean: 913.0799663299692 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2908.6318824566993,
            "unit": "iter/sec",
            "range": "stddev: 0.00001703972618899003",
            "extra": "mean: 343.8042490118675 usec\nrounds: 3036"
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
          "id": "c8ea3f03074fa9f2baba8ef1637fea0b7ac61c09",
          "message": "Merge pull request #1439 from TeoZosa/dependabot/pip/docs/emoji-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c6457ac",
          "timestamp": "2024-02-18T01:11:21Z",
          "tree_id": "cec7ed660f7c977d5395bb01b04909232baefa77",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c8ea3f03074fa9f2baba8ef1637fea0b7ac61c09"
        },
        "date": 1708219348726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.1201338483254,
            "unit": "iter/sec",
            "range": "stddev: 0.000054336899494183465",
            "extra": "mean: 1.9955294797687597 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.2860567850728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000347628389450356",
            "extra": "mean: 921.416057774008 usec\nrounds: 1177"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2873.171341196725,
            "unit": "iter/sec",
            "range": "stddev: 0.00001811087941771674",
            "extra": "mean: 348.04746436858267 usec\nrounds: 3017"
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
          "id": "855c82228662220ce8692bfea5c3251e41a753e2",
          "message": "Merge pull request #1436 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/emoji-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aad17dc",
          "timestamp": "2024-02-18T01:14:11Z",
          "tree_id": "557a130d6011fa22e36417aada1dd8732648c023",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/855c82228662220ce8692bfea5c3251e41a753e2"
        },
        "date": 1708219665452,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 507.4624581888286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000468732195939075",
            "extra": "mean: 1.9705891221373788 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.1915117855722,
            "unit": "iter/sec",
            "range": "stddev: 0.00004454122945493344",
            "extra": "mean: 921.496334185845 usec\nrounds: 1173"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2869.6799996020686,
            "unit": "iter/sec",
            "range": "stddev: 0.000013761519422098378",
            "extra": "mean: 348.47090969678413 usec\nrounds: 3001"
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
          "id": "93b30d1b21b6a0ff22d6bdb16d0a904efa6d422d",
          "message": "Merge pull request #1438 from TeoZosa/dependabot/pip/emoji-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@653c4d5",
          "timestamp": "2024-02-18T01:19:43Z",
          "tree_id": "557a130d6011fa22e36417aada1dd8732648c023",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/93b30d1b21b6a0ff22d6bdb16d0a904efa6d422d"
        },
        "date": 1708219923273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.0216577269469,
            "unit": "iter/sec",
            "range": "stddev: 0.00004195337209581258",
            "extra": "mean: 1.9762000000000148 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1096.2406138431115,
            "unit": "iter/sec",
            "range": "stddev: 0.00003489143533060868",
            "extra": "mean: 912.208494533222 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2916.4282044507236,
            "unit": "iter/sec",
            "range": "stddev: 0.000011718545751980512",
            "extra": "mean: 342.8851766259539 usec\nrounds: 3029"
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
          "id": "efcbfddbe31fc09b29aa7c3a229e158d8a65e606",
          "message": "Merge pull request #1428 from TeoZosa/dependabot/pip/python-dotenv-1.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@455a5c4",
          "timestamp": "2024-02-18T01:34:32Z",
          "tree_id": "fae8c236bfe205cd46f3b5e070bef3c2bf17f848",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/efcbfddbe31fc09b29aa7c3a229e158d8a65e606"
        },
        "date": 1708220599355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 503.3318960095493,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915547515102978",
            "extra": "mean: 1.986760640301301 msec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1077.5080098426733,
            "unit": "iter/sec",
            "range": "stddev: 0.00023414472347447346",
            "extra": "mean: 928.0673469388034 usec\nrounds: 1225"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2913.44661310869,
            "unit": "iter/sec",
            "range": "stddev: 0.000012743982512705204",
            "extra": "mean: 343.2360817941968 usec\nrounds: 3032"
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
          "id": "a5e9e94f1567f5002d0a86f0bf914deb3fa7958c",
          "message": "Merge pull request #1437 from TeoZosa/dependabot/pip/xdoctest-1.1.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@591cc4c",
          "timestamp": "2024-02-18T01:45:20Z",
          "tree_id": "4a2f3c6179397b6144b6d7d093243c3559c24926",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a5e9e94f1567f5002d0a86f0bf914deb3fa7958c"
        },
        "date": 1708221164532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.2628464883869,
            "unit": "iter/sec",
            "range": "stddev: 0.000039394454429503754",
            "extra": "mean: 1.9674859315589353 msec\nrounds: 526"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1087.5381662817501,
            "unit": "iter/sec",
            "range": "stddev: 0.000029463112030034723",
            "extra": "mean: 919.5079593564614 usec\nrounds: 1181"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2894.1806003160177,
            "unit": "iter/sec",
            "range": "stddev: 0.000013648955961977745",
            "extra": "mean: 345.52093946411264 usec\nrounds: 3023"
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
          "id": "e2afa5b3a4239d60204d2336d1e05e9d3a81ae94",
          "message": "Merge pull request #1451 from TeoZosa/dependabot/pip/black-24.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2c61fd9",
          "timestamp": "2024-02-18T02:24:21Z",
          "tree_id": "d19e1ad5450a475cb7ba8d6b4505fa7bdced5097",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e2afa5b3a4239d60204d2336d1e05e9d3a81ae94"
        },
        "date": 1708223198052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.05931603595326,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118388333135151",
            "extra": "mean: 1.9799654580152597 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.3984761248241,
            "unit": "iter/sec",
            "range": "stddev: 0.00003453413787588337",
            "extra": "mean: 917.9377628259314 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2923.775338142888,
            "unit": "iter/sec",
            "range": "stddev: 0.000010830165849072322",
            "extra": "mean: 342.0235429700204 usec\nrounds: 3037"
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
          "id": "771adfd94ca6318582477bcef5f6998ddb9d9c13",
          "message": "Merge pull request #1317 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-7.2.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@074f79a",
          "timestamp": "2024-02-18T02:26:35Z",
          "tree_id": "12cd33749988784b2617135c89ad41f53ccfa120",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/771adfd94ca6318582477bcef5f6998ddb9d9c13"
        },
        "date": 1708224716863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.92605492302056,
            "unit": "iter/sec",
            "range": "stddev: 0.00003944924274320628",
            "extra": "mean: 1.976573434535123 msec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1104.3106655658175,
            "unit": "iter/sec",
            "range": "stddev: 0.0001647871687660027",
            "extra": "mean: 905.5422818791923 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2913.9797750341245,
            "unit": "iter/sec",
            "range": "stddev: 0.00001480479622938956",
            "extra": "mean: 343.17328094299813 usec\nrounds: 3054"
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
          "id": "97afc443e56583bd0fea4575694ad91160d5695c",
          "message": "Merge pull request #1454 from TeoZosa/dependabot/pip/pytest-8.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@284b7dd",
          "timestamp": "2024-02-18T02:41:04Z",
          "tree_id": "456e68ce1917f83faf118067e5675152b2db3b53",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/97afc443e56583bd0fea4575694ad91160d5695c"
        },
        "date": 1708225001840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.1378992936144,
            "unit": "iter/sec",
            "range": "stddev: 0.00004982279479425901",
            "extra": "mean: 1.999448554913318 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1093.295699461621,
            "unit": "iter/sec",
            "range": "stddev: 0.000029910189147940864",
            "extra": "mean: 914.6656302521236 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2912.8977310706728,
            "unit": "iter/sec",
            "range": "stddev: 0.000014726749801486639",
            "extra": "mean: 343.30075832509135 usec\nrounds: 3033"
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
          "id": "9b5c2a26e5a5abc253354f20ed6f32655015cda9",
          "message": "Merge pull request #1362 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@405d937",
          "timestamp": "2024-02-18T02:42:33Z",
          "tree_id": "264540c131ea73b3f09c1310b2325308a9bee7f0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9b5c2a26e5a5abc253354f20ed6f32655015cda9"
        },
        "date": 1708225349571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.8018124827296,
            "unit": "iter/sec",
            "range": "stddev: 0.00004585315879207961",
            "extra": "mean: 1.977058949416368 msec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1095.6891259293634,
            "unit": "iter/sec",
            "range": "stddev: 0.00003189946283114299",
            "extra": "mean: 912.667632027287 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2879.360218121378,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618285364964505",
            "extra": "mean: 347.2993735575204 usec\nrounds: 3033"
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
          "id": "e39cc0ccd62da770bb244154f8bb9bd6f78df80e",
          "message": "Merge pull request #1370 from TeoZosa/dependabot/pip/docs/pygments-2.17.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@10936e0",
          "timestamp": "2024-02-18T02:47:16Z",
          "tree_id": "8202ced3db2a90feee1f00bcee82c5f60f9e1317",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e39cc0ccd62da770bb244154f8bb9bd6f78df80e"
        },
        "date": 1708225462515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.9983142424256,
            "unit": "iter/sec",
            "range": "stddev: 0.000056286276300388035",
            "extra": "mean: 1.9960147001934123 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1081.9674185879132,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296620766474102",
            "extra": "mean: 924.2422487223416 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2916.366157251203,
            "unit": "iter/sec",
            "range": "stddev: 0.000013356132219491565",
            "extra": "mean: 342.8924716855656 usec\nrounds: 3002"
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
          "id": "dffdcc3147c4f8d907b9cf06d15a436a7a101226",
          "message": "Merge pull request #1364 from TeoZosa/dependabot/pip/poetry-1.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5a27fd8",
          "timestamp": "2024-02-18T02:49:21Z",
          "tree_id": "7e5869ea860d428a4c8ea0bf54b071e8f9977e5e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dffdcc3147c4f8d907b9cf06d15a436a7a101226"
        },
        "date": 1708225607273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.61243926255287,
            "unit": "iter/sec",
            "range": "stddev: 0.00007409356196829431",
            "extra": "mean: 1.9661335877862516 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1086.8484315927171,
            "unit": "iter/sec",
            "range": "stddev: 0.000031076104180460284",
            "extra": "mean: 920.0914965986145 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2901.3190536975476,
            "unit": "iter/sec",
            "range": "stddev: 0.000012645027149747562",
            "extra": "mean: 344.6708140304539 usec\nrounds: 3022"
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
          "id": "221783812d51738cab0443d8d5a95862cd201a29",
          "message": "Merge pull request #1450 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@98adb98",
          "timestamp": "2024-02-18T02:55:30Z",
          "tree_id": "f5574d4f2c62c2ea848dc5ff94907abb8858c2ad",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/221783812d51738cab0443d8d5a95862cd201a29"
        },
        "date": 1708225801843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.36936507837265,
            "unit": "iter/sec",
            "range": "stddev: 0.00007720539254017661",
            "extra": "mean: 1.9945374999999905 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1105.7647516076236,
            "unit": "iter/sec",
            "range": "stddev: 0.00002418249565616579",
            "extra": "mean: 904.3514893616777 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2922.2381066982,
            "unit": "iter/sec",
            "range": "stddev: 0.000015138045237254263",
            "extra": "mean: 342.2034630606769 usec\nrounds: 3032"
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
          "id": "c90109c64cedc9ea61f094d441f00e9bfe321e16",
          "message": "Merge pull request #1365 from TeoZosa/dependabot/pip/docs/poetry-1.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@46b5e33",
          "timestamp": "2024-02-18T03:00:04Z",
          "tree_id": "f5574d4f2c62c2ea848dc5ff94907abb8858c2ad",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c90109c64cedc9ea61f094d441f00e9bfe321e16"
        },
        "date": 1708225995013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 494.1397112823076,
            "unit": "iter/sec",
            "range": "stddev: 0.00010116691599246516",
            "extra": "mean: 2.023719157088123 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.1475688999885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003508561048765408",
            "extra": "mean: 921.5336500395956 usec\nrounds: 1263"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2914.524788409177,
            "unit": "iter/sec",
            "range": "stddev: 0.000015219846454563149",
            "extra": "mean: 343.1091078644851 usec\nrounds: 3217"
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
          "id": "2e88963090be63977e10c55822203509e98a5b65",
          "message": "Merge pull request #1378 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4e6949e",
          "timestamp": "2024-02-18T03:05:25Z",
          "tree_id": "51d956f15b64b8de8aa7d638cbfd068ecd6e95bf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2e88963090be63977e10c55822203509e98a5b65"
        },
        "date": 1708226580990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 512.013559931498,
            "unit": "iter/sec",
            "range": "stddev: 0.00007416178005784834",
            "extra": "mean: 1.9530732743363075 msec\nrounds: 565"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1101.4052543448777,
            "unit": "iter/sec",
            "range": "stddev: 0.00003053040053313575",
            "extra": "mean: 907.9310236220053 usec\nrounds: 1270"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2932.0999368673965,
            "unit": "iter/sec",
            "range": "stddev: 0.00001502270143860468",
            "extra": "mean: 341.0524953212823 usec\nrounds: 3206"
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
          "id": "9da2a2a7204a89db39f12b4c34deb310a045a5ef",
          "message": "Merge pull request #1363 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@675eecc",
          "timestamp": "2024-02-18T03:20:35Z",
          "tree_id": "51d956f15b64b8de8aa7d638cbfd068ecd6e95bf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9da2a2a7204a89db39f12b4c34deb310a045a5ef"
        },
        "date": 1708227201197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.6060745044029,
            "unit": "iter/sec",
            "range": "stddev: 0.000051638523141608743",
            "extra": "mean: 1.9623000000000201 msec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1112.6664746080744,
            "unit": "iter/sec",
            "range": "stddev: 0.00003777600548170689",
            "extra": "mean: 898.7419166666632 usec\nrounds: 1200"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2926.529743622801,
            "unit": "iter/sec",
            "range": "stddev: 0.000014245629574837359",
            "extra": "mean: 341.7016355904461 usec\nrounds: 3057"
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
          "id": "ca9f40e31db50ef51b27c72c66da4b6f826b7123",
          "message": "Merge pull request #1445 from TeoZosa/dependabot/pip/dot-github/workflows/pip-24.0\n\nBump pip from 23.2.1 to 24.0 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@63bb4a3",
          "timestamp": "2024-02-18T03:27:11Z",
          "tree_id": "be3c1d10e9a93f76cdb613b494c6738ddaeb3886",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ca9f40e31db50ef51b27c72c66da4b6f826b7123"
        },
        "date": 1708227377425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 507.96208718611365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004690481163612412",
            "extra": "mean: 1.9686508604206268 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1084.607901331659,
            "unit": "iter/sec",
            "range": "stddev: 0.000037904893391231946",
            "extra": "mean: 921.9921768707576 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2903.2194111455924,
            "unit": "iter/sec",
            "range": "stddev: 0.000013438569625937101",
            "extra": "mean: 344.4452031978548 usec\nrounds: 3002"
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
          "id": "460f9717fa17b59917476029008b132fa8253dd6",
          "message": "Merge pull request #1444 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-24.0\n\nBump pip from 23.2.1 to 24.0 in /{{cookiecutter.project_slug}}/.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d6ef21c",
          "timestamp": "2024-02-18T03:28:36Z",
          "tree_id": "be3c1d10e9a93f76cdb613b494c6738ddaeb3886",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/460f9717fa17b59917476029008b132fa8253dd6"
        },
        "date": 1708227616775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 485.2718124036992,
            "unit": "iter/sec",
            "range": "stddev: 0.00006651999334007802",
            "extra": "mean: 2.060700775193794 msec\nrounds: 516"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1045.7286286716255,
            "unit": "iter/sec",
            "range": "stddev: 0.000043370405733898",
            "extra": "mean: 956.2710368466111 usec\nrounds: 1167"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2827.3870159753656,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527458483266122",
            "extra": "mean: 353.6834520176324 usec\nrounds: 2949"
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
          "id": "0a49b07d1e392ff6b74a5436936abbc3706205ff",
          "message": "Merge pull request #1292 from TeoZosa/dependabot/pip/structlog-sentry-logger-1.0.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@35a78e5",
          "timestamp": "2024-02-18T03:38:00Z",
          "tree_id": "c6402c1e4fcf539cc40986bf2e1dc2f6fce64cc7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0a49b07d1e392ff6b74a5436936abbc3706205ff"
        },
        "date": 1708228000803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.53705693676443,
            "unit": "iter/sec",
            "range": "stddev: 0.000054923330917461824",
            "extra": "mean: 2.0018534883721113 msec\nrounds: 516"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.8596246631882,
            "unit": "iter/sec",
            "range": "stddev: 0.00003115142886497358",
            "extra": "mean: 920.9293515358211 usec\nrounds: 1172"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2901.9337107036395,
            "unit": "iter/sec",
            "range": "stddev: 0.000011410193328791541",
            "extra": "mean: 344.5978094921842 usec\nrounds: 3013"
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
          "id": "78a60cfd80504b5b762ef6154c8818119ac35b9f",
          "message": "Merge pull request #1347 from TeoZosa/dependabot/github_actions/actions/setup-node-4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@18642e4",
          "timestamp": "2024-02-18T03:48:47Z",
          "tree_id": "83ecc2040f0c0620d4fcbc82481d596f92b702f5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/78a60cfd80504b5b762ef6154c8818119ac35b9f"
        },
        "date": 1708228598659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.02189945536713,
            "unit": "iter/sec",
            "range": "stddev: 0.00014688145211613537",
            "extra": "mean: 1.9999124060150526 msec\nrounds: 532"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1099.7000696861805,
            "unit": "iter/sec",
            "range": "stddev: 0.000033327984279189174",
            "extra": "mean: 909.3388529886773 usec\nrounds: 1238"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2917.8628359738773,
            "unit": "iter/sec",
            "range": "stddev: 0.000015723054341980113",
            "extra": "mean: 342.7165895775344 usec\nrounds: 3243"
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
          "id": "5a827cd25cf4eb699c2fee80c158766b11f5df26",
          "message": "Merge pull request #1379 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-2.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7be2fd7",
          "timestamp": "2024-02-18T03:50:37Z",
          "tree_id": "e2fc6493f449ded7b77bccce44ea949143afaaec",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5a827cd25cf4eb699c2fee80c158766b11f5df26"
        },
        "date": 1708228923734,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.7720092294423,
            "unit": "iter/sec",
            "range": "stddev: 0.00007688502037516548",
            "extra": "mean: 2.0009123791102637 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.275074391586,
            "unit": "iter/sec",
            "range": "stddev: 0.00003672103232509027",
            "extra": "mean: 921.4253820033672 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2880.9507577340523,
            "unit": "iter/sec",
            "range": "stddev: 0.000017749271578734018",
            "extra": "mean: 347.107633587784 usec\nrounds: 3013"
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
          "id": "1db110bd5883bbc6acbdae0e864ed5d54fcea2b1",
          "message": "Merge pull request #1337 from TeoZosa/dependabot/pip/pre-commit-3.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b494afe",
          "timestamp": "2024-02-18T03:52:53Z",
          "tree_id": "b7710ab6ed4b53da5546abf5b2d3e16e319214b8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1db110bd5883bbc6acbdae0e864ed5d54fcea2b1"
        },
        "date": 1708229012111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 504.9799161442502,
            "unit": "iter/sec",
            "range": "stddev: 0.000052070878266329",
            "extra": "mean: 1.9802767754318862 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1093.1540275423004,
            "unit": "iter/sec",
            "range": "stddev: 0.00003374306876353456",
            "extra": "mean: 914.7841702127419 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2919.9810018855824,
            "unit": "iter/sec",
            "range": "stddev: 0.000017954480986847408",
            "extra": "mean: 342.4679815910612 usec\nrounds: 3042"
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
          "id": "25490307a28d37d2ab83f8cb9cbf788165c53572",
          "message": "Merge pull request #1395 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinxcontrib-confluencebuilder-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9cd8560",
          "timestamp": "2024-02-18T03:59:51Z",
          "tree_id": "5f395db71835be26a796c140b5f962ba0b0a8286",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/25490307a28d37d2ab83f8cb9cbf788165c53572"
        },
        "date": 1708232022372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 503.5458999653348,
            "unit": "iter/sec",
            "range": "stddev: 0.000048007131413135165",
            "extra": "mean: 1.985916279069777 msec\nrounds: 516"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.6226724540584,
            "unit": "iter/sec",
            "range": "stddev: 0.00003692296507596262",
            "extra": "mean: 921.1303571428664 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2890.9882264191956,
            "unit": "iter/sec",
            "range": "stddev: 0.000012454638691970119",
            "extra": "mean: 345.90248097918027 usec\nrounds: 3023"
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
          "id": "fba270c7c020ae1bc5fab67bb6f56f3e16813a38",
          "message": "Merge pull request #1299 from TeoZosa/dependabot/github_actions/actions/checkout-4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0760ead",
          "timestamp": "2024-02-18T04:37:46Z",
          "tree_id": "2d149bc7640bccf2220ee9778f475f427d90a9cb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fba270c7c020ae1bc5fab67bb6f56f3e16813a38"
        },
        "date": 1708234393161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.3285200193338,
            "unit": "iter/sec",
            "range": "stddev: 0.00004844049086420531",
            "extra": "mean: 1.9750023166023034 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1097.0632992584415,
            "unit": "iter/sec",
            "range": "stddev: 0.00003146241167875895",
            "extra": "mean: 911.5244313395123 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2933.6112163479406,
            "unit": "iter/sec",
            "range": "stddev: 0.000011328464005064288",
            "extra": "mean: 340.8767986798545 usec\nrounds: 3030"
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
          "id": "84e4257df8b9736cea863731a6a53298d677dde1",
          "message": "Merge pull request #1343 from TeoZosa/dependabot/pip/pytest-mock-3.12.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dd8a545",
          "timestamp": "2024-02-18T04:46:52Z",
          "tree_id": "2d149bc7640bccf2220ee9778f475f427d90a9cb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/84e4257df8b9736cea863731a6a53298d677dde1"
        },
        "date": 1708235586959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 493.4874312438246,
            "unit": "iter/sec",
            "range": "stddev: 0.00017297399431529756",
            "extra": "mean: 2.0263940613026787 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1084.6962168598354,
            "unit": "iter/sec",
            "range": "stddev: 0.000032770439060556046",
            "extra": "mean: 921.917108639847 usec\nrounds: 1169"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2886.6839104028136,
            "unit": "iter/sec",
            "range": "stddev: 0.000014861037785280827",
            "extra": "mean: 346.4182539682559 usec\nrounds: 3024"
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
          "id": "0a2695bdbd1901ccc2f213128ccd913337b9c968",
          "message": "Merge pull request #1372 from TeoZosa/dependabot/pip/pytest-xdist-3.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8eb8c5a",
          "timestamp": "2024-02-18T05:46:02Z",
          "tree_id": "0026c334ddb51ddfbba178d203ad4572c631c420",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0a2695bdbd1901ccc2f213128ccd913337b9c968"
        },
        "date": 1708235941157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 495.37489470873606,
            "unit": "iter/sec",
            "range": "stddev: 0.00006135762501239666",
            "extra": "mean: 2.018673151750992 msec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1075.8125370470898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000562936897216553",
            "extra": "mean: 929.5299743808698 usec\nrounds: 1171"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2846.312170679772,
            "unit": "iter/sec",
            "range": "stddev: 0.000015912497328136744",
            "extra": "mean: 351.33180762852675 usec\nrounds: 3015"
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
          "id": "27676e32b11942dfff48d184fb0e445a2ba24857",
          "message": "Merge pull request #1373 from TeoZosa/dependabot/pip/pygments-2.17.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8eedf34",
          "timestamp": "2024-02-18T05:58:10Z",
          "tree_id": "927e3d5d4c034cc0919c9290e33cb7df125304a7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/27676e32b11942dfff48d184fb0e445a2ba24857"
        },
        "date": 1708236149072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 498.6807583451762,
            "unit": "iter/sec",
            "range": "stddev: 0.00007206898837775303",
            "extra": "mean: 2.0052909266409302 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1073.6487626198173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004367707142515162",
            "extra": "mean: 931.4032994923717 usec\nrounds: 1182"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2881.3874031998616,
            "unit": "iter/sec",
            "range": "stddev: 0.000014632306400155292",
            "extra": "mean: 347.0550328947339 usec\nrounds: 3040"
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
          "id": "b5761c1125ddac7482519cfb6e885b4f09e8e909",
          "message": "Merge pull request #1389 from TeoZosa/dependabot/github_actions/actions/setup-python-5.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c35d21a",
          "timestamp": "2024-02-18T06:09:22Z",
          "tree_id": "0378414bf300777fc3d7b958fc0276c673e8a8a1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b5761c1125ddac7482519cfb6e885b4f09e8e909"
        },
        "date": 1708236955515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.34826809831054,
            "unit": "iter/sec",
            "range": "stddev: 0.000053930495758352834",
            "extra": "mean: 1.974925289575285 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1098.0958517110714,
            "unit": "iter/sec",
            "range": "stddev: 0.000033542728645998415",
            "extra": "mean: 910.6673141891786 usec\nrounds: 1184"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2900.7453205780857,
            "unit": "iter/sec",
            "range": "stddev: 0.000015789506614498847",
            "extra": "mean: 344.73898584130484 usec\nrounds: 3037"
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
          "id": "af29b86f06597a6b7a7af8304a7e6495ae50375d",
          "message": "Merge pull request #1406 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-gh-actions-3.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@580d67b",
          "timestamp": "2024-02-18T06:14:06Z",
          "tree_id": "93e58f3daa32740788b2e94c37ff7ae5a2109ed3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af29b86f06597a6b7a7af8304a7e6495ae50375d"
        },
        "date": 1708237298574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 511.0814952606016,
            "unit": "iter/sec",
            "range": "stddev: 0.000047544708433061296",
            "extra": "mean: 1.9566351145037988 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1095.3675733363305,
            "unit": "iter/sec",
            "range": "stddev: 0.00003610287039863506",
            "extra": "mean: 912.9355518112932 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2835.2550687810976,
            "unit": "iter/sec",
            "range": "stddev: 0.000039962320077627544",
            "extra": "mean: 352.70195299568206 usec\nrounds: 3021"
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
          "id": "3bab03754ba79c0b222ae2db77789297f83c90cc",
          "message": "Merge pull request #1419 from TeoZosa/dependabot/pip/sphinxcontrib-apidoc-0.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d4a0b54",
          "timestamp": "2024-02-18T06:17:05Z",
          "tree_id": "1d352e9f2d53100b903195bd49ad3ff16ee1950e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3bab03754ba79c0b222ae2db77789297f83c90cc"
        },
        "date": 1708237454973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.89748172557336,
            "unit": "iter/sec",
            "range": "stddev: 0.00009740206386648349",
            "extra": "mean: 1.9727854961832003 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1101.003582853005,
            "unit": "iter/sec",
            "range": "stddev: 0.000032704523529880726",
            "extra": "mean: 908.2622577927706 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2928.949302848204,
            "unit": "iter/sec",
            "range": "stddev: 0.000013248693494170839",
            "extra": "mean: 341.41936121173836 usec\nrounds: 3037"
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
          "id": "7109f05c22bbb3ed5a62544bfb433de462491efd",
          "message": "Merge pull request #1381 from TeoZosa/dependabot/pip/sphinx-rtd-theme-2.0.0\n\nBump sphinx-rtd-theme from 1.3.0 to 2.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d7ee422",
          "timestamp": "2024-02-18T07:13:10Z",
          "tree_id": "67c2fbb39681db2a6e2e44586c3402cdda2d4aab",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7109f05c22bbb3ed5a62544bfb433de462491efd"
        },
        "date": 1708240874798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.7179104819614,
            "unit": "iter/sec",
            "range": "stddev: 0.000056201684531784574",
            "extra": "mean: 1.9657259541984595 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1098.7935750237955,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712871785645669",
            "extra": "mean: 910.0890492359714 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2884.331513005979,
            "unit": "iter/sec",
            "range": "stddev: 0.000015357980919296272",
            "extra": "mean: 346.70078508341254 usec\nrounds: 3057"
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
          "id": "8908e3f89ecdf1eb5470a3ce6ffe3fe78d4a6200",
          "message": "Merge pull request #1399 from TeoZosa/dependabot/pip/mypy-1.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b5d0c30",
          "timestamp": "2024-02-18T07:19:52Z",
          "tree_id": "710ac077e24595bf3f686fc5fcb09e43d8dbf7a9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8908e3f89ecdf1eb5470a3ce6ffe3fe78d4a6200"
        },
        "date": 1708241186093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 507.22656691146227,
            "unit": "iter/sec",
            "range": "stddev: 0.00005400122031844473",
            "extra": "mean: 1.971505566218799 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.8296963759776,
            "unit": "iter/sec",
            "range": "stddev: 0.00004151978412629371",
            "extra": "mean: 917.5745562130585 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2897.9530794616594,
            "unit": "iter/sec",
            "range": "stddev: 0.000015402803884310836",
            "extra": "mean: 345.0711493871964 usec\nrounds: 3019"
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
          "id": "0d1fba88198be59129d9a0ca4bb424523268dd78",
          "message": "Merge pull request #1456 from TeoZosa/dependabot/pip/tox-4.13.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@85f44a6",
          "timestamp": "2024-02-18T07:23:23Z",
          "tree_id": "e97986e77e5969b34a34a2fefb3c40034fbd69fc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0d1fba88198be59129d9a0ca4bb424523268dd78"
        },
        "date": 1708241556408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.3963332485241,
            "unit": "iter/sec",
            "range": "stddev: 0.000050234063974790045",
            "extra": "mean: 1.9786451428571388 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1106.1696845767417,
            "unit": "iter/sec",
            "range": "stddev: 0.00004758128688012356",
            "extra": "mean: 904.020435510881 usec\nrounds: 1194"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2857.903598920494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001634844500479798",
            "extra": "mean: 349.9068339385998 usec\nrounds: 3029"
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
          "id": "edfc5bd2a5c7d6e6adc13390461c3afbda5a7992",
          "message": "Merge pull request #1402 from TeoZosa/dependabot/pip/importlib-metadata-7.0.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@baeb1e2",
          "timestamp": "2024-02-18T07:28:13Z",
          "tree_id": "6445c8461aaf47ecb4677b89c49ed4d7bb1b6ed5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/edfc5bd2a5c7d6e6adc13390461c3afbda5a7992"
        },
        "date": 1708241774986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.6896016468575,
            "unit": "iter/sec",
            "range": "stddev: 0.00007090852923627344",
            "extra": "mean: 1.9932643545279345 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1083.773583795619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000476002438387289",
            "extra": "mean: 922.7019508057899 usec\nrounds: 1179"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2895.1621228599147,
            "unit": "iter/sec",
            "range": "stddev: 0.000013638160200364439",
            "extra": "mean: 345.4038003965646 usec\nrounds: 3026"
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
          "id": "3add8ee9fd90917537aaa1647b7df5c1860f0882",
          "message": "Merge pull request #1455 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.13.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@21c949a",
          "timestamp": "2024-02-18T07:30:46Z",
          "tree_id": "2424104768b6919887b798d53971864c19751bc7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3add8ee9fd90917537aaa1647b7df5c1860f0882"
        },
        "date": 1708241927469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 496.59210068928405,
            "unit": "iter/sec",
            "range": "stddev: 0.00005873268593813343",
            "extra": "mean: 2.013725145067695 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1077.397273392948,
            "unit": "iter/sec",
            "range": "stddev: 0.0002185818193090742",
            "extra": "mean: 928.16273504275 usec\nrounds: 1170"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2865.7276591100226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684273250309768",
            "extra": "mean: 348.9515121302765 usec\nrounds: 3009"
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
          "id": "f18febfc3780656303ada5cd5509e8d5d4b166c5",
          "message": "Merge pull request #1423 from TeoZosa/dependabot/github_actions/actions/cache-4\n\nBump actions/cache from 3 to 4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0e4a69a",
          "timestamp": "2024-02-18T07:43:34Z",
          "tree_id": "060ea2ca250dcd6cc27158a9a0a56a485c873488",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f18febfc3780656303ada5cd5509e8d5d4b166c5"
        },
        "date": 1708242659116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.0636950182095,
            "unit": "iter/sec",
            "range": "stddev: 0.00006196811863318199",
            "extra": "mean: 1.9917791505791524 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1080.0993985851874,
            "unit": "iter/sec",
            "range": "stddev: 0.00003968745256005261",
            "extra": "mean: 925.840715502565 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2871.8739809460926,
            "unit": "iter/sec",
            "range": "stddev: 0.000013922509053610049",
            "extra": "mean: 348.20469374166834 usec\nrounds: 3004"
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
          "id": "47d3ca6f85ea66cf73855b1e52f7a4b7d1274f69",
          "message": "Merge pull request #1447 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.12.2-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6d934d7",
          "timestamp": "2024-02-19T01:59:06Z",
          "tree_id": "ef8dc6b6a74d5e98239c60a4fca4ec32bb079285",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/47d3ca6f85ea66cf73855b1e52f7a4b7d1274f69"
        },
        "date": 1708308494896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 512.3294617394608,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135738144255772",
            "extra": "mean: 1.95186901140684 msec\nrounds: 526"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1100.6487918347789,
            "unit": "iter/sec",
            "range": "stddev: 0.00003288831378634976",
            "extra": "mean: 908.5550335570734 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2929.573793491442,
            "unit": "iter/sec",
            "range": "stddev: 0.000017718792036237433",
            "extra": "mean: 341.34658161595866 usec\nrounds: 3057"
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
          "id": "07c34d521b9ffacafe1583222254e8f265230477",
          "message": ":bookmark: Bump version number to `0.6.1`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@39d3399",
          "timestamp": "2024-02-19T02:32:24Z",
          "tree_id": "518cebb2de794a824434efd737741905ae5b41f6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/07c34d521b9ffacafe1583222254e8f265230477"
        },
        "date": 1708310329065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.1287169078532,
            "unit": "iter/sec",
            "range": "stddev: 0.00007056496484317165",
            "extra": "mean: 1.964139846743293 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1090.7454374302322,
            "unit": "iter/sec",
            "range": "stddev: 0.00002854250543448591",
            "extra": "mean: 916.8042016806177 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2883.414570886553,
            "unit": "iter/sec",
            "range": "stddev: 0.000013591680443102058",
            "extra": "mean: 346.8110378912782 usec\nrounds: 3035"
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
          "id": "72f883a2be525f8c277dd0ca881755c355b53051",
          "message": "Merge pull request #1447 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.12.2-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6d934d7",
          "timestamp": "2024-02-19T03:48:40Z",
          "tree_id": "ef8dc6b6a74d5e98239c60a4fca4ec32bb079285",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/72f883a2be525f8c277dd0ca881755c355b53051"
        },
        "date": 1708314736061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 504.4648028733825,
            "unit": "iter/sec",
            "range": "stddev: 0.00004442371047449378",
            "extra": "mean: 1.9822988527724772 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1099.0417648800405,
            "unit": "iter/sec",
            "range": "stddev: 0.00003163694220376884",
            "extra": "mean: 909.8835294117773 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2871.8418582614017,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528278735100024",
            "extra": "mean: 348.2085885486031 usec\nrounds: 3004"
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
          "id": "5a011de159a7ef74ea140a550af882947c1a52da",
          "message": ":bookmark: Bump version number to `0.7.0`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c0935ab",
          "timestamp": "2024-02-19T04:08:12Z",
          "tree_id": "247b2f75e371555fd241228e19489d14ddc5b8de",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5a011de159a7ef74ea140a550af882947c1a52da"
        },
        "date": 1708315918247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.8874725900516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000653453199906351",
            "extra": "mean: 1.9924785028790974 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1076.9399681718696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003498779375662223",
            "extra": "mean: 928.556864406772 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2880.020517407108,
            "unit": "iter/sec",
            "range": "stddev: 0.00001604565387499297",
            "extra": "mean: 347.2197485941188 usec\nrounds: 3023"
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
          "id": "47d3ca6f85ea66cf73855b1e52f7a4b7d1274f69",
          "message": "Merge pull request #1447 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.12.2-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6d934d7",
          "timestamp": "2024-02-19T01:59:06Z",
          "tree_id": "ef8dc6b6a74d5e98239c60a4fca4ec32bb079285",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/47d3ca6f85ea66cf73855b1e52f7a4b7d1274f69"
        },
        "date": 1708316054717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.0750836282131,
            "unit": "iter/sec",
            "range": "stddev: 0.00004717155154472963",
            "extra": "mean: 1.9799036468330362 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1087.1133053532346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000346855738441974",
            "extra": "mean: 919.8673174872705 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2885.3647727621706,
            "unit": "iter/sec",
            "range": "stddev: 0.000013547541627091223",
            "extra": "mean: 346.5766302548625 usec\nrounds: 3021"
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
          "id": "3456e7f2834f4f4d05ff363d5db2f10f9a00bd54",
          "message": ":bookmark: Bump version number to `0.7.0`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c0935ab",
          "timestamp": "2024-02-19T04:11:49Z",
          "tree_id": "247b2f75e371555fd241228e19489d14ddc5b8de",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3456e7f2834f4f4d05ff363d5db2f10f9a00bd54"
        },
        "date": 1708316328159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.3266356094822,
            "unit": "iter/sec",
            "range": "stddev: 0.000039855137994588545",
            "extra": "mean: 1.9947074999999976 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1087.7141454347689,
            "unit": "iter/sec",
            "range": "stddev: 0.000035705259561553245",
            "extra": "mean: 919.3591939546684 usec\nrounds: 1191"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2906.647486552776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001410789733528815",
            "extra": "mean: 344.0389674449238 usec\nrounds: 3041"
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
          "id": "c9595eb6e3d7a2acd84085632ab42d8e61e317ec",
          "message": "Merge pull request #1458 from TeoZosa/dependabot/pip/hypothesis-6.98.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2dfecd3",
          "timestamp": "2024-02-19T15:04:38Z",
          "tree_id": "bd2d6679fedbe05c65508edcce75a63991ea8a0b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c9595eb6e3d7a2acd84085632ab42d8e61e317ec"
        },
        "date": 1708355340763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 496.4781383322996,
            "unit": "iter/sec",
            "range": "stddev: 0.00006992941950271425",
            "extra": "mean: 2.014187378640802 msec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1079.450838691446,
            "unit": "iter/sec",
            "range": "stddev: 0.000035260686022953096",
            "extra": "mean: 926.3969827586038 usec\nrounds: 1160"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2882.378923404738,
            "unit": "iter/sec",
            "range": "stddev: 0.000012294439832167255",
            "extra": "mean: 346.93564814815363 usec\nrounds: 3024"
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
          "id": "caf8412d02db184ef3ed4723afeb590d9faf295b",
          "message": "Merge pull request #1460 from TeoZosa/dependabot/pip/structlog-sentry-logger-1.0.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a47a924",
          "timestamp": "2024-02-20T14:58:40Z",
          "tree_id": "2692a153ca1af4a9fd6b739e9265c00bef422407",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/caf8412d02db184ef3ed4723afeb590d9faf295b"
        },
        "date": 1708441531967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 497.69137752582304,
            "unit": "iter/sec",
            "range": "stddev: 0.00008079412076936022",
            "extra": "mean: 2.0092773255813827 msec\nrounds: 516"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1045.8616617432199,
            "unit": "iter/sec",
            "range": "stddev: 0.00011449868471828047",
            "extra": "mean: 956.1493996569502 usec\nrounds: 1166"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2854.479195061398,
            "unit": "iter/sec",
            "range": "stddev: 0.000033435908141221404",
            "extra": "mean: 350.32660309107297 usec\nrounds: 3041"
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
          "id": "09d7de2daf2ea7924d9b2ae333705263989012bd",
          "message": "Merge pull request #1461 from TeoZosa/dependabot/pip/hypothesis-6.98.9\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fbc41cc",
          "timestamp": "2024-02-20T15:04:04Z",
          "tree_id": "fe44c1b8e341df489da81bc65541b436cff0a27d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/09d7de2daf2ea7924d9b2ae333705263989012bd"
        },
        "date": 1708441718021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.1269140720682,
            "unit": "iter/sec",
            "range": "stddev: 0.00004498139449056124",
            "extra": "mean: 2.003498452611216 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1091.0306882278471,
            "unit": "iter/sec",
            "range": "stddev: 0.00004090825544241293",
            "extra": "mean: 916.5645025295232 usec\nrounds: 1186"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2841.79868030371,
            "unit": "iter/sec",
            "range": "stddev: 0.000016228395150503357",
            "extra": "mean: 351.8898108197895 usec\nrounds: 3013"
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
          "id": "06da93741d841400731e3279c1dac08979a60142",
          "message": "Merge pull request #1462 from TeoZosa/dependabot/pip/structlog-sentry-logger-1.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@93ea746",
          "timestamp": "2024-02-22T14:19:59Z",
          "tree_id": "6e2f55f4d7acaba68432f28d4096cd6a180ca82a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/06da93741d841400731e3279c1dac08979a60142"
        },
        "date": 1708611784765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 495.2321829332792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000742630214218736",
            "extra": "mean: 2.0192548757170052 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1072.8949782327018,
            "unit": "iter/sec",
            "range": "stddev: 0.0002184114544726233",
            "extra": "mean: 932.057675996605 usec\nrounds: 1179"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2858.578457148518,
            "unit": "iter/sec",
            "range": "stddev: 0.00001900652939168662",
            "extra": "mean: 349.8242273180487 usec\nrounds: 3009"
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
          "id": "40f6611b43c39d60a8f9ad7fe1fbd3fb9f5a3262",
          "message": "Merge pull request #1463 from TeoZosa/dependabot/pip/hypothesis-6.98.10\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8abb5e5",
          "timestamp": "2024-02-23T14:41:28Z",
          "tree_id": "332b341222a4ea4b9e6d53c93ca7c9e0f4195d72",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/40f6611b43c39d60a8f9ad7fe1fbd3fb9f5a3262"
        },
        "date": 1708699419620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.16333676627795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004797711570150078",
            "extra": "mean: 1.9678712092130621 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1113.7076773490317,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363310368168627",
            "extra": "mean: 897.9016849199683 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2873.4896852914785,
            "unit": "iter/sec",
            "range": "stddev: 0.000015660072574399336",
            "extra": "mean: 348.0089053803452 usec\nrounds: 3234"
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
          "id": "f3572d9989bf847b0aba93e277d0e1784f37dcec",
          "message": "Merge pull request #1464 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f3ee685",
          "timestamp": "2024-02-26T14:14:50Z",
          "tree_id": "3b5d008446a61ee619be41bf55c55530e18cfa64",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f3572d9989bf847b0aba93e277d0e1784f37dcec"
        },
        "date": 1708957390820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 497.382178882782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004957316359646901",
            "extra": "mean: 2.010526396917148 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1087.4566999177518,
            "unit": "iter/sec",
            "range": "stddev: 0.00003419493869616543",
            "extra": "mean: 919.5768439107813 usec\nrounds: 1166"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2925.8651740291693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011499771765592053",
            "extra": "mean: 341.7792483660187 usec\nrounds: 3060"
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
          "id": "f3897a2d75a0d30f041928fa4b5bc9ca5bda7c3c",
          "message": "Merge pull request #1465 from TeoZosa/dependabot/pip/docs/poetry-1.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@11b6601",
          "timestamp": "2024-02-26T14:47:53Z",
          "tree_id": "9ed2d7a9019cafcf152267262c370ec5f7978afc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f3897a2d75a0d30f041928fa4b5bc9ca5bda7c3c"
        },
        "date": 1708959425799,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 494.6913375800535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000714968858226203",
            "extra": "mean: 2.0214625242718642 msec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1079.681802348831,
            "unit": "iter/sec",
            "range": "stddev: 0.0001698590988007191",
            "extra": "mean: 926.1988095238019 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2861.3118715943788,
            "unit": "iter/sec",
            "range": "stddev: 0.000015653159062635737",
            "extra": "mean: 349.49003984063455 usec\nrounds: 3012"
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
          "id": "eec3cb1e9a0c18eedf24f71af6625f0db100e2cb",
          "message": "Merge pull request #1467 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@70bd563",
          "timestamp": "2024-02-26T14:49:23Z",
          "tree_id": "e7fb6357eea260a10eab2e92269d2816bf2b7287",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/eec3cb1e9a0c18eedf24f71af6625f0db100e2cb"
        },
        "date": 1708960037919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 491.71244081357975,
            "unit": "iter/sec",
            "range": "stddev: 0.00015495754697576397",
            "extra": "mean: 2.033708966861639 msec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1075.009422329639,
            "unit": "iter/sec",
            "range": "stddev: 0.00004041399557011123",
            "extra": "mean: 930.2244047618793 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2892.136989388046,
            "unit": "iter/sec",
            "range": "stddev: 0.000012828692889385817",
            "extra": "mean: 345.765087777392 usec\nrounds: 3019"
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
          "id": "b07f6e2a885d82a2e508bc65677ca009a192b74b",
          "message": "Merge pull request #1468 from TeoZosa/dependabot/pip/pytest-8.0.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5b0b867",
          "timestamp": "2024-02-26T15:33:01Z",
          "tree_id": "10f6d040b9e0f34ad18fc0851b947ce5636e4fd4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b07f6e2a885d82a2e508bc65677ca009a192b74b"
        },
        "date": 1708963395627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.718875406708,
            "unit": "iter/sec",
            "range": "stddev: 0.00004910186683019659",
            "extra": "mean: 1.9971286266924766 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1080.7619592376143,
            "unit": "iter/sec",
            "range": "stddev: 0.000038777789111970915",
            "extra": "mean: 925.2731292517134 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2883.1023980750865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001371416550480762",
            "extra": "mean: 346.848589445749 usec\nrounds: 3013"
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
          "id": "30724e2c668daec325eda4d72f47504df008f5b3",
          "message": "Merge pull request #1469 from TeoZosa/dependabot/pip/hypothesis-6.98.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d811650",
          "timestamp": "2024-02-26T15:51:14Z",
          "tree_id": "9b95f55f34f6045d3d6cf6de9bc7003db6bf8127",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/30724e2c668daec325eda4d72f47504df008f5b3"
        },
        "date": 1708964089320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.88978229312903,
            "unit": "iter/sec",
            "range": "stddev: 0.00005912107674872954",
            "extra": "mean: 1.9885072936660122 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1103.4075712876424,
            "unit": "iter/sec",
            "range": "stddev: 0.00003665383457278453",
            "extra": "mean: 906.2834314550071 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2921.912043585943,
            "unit": "iter/sec",
            "range": "stddev: 0.000021297719713808607",
            "extra": "mean: 342.2416503587633 usec\nrounds: 3066"
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
          "id": "19c7367ac63db6c947bb1b7cd61521860f461f43",
          "message": "Merge pull request #1470 from TeoZosa/dependabot/pip/orjson-3.9.15\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a9eeeeb",
          "timestamp": "2024-02-26T21:39:31Z",
          "tree_id": "9752935b8e788db4fb363f9dc55fc1d10e0f59aa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/19c7367ac63db6c947bb1b7cd61521860f461f43"
        },
        "date": 1708983836210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.98580234856314,
            "unit": "iter/sec",
            "range": "stddev: 0.00006423976759970042",
            "extra": "mean: 1.9763400383141991 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1103.6014473290827,
            "unit": "iter/sec",
            "range": "stddev: 0.00003758157248289381",
            "extra": "mean: 906.1242194092648 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2898.275971022966,
            "unit": "iter/sec",
            "range": "stddev: 0.000014620267263315475",
            "extra": "mean: 345.0327056491598 usec\nrounds: 3027"
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
          "id": "46680f0753f22f4dee2c4c182696d7d7d275dcab",
          "message": "Merge pull request #1471 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.8.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2131c42",
          "timestamp": "2024-02-27T14:17:41Z",
          "tree_id": "7a9e3240042592e53b4bb842f5ebe3f0b4f35fca",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/46680f0753f22f4dee2c4c182696d7d7d275dcab"
        },
        "date": 1709043651985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.6110303835104,
            "unit": "iter/sec",
            "range": "stddev: 0.000048854518204348495",
            "extra": "mean: 1.9739009615384575 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1102.536245177119,
            "unit": "iter/sec",
            "range": "stddev: 0.00003960009204033286",
            "extra": "mean: 906.9996604414152 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2871.19407143348,
            "unit": "iter/sec",
            "range": "stddev: 0.000015692043116016194",
            "extra": "mean: 348.28714991764286 usec\nrounds: 3035"
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
          "id": "e12abd50d21b88ff9b891963ece2ad267eadc18e",
          "message": "Merge pull request #1472 from TeoZosa/dependabot/pip/hypothesis-6.98.13\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1ec5523",
          "timestamp": "2024-02-27T14:22:31Z",
          "tree_id": "df6fa6f6456f1a2637a40c572674a5b6d978326a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e12abd50d21b88ff9b891963ece2ad267eadc18e"
        },
        "date": 1709044072775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.4830270899875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004263276277184341",
            "extra": "mean: 1.9783057915057893 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1087.4003300623017,
            "unit": "iter/sec",
            "range": "stddev: 0.00003762631662979403",
            "extra": "mean: 919.6245139475964 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2922.204733895704,
            "unit": "iter/sec",
            "range": "stddev: 0.000013521480625537727",
            "extra": "mean: 342.207371167612 usec\nrounds: 3066"
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
          "id": "a92f83282188b5dd2a8a35ab4afaf5e5a1382af2",
          "message": "Merge pull request #1473 from TeoZosa/dependabot/pip/poetry-1.8.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@73d1f92",
          "timestamp": "2024-02-27T14:27:39Z",
          "tree_id": "0dc6582b955abde31c3e27f39eb5860ff233d6cb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a92f83282188b5dd2a8a35ab4afaf5e5a1382af2"
        },
        "date": 1709044728688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 497.58670448325546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000850601825248526",
            "extra": "mean: 2.009700000000003 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1091.8345377768635,
            "unit": "iter/sec",
            "range": "stddev: 0.00003191596656558028",
            "extra": "mean: 915.8896933560536 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2870.7416098419694,
            "unit": "iter/sec",
            "range": "stddev: 0.000012796427810855583",
            "extra": "mean: 348.3420439414081 usec\nrounds: 3004"
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
          "id": "953c294dd866c4bf6bb9f976c51a6a0845c62ea2",
          "message": "Merge pull request #1474 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5b1776a",
          "timestamp": "2024-02-27T15:03:26Z",
          "tree_id": "5767f0bd7dd24a88088f1d63fe35469d2288285f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/953c294dd866c4bf6bb9f976c51a6a0845c62ea2"
        },
        "date": 1709047033031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.3702507025448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008130551336112365",
            "extra": "mean: 1.9945339768339876 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1090.213348361036,
            "unit": "iter/sec",
            "range": "stddev: 0.000049851940641992745",
            "extra": "mean: 917.2516567544715 usec\nrounds: 1177"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2885.2053125698017,
            "unit": "iter/sec",
            "range": "stddev: 0.000012985550715326901",
            "extra": "mean: 346.59578493196295 usec\nrounds: 3013"
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
          "id": "ba214fcad385375331cd6b5df355e6284e1ddef9",
          "message": "Merge pull request #1475 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.8.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bf2afd5",
          "timestamp": "2024-02-27T15:04:40Z",
          "tree_id": "5767f0bd7dd24a88088f1d63fe35469d2288285f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ba214fcad385375331cd6b5df355e6284e1ddef9"
        },
        "date": 1709047146814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 515.2528694352404,
            "unit": "iter/sec",
            "range": "stddev: 0.000060519996689058015",
            "extra": "mean: 1.9407946259398465 msec\nrounds: 532"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1095.9567324916939,
            "unit": "iter/sec",
            "range": "stddev: 0.00003964143744715023",
            "extra": "mean: 912.4447803030207 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2926.732372473132,
            "unit": "iter/sec",
            "range": "stddev: 0.000012244744178858295",
            "extra": "mean: 341.67797828230715 usec\nrounds: 3039"
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
          "id": "11e434df495c215da16cdfa294bba2657a4c1881",
          "message": "Merge pull request #1459 from TeoZosa/dependabot/pip/myst-parser-2.0.0\n\n⬆️ Bump myst-parser from 1.0.0 to 2.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c2efb35",
          "timestamp": "2024-02-28T02:39:23Z",
          "tree_id": "839f3c6ccf88000e089173701cfb118ad5cc56f2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/11e434df495c215da16cdfa294bba2657a4c1881"
        },
        "date": 1709088056331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 495.30706121411686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005324480332470263",
            "extra": "mean: 2.018949613899627 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1082.2756674325883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002819535703871197",
            "extra": "mean: 923.9790102388929 usec\nrounds: 1172"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2875.2573303186864,
            "unit": "iter/sec",
            "range": "stddev: 0.000015090716046500098",
            "extra": "mean: 347.7949571522916 usec\nrounds: 3034"
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
          "id": "68d4bcfe04c8137fef2b03e8c4706aedebd40d5b",
          "message": "Merge pull request #1477 from TeoZosa/dependabot/pip/hypothesis-6.98.15\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@afe1899",
          "timestamp": "2024-02-29T14:34:02Z",
          "tree_id": "68406059c11493899f919c827794c1f79ae9cec1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/68d4bcfe04c8137fef2b03e8c4706aedebd40d5b"
        },
        "date": 1709217550496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.41191981047484,
            "unit": "iter/sec",
            "range": "stddev: 0.000033807335066458916",
            "extra": "mean: 1.9630479011406858 msec\nrounds: 526"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1095.0419352783724,
            "unit": "iter/sec",
            "range": "stddev: 0.000028596640089741385",
            "extra": "mean: 913.2070359897114 usec\nrounds: 1167"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2867.7952607545676,
            "unit": "iter/sec",
            "range": "stddev: 0.000014110751183853864",
            "extra": "mean: 348.6999276708765 usec\nrounds: 3014"
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
          "id": "b2310b09992da919546b0b40e8a89f6c572ac282",
          "message": "Merge pull request #1478 from TeoZosa/dependabot/pip/docs/poetry-1.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fe9583e",
          "timestamp": "2024-03-04T14:12:47Z",
          "tree_id": "8e97b438f24d8a0256ac1946c2a60e27e5307513",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b2310b09992da919546b0b40e8a89f6c572ac282"
        },
        "date": 1709561951221,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.1274578235556,
            "unit": "iter/sec",
            "range": "stddev: 0.000052150808122892396",
            "extra": "mean: 1.9796983603083138 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1101.2160945091482,
            "unit": "iter/sec",
            "range": "stddev: 0.00002672989872664222",
            "extra": "mean: 908.0869821883016 usec\nrounds: 1179"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2902.8091710380195,
            "unit": "iter/sec",
            "range": "stddev: 0.000014222200407104223",
            "extra": "mean: 344.4938819875674 usec\nrounds: 3059"
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
          "id": "251971ff72ed2bd47a8d77f47d370ad3894bb9e3",
          "message": "Merge pull request #1479 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@128d5a8",
          "timestamp": "2024-03-04T14:28:20Z",
          "tree_id": "5946f4f531f984440c4f8e2a324527b2bdd09ead",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/251971ff72ed2bd47a8d77f47d370ad3894bb9e3"
        },
        "date": 1709563422268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.96421706393795,
            "unit": "iter/sec",
            "range": "stddev: 0.00005464891450853021",
            "extra": "mean: 1.9609218971428786 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1098.142969139096,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502614783932292",
            "extra": "mean: 910.6282406779542 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2903.9149892265564,
            "unit": "iter/sec",
            "range": "stddev: 0.000010259331942698761",
            "extra": "mean: 344.36269784410774 usec\nrounds: 3015"
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
          "id": "56c775c14c40f223b280319bb2b5bb8e564b5dc0",
          "message": "Merge pull request #1480 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1e8fb97",
          "timestamp": "2024-03-04T14:45:33Z",
          "tree_id": "d2c59919b605d1817864706cd2cee2d60ffc294b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/56c775c14c40f223b280319bb2b5bb8e564b5dc0"
        },
        "date": 1709564098011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.5994507398849,
            "unit": "iter/sec",
            "range": "stddev: 0.00006756351289158725",
            "extra": "mean: 1.9896559746093705 msec\nrounds: 512"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.8032479927665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004116658671631332",
            "extra": "mean: 917.5968247863374 usec\nrounds: 1170"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2877.8517387157494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001489034578613566",
            "extra": "mean: 347.4814169705119 usec\nrounds: 3017"
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
          "id": "7044a28040f10a3ff7577dc1c96b02438e00e293",
          "message": "Merge pull request #1481 from TeoZosa/dependabot/pip/pytest-8.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1f509fc",
          "timestamp": "2024-03-04T15:02:04Z",
          "tree_id": "b48e59f384c161fae5740f31ee94d7e7febbfd1a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7044a28040f10a3ff7577dc1c96b02438e00e293"
        },
        "date": 1709564942328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 503.6294450774185,
            "unit": "iter/sec",
            "range": "stddev: 0.000047020353510287185",
            "extra": "mean: 1.9855868432122328 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.5443747362483,
            "unit": "iter/sec",
            "range": "stddev: 0.000030466945045067073",
            "extra": "mean: 917.8148436974631 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2882.0244617485096,
            "unit": "iter/sec",
            "range": "stddev: 0.000010626420949690545",
            "extra": "mean: 346.9783179401972 usec\nrounds: 3010"
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
          "id": "7f95a7747dc082512ccefda741b4c283f2600129",
          "message": "Merge pull request #1483 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b790b75",
          "timestamp": "2024-03-04T15:03:38Z",
          "tree_id": "b48e59f384c161fae5740f31ee94d7e7febbfd1a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7f95a7747dc082512ccefda741b4c283f2600129"
        },
        "date": 1709565279610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.67797532190474,
            "unit": "iter/sec",
            "range": "stddev: 0.000042699036431043965",
            "extra": "mean: 2.0012889288461744 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1101.2387123949268,
            "unit": "iter/sec",
            "range": "stddev: 0.00002945014791253046",
            "extra": "mean: 908.0683313659059 usec\nrounds: 1186"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2911.8927425917786,
            "unit": "iter/sec",
            "range": "stddev: 0.000018120537492956653",
            "extra": "mean: 343.41924253361526 usec\nrounds: 3047"
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
          "id": "cd7ee29cbf0639f6f29cb0ead5f5e1c09cf77fa2",
          "message": "Merge pull request #1482 from TeoZosa/dependabot/pip/hypothesis-6.98.17\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e60291c",
          "timestamp": "2024-03-04T15:19:10Z",
          "tree_id": "d20435580ea2bfac3e29038818784ae1385d38ce",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cd7ee29cbf0639f6f29cb0ead5f5e1c09cf77fa2"
        },
        "date": 1709566037792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.34815082806614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007610553241650412",
            "extra": "mean: 2.0026108003838723 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1100.6888870945218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000396690272811803",
            "extra": "mean: 908.5219372384967 usec\nrounds: 1195"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2852.2454767638687,
            "unit": "iter/sec",
            "range": "stddev: 0.00002267835164848238",
            "extra": "mean: 350.60095919043783 usec\nrounds: 3014"
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
          "id": "d78d99b31e4ab35e463d5099d2e4b2938bb94f3a",
          "message": "Merge pull request #1484 from TeoZosa/dependabot/pip/tox-4.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@640b687",
          "timestamp": "2024-03-06T14:12:45Z",
          "tree_id": "6c9e7113ee6e0bbf9fcd1f89c4a36d27ba2efd4b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d78d99b31e4ab35e463d5099d2e4b2938bb94f3a"
        },
        "date": 1709734620576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.12338577146386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008039939491240223",
            "extra": "mean: 1.9915423745173648 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1082.154415275407,
            "unit": "iter/sec",
            "range": "stddev: 0.000036115793276976946",
            "extra": "mean: 924.0825393162593 usec\nrounds: 1170"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2895.372248586332,
            "unit": "iter/sec",
            "range": "stddev: 0.000021314189169334846",
            "extra": "mean: 345.3787334213247 usec\nrounds: 3031"
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
          "id": "b380618e6807528489f608b55b7a37aac7b6deb6",
          "message": "Merge pull request #1485 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@074293e",
          "timestamp": "2024-03-06T14:44:46Z",
          "tree_id": "7e5260e35e90ab8e9559b0147d747ad48e6c1f1a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b380618e6807528489f608b55b7a37aac7b6deb6"
        },
        "date": 1709736448906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.96570988994876,
            "unit": "iter/sec",
            "range": "stddev: 0.00006538149975419136",
            "extra": "mean: 2.000137169847344 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1091.953522426233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275051590841615",
            "extra": "mean: 915.7898934911447 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2877.7115026582155,
            "unit": "iter/sec",
            "range": "stddev: 0.000014900727483807638",
            "extra": "mean: 347.49835036495995 usec\nrounds: 3014"
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
          "id": "2e50344cdc7517fd08a7879d666cb65e503ed4eb",
          "message": "Merge pull request #1489 from TeoZosa/dependabot/pip/tox-4.14.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e186b2c",
          "timestamp": "2024-03-07T14:30:07Z",
          "tree_id": "b159174d3bd075cf21f7c3276a0c0b6fe9a579a1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2e50344cdc7517fd08a7879d666cb65e503ed4eb"
        },
        "date": 1709822478584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 512.4288516438346,
            "unit": "iter/sec",
            "range": "stddev: 0.00003869674866257794",
            "extra": "mean: 1.9514904299242177 msec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1106.4423082360518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000349960853774921",
            "extra": "mean: 903.7976879194473 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2918.460329676675,
            "unit": "iter/sec",
            "range": "stddev: 0.000018953166723659414",
            "extra": "mean: 342.6464255249226 usec\nrounds: 3048"
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
          "id": "944f7a462a9f3ebe112d0f80464761b3380c4528",
          "message": "Merge pull request #1490 from TeoZosa/dependabot/pip/importlib-metadata-7.0.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@360528c",
          "timestamp": "2024-03-07T14:45:36Z",
          "tree_id": "550b9176f1851ef020fdef0b8a40712c286395b3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/944f7a462a9f3ebe112d0f80464761b3380c4528"
        },
        "date": 1709822999309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 503.38884510667464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004068828838342805",
            "extra": "mean: 1.986535875239919 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1103.6515551908678,
            "unit": "iter/sec",
            "range": "stddev: 0.000026771529167770114",
            "extra": "mean: 906.0830796610057 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2875.355288418478,
            "unit": "iter/sec",
            "range": "stddev: 0.000013095824855799035",
            "extra": "mean: 347.78310841371774 usec\nrounds: 3007"
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
          "id": "eac9d290ed7c286a605c5c6eb24733742ca0ed02",
          "message": "Merge pull request #1491 from TeoZosa/dependabot/pip/importlib-metadata-7.0.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c979373",
          "timestamp": "2024-03-08T14:36:38Z",
          "tree_id": "6a090f721fdb5b705bb4453653a5cb4deb15fab0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/eac9d290ed7c286a605c5c6eb24733742ca0ed02"
        },
        "date": 1709908917434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.4340736831958,
            "unit": "iter/sec",
            "range": "stddev: 0.00007335708638637902",
            "extra": "mean: 1.9745906761904781 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1095.8206079278882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000330775996485566",
            "extra": "mean: 912.5581256323719 usec\nrounds: 1186"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2901.8923000866544,
            "unit": "iter/sec",
            "range": "stddev: 0.00001531852480098854",
            "extra": "mean: 344.6027269758215 usec\nrounds: 3062"
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
          "id": "6e1795714ed77fb1c442c2b582f90a6dae33e319",
          "message": "Merge pull request #1492 from TeoZosa/dependabot/pip/hypothesis-6.99.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7557968",
          "timestamp": "2024-03-11T13:32:01Z",
          "tree_id": "38ed6059f71a90aa38a41ee3cfb69c7dfd9d1564",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6e1795714ed77fb1c442c2b582f90a6dae33e319"
        },
        "date": 1710164369778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 503.0176123111089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000513347986788259",
            "extra": "mean: 1.9880019616122604 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1097.635065693358,
            "unit": "iter/sec",
            "range": "stddev: 0.00003261336144767587",
            "extra": "mean: 911.0496113462962 usec\nrounds: 1181"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2939.846444891095,
            "unit": "iter/sec",
            "range": "stddev: 0.00001163395538664695",
            "extra": "mean: 340.1538205295768 usec\nrounds: 3059"
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
          "id": "fc5d786fe2bc8280425e97eb8b24d8b773d933fc",
          "message": "Merge pull request #1494 from TeoZosa/dependabot/pip/pytest-8.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@42b2273",
          "timestamp": "2024-03-11T13:38:50Z",
          "tree_id": "23f1e230296d4fcde7c105f5d30e87f2a30cef5c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fc5d786fe2bc8280425e97eb8b24d8b773d933fc"
        },
        "date": 1710164580546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 507.36634122798455,
            "unit": "iter/sec",
            "range": "stddev: 0.00008611192237303504",
            "extra": "mean: 1.9709624362934455 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1104.7379911055775,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342401820684181",
            "extra": "mean: 905.192007563024 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2903.9420731315668,
            "unit": "iter/sec",
            "range": "stddev: 0.000011920713430410796",
            "extra": "mean: 344.3594861111039 usec\nrounds: 3024"
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
          "id": "066972512b08f7c1e484eeec607538be2a18d0f5",
          "message": "Merge pull request #1493 from TeoZosa/dependabot/pip/mypy-1.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6ed037a",
          "timestamp": "2024-03-11T13:44:55Z",
          "tree_id": "145abf6423749aa4226ee8c8fc63bdeb1d19ac2d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/066972512b08f7c1e484eeec607538be2a18d0f5"
        },
        "date": 1710164969243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 498.49792403045774,
            "unit": "iter/sec",
            "range": "stddev: 0.00007322950312775602",
            "extra": "mean: 2.00602640812382 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1088.2087005123065,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666430321999692",
            "extra": "mean: 918.9413754266257 usec\nrounds: 1172"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2891.1202715226923,
            "unit": "iter/sec",
            "range": "stddev: 0.000013844436836648355",
            "extra": "mean: 345.8866826987177 usec\nrounds: 2994"
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
          "id": "8fd510ac786cfcde8073b6eddc1b07dcf322fec5",
          "message": "Merge pull request #1496 from TeoZosa/dependabot/pip/hypothesis-6.99.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@40c4484",
          "timestamp": "2024-03-12T14:07:07Z",
          "tree_id": "6c4502f10b7da59ef2b11fdeb1378eb85cd5f466",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8fd510ac786cfcde8073b6eddc1b07dcf322fec5"
        },
        "date": 1710252766511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 507.8543019439388,
            "unit": "iter/sec",
            "range": "stddev: 0.00006915631867245119",
            "extra": "mean: 1.96906868007665 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1103.8550058784092,
            "unit": "iter/sec",
            "range": "stddev: 0.00002766723487548786",
            "extra": "mean: 905.9160801687309 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2894.447570921473,
            "unit": "iter/sec",
            "range": "stddev: 0.000015645331012111462",
            "extra": "mean: 345.4890701929837 usec\nrounds: 3006"
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
          "id": "0b34e670c87ff27b00fc1148429992bc03a0c8ac",
          "message": "Merge pull request #1497 from TeoZosa/dependabot/pip/hypothesis-6.99.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d666691",
          "timestamp": "2024-03-15T13:59:48Z",
          "tree_id": "dcf8b4efe9bb2ecd09f04a5c8fb9a87c19d4a0c8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0b34e670c87ff27b00fc1148429992bc03a0c8ac"
        },
        "date": 1710511452911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 510.06700863096114,
            "unit": "iter/sec",
            "range": "stddev: 0.000036412021207114965",
            "extra": "mean: 1.960526721153829 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1091.9197371798077,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293014126034109",
            "extra": "mean: 915.8182290786166 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2908.159493393497,
            "unit": "iter/sec",
            "range": "stddev: 0.000011313908710020735",
            "extra": "mean: 343.860095112291 usec\nrounds: 3028"
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
          "id": "f11699174f023db3bb8cdebc75b74b8b296bb112",
          "message": "Merge pull request #1498 from TeoZosa/dependabot/pip/hypothesis-6.99.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9629686",
          "timestamp": "2024-03-18T13:31:59Z",
          "tree_id": "b1fae347f0cf93c31303dd359eb89b234f89f1c9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f11699174f023db3bb8cdebc75b74b8b296bb112"
        },
        "date": 1710769012824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.4388236295911,
            "unit": "iter/sec",
            "range": "stddev: 0.00004040295861401152",
            "extra": "mean: 1.9982462446602027 msec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1080.6718214453872,
            "unit": "iter/sec",
            "range": "stddev: 0.00003017924759265418",
            "extra": "mean: 925.3503053892073 usec\nrounds: 1169"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2873.7365194368,
            "unit": "iter/sec",
            "range": "stddev: 0.000012746814846110613",
            "extra": "mean: 347.97901381577657 usec\nrounds: 3040"
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
          "id": "ae5685aa3047ba6e1a04e965d2651362eec0fad7",
          "message": "Merge pull request #1499 from TeoZosa/dependabot/pip/black-24.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@42884e3",
          "timestamp": "2024-03-18T13:38:34Z",
          "tree_id": "0b3b64c01373bd8630887b5c7d3d437f7b141a20",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ae5685aa3047ba6e1a04e965d2651362eec0fad7"
        },
        "date": 1710769355970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.09550363215595,
            "unit": "iter/sec",
            "range": "stddev: 0.000061735977867734",
            "extra": "mean: 1.968133929254305 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1094.0663604538825,
            "unit": "iter/sec",
            "range": "stddev: 0.000035144820507270926",
            "extra": "mean: 914.0213392404659 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2941.5479151854975,
            "unit": "iter/sec",
            "range": "stddev: 0.00001713746318455651",
            "extra": "mean: 339.9570664266874 usec\nrounds: 3056"
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
          "id": "6ade052f01e0e0eb414737cbca9480c7ab891e3c",
          "message": "Merge pull request #1500 from TeoZosa/dependabot/pip/hypothesis-6.99.9\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@152d786",
          "timestamp": "2024-03-19T13:09:26Z",
          "tree_id": "a1da308ec97c762ddc669980cb564951c2be540d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6ade052f01e0e0eb414737cbca9480c7ab891e3c"
        },
        "date": 1710854082088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 498.2764617189167,
            "unit": "iter/sec",
            "range": "stddev: 0.000056107710212852934",
            "extra": "mean: 2.00691799999999 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1100.3117009609855,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778500158264135",
            "extra": "mean: 908.8333779661021 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2858.280913270146,
            "unit": "iter/sec",
            "range": "stddev: 0.000014194093427897824",
            "extra": "mean: 349.86064363278575 usec\nrounds: 3039"
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
          "id": "62c5277e33119489b6583fca5c8801c8936a86d1",
          "message": "Merge pull request #1501 from TeoZosa/dependabot/pip/docs/importlib-metadata-7.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@96ec859",
          "timestamp": "2024-03-21T13:35:43Z",
          "tree_id": "1683d240141ad2ec1e83b65fa18c000aa3d7e959",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/62c5277e33119489b6583fca5c8801c8936a86d1"
        },
        "date": 1711029062882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.4794943255769,
            "unit": "iter/sec",
            "range": "stddev: 0.00007153905446898203",
            "extra": "mean: 1.9783196177606066 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.1767234770555,
            "unit": "iter/sec",
            "range": "stddev: 0.00004614964836028146",
            "extra": "mean: 918.1246518082297 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2941.240862693087,
            "unit": "iter/sec",
            "range": "stddev: 0.000010213823757114008",
            "extra": "mean: 339.99255643564345 usec\nrounds: 3030"
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
          "id": "99caf45c89c2e02e40724196ebdd616ed7f509ca",
          "message": "Merge pull request #1502 from TeoZosa/dependabot/pip/importlib-metadata-7.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@be5299a",
          "timestamp": "2024-03-21T13:49:41Z",
          "tree_id": "bc23a0c3ceb134dbe06f660b47c6821c5c1fffd2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/99caf45c89c2e02e40724196ebdd616ed7f509ca"
        },
        "date": 1711029762960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.2061062200429,
            "unit": "iter/sec",
            "range": "stddev: 0.0000664143575162247",
            "extra": "mean: 1.9754799235181681 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1091.906007856588,
            "unit": "iter/sec",
            "range": "stddev: 0.000043432619581036",
            "extra": "mean: 915.8297443229573 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2913.5236945897045,
            "unit": "iter/sec",
            "range": "stddev: 0.000013565391910315268",
            "extra": "mean: 343.2270009874845 usec\nrounds: 3038"
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
          "id": "96e75e15a00060d6771c02a0abb835f48380e989",
          "message": "Merge pull request #1504 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/importlib-metadata-7.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4a28651",
          "timestamp": "2024-03-21T13:51:36Z",
          "tree_id": "773119960c1c45e1c9f3c3407242f3a2285572e1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/96e75e15a00060d6771c02a0abb835f48380e989"
        },
        "date": 1711030425372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.4357934590436,
            "unit": "iter/sec",
            "range": "stddev: 0.00006654424963881126",
            "extra": "mean: 1.9982583441682644 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1093.7026626062348,
            "unit": "iter/sec",
            "range": "stddev: 0.000043015036711113405",
            "extra": "mean: 914.3252861952934 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2883.74530403686,
            "unit": "iter/sec",
            "range": "stddev: 0.00001362943804138251",
            "extra": "mean: 346.7712625661264 usec\nrounds: 3024"
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
          "id": "58b5dd458f444a8e67dd7fcf1029afbc299728d9",
          "message": "Merge pull request #1503 from TeoZosa/dependabot/pip/hypothesis-6.99.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2905a11",
          "timestamp": "2024-03-21T14:23:15Z",
          "tree_id": "add2c75fa456944f69ff9873e00c5f4bb2a94827",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/58b5dd458f444a8e67dd7fcf1029afbc299728d9"
        },
        "date": 1711031775519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 504.0755098574463,
            "unit": "iter/sec",
            "range": "stddev: 0.00005431126753633631",
            "extra": "mean: 1.9838297644787428 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1087.1677852921805,
            "unit": "iter/sec",
            "range": "stddev: 0.00004281071401268528",
            "extra": "mean: 919.8212212765726 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2893.8782930211296,
            "unit": "iter/sec",
            "range": "stddev: 0.00001434429521591404",
            "extra": "mean: 345.5570341059601 usec\nrounds: 3020"
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
          "id": "a386f58c3e7167edcda6432bffdd62ab7ff5caa9",
          "message": "Merge pull request #1505 from TeoZosa/dependabot/pip/pytest-mock-3.14.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f8d8fb8",
          "timestamp": "2024-03-22T13:29:25Z",
          "tree_id": "165fefe61b50c601a78e7c890fa1e9b2c31ce361",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a386f58c3e7167edcda6432bffdd62ab7ff5caa9"
        },
        "date": 1711114481787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 498.90317725650596,
            "unit": "iter/sec",
            "range": "stddev: 0.00005676092454595237",
            "extra": "mean: 2.004396936293433 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.5318095038085,
            "unit": "iter/sec",
            "range": "stddev: 0.000029604448996344424",
            "extra": "mean: 917.8254285713946 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2873.128028662634,
            "unit": "iter/sec",
            "range": "stddev: 0.000013881605994122856",
            "extra": "mean: 348.0527111997421 usec\nrounds: 3009"
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
          "id": "6fa831b84c52210f6a84ff32858870c4069e187c",
          "message": "Merge pull request #1476 from TeoZosa/dependabot/pip/sphinx-7.1.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@82c0fb6",
          "timestamp": "2024-03-22T23:56:33Z",
          "tree_id": "01c3d5f6bb504353601bca9726590766ae2c79f8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6fa831b84c52210f6a84ff32858870c4069e187c"
        },
        "date": 1711152197082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.87495366330137,
            "unit": "iter/sec",
            "range": "stddev: 0.00004332348929613378",
            "extra": "mean: 1.9651193142857115 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1104.9427855202819,
            "unit": "iter/sec",
            "range": "stddev: 0.000027343233596160023",
            "extra": "mean: 905.0242357382626 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2871.212292483298,
            "unit": "iter/sec",
            "range": "stddev: 0.000011952679533412816",
            "extra": "mean: 348.2849396465577 usec\nrounds: 2999"
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
          "id": "2d8ab803c1f3b61cb2c8e402bcd9b0827f1b1317",
          "message": "Merge pull request #1495 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-5f02448\n\n⬆️ Bump python from `5c73034` to `5f02448` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@000a1eb",
          "timestamp": "2024-03-23T01:03:08Z",
          "tree_id": "388b8df99b4b1d65d32208c42af9813d1ae39f49",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2d8ab803c1f3b61cb2c8e402bcd9b0827f1b1317"
        },
        "date": 1711156010486,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.7475904358353,
            "unit": "iter/sec",
            "range": "stddev: 0.00006134191504523511",
            "extra": "mean: 1.9970141027131667 msec\nrounds: 516"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1092.354776884842,
            "unit": "iter/sec",
            "range": "stddev: 0.000028090008910473766",
            "extra": "mean: 915.4534965753363 usec\nrounds: 1168"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2888.008199986979,
            "unit": "iter/sec",
            "range": "stddev: 0.000014055848778692369",
            "extra": "mean: 346.2594046666864 usec\nrounds: 3000"
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
          "id": "38606407a4e576c1c034d492f81c6bbbab1d4e15",
          "message": "Merge pull request #1509 from TeoZosa/dependabot/pip/hypothesis-6.99.13\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@43af69e",
          "timestamp": "2024-03-25T13:25:46Z",
          "tree_id": "ff6ea74bd75277505ccb854b3a52f3cda73b4390",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/38606407a4e576c1c034d492f81c6bbbab1d4e15"
        },
        "date": 1711374048885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.2156263236713,
            "unit": "iter/sec",
            "range": "stddev: 0.00008504496095252108",
            "extra": "mean: 1.9911765934489527 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1078.7498567895548,
            "unit": "iter/sec",
            "range": "stddev: 0.00003979966424413233",
            "extra": "mean: 926.9989643160458 usec\nrounds: 1177"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2871.14115845641,
            "unit": "iter/sec",
            "range": "stddev: 0.000013880320152570327",
            "extra": "mean: 348.29356858846415 usec\nrounds: 3018"
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
          "id": "3406f2d1d46c4e12cbc2ef2c9d384c0d3c8c1c92",
          "message": "Merge pull request #1508 from TeoZosa/dependabot/pip/structlog-sentry-logger-1.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@300b4d5",
          "timestamp": "2024-03-25T13:36:41Z",
          "tree_id": "a30992080f75679723fc43d9277b77b86f0191ea",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3406f2d1d46c4e12cbc2ef2c9d384c0d3c8c1c92"
        },
        "date": 1711375428176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.526312338354,
            "unit": "iter/sec",
            "range": "stddev: 0.00005929672348595006",
            "extra": "mean: 2.0018965473887795 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1092.7855093985463,
            "unit": "iter/sec",
            "range": "stddev: 0.00003132580958621902",
            "extra": "mean: 915.0926612765811 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2899.57328690434,
            "unit": "iter/sec",
            "range": "stddev: 0.000012687580759424732",
            "extra": "mean: 344.87833244857416 usec\nrounds: 3014"
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
          "id": "b43bc6b7d3e645972566c05948967f90aa0e9b4b",
          "message": "Merge pull request #1512 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.14.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@66060a1",
          "timestamp": "2024-03-25T13:51:33Z",
          "tree_id": "ee1089d235091d0b9dbe9bb56dfef62c8cd0826b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b43bc6b7d3e645972566c05948967f90aa0e9b4b"
        },
        "date": 1711376089687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 504.27764817841995,
            "unit": "iter/sec",
            "range": "stddev: 0.000056825305291830714",
            "extra": "mean: 1.9830345517241468 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.6722192068362,
            "unit": "iter/sec",
            "range": "stddev: 0.00003745764439087697",
            "extra": "mean: 917.7071621848743 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2886.9278234572175,
            "unit": "iter/sec",
            "range": "stddev: 0.000012042765737101524",
            "extra": "mean: 346.38898550725037 usec\nrounds: 3036"
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
          "id": "210872dd1ece285d5f3031c66d70ae40a53eaffd",
          "message": "Merge pull request #1510 from TeoZosa/dependabot/pip/tox-4.14.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2e12eb9",
          "timestamp": "2024-03-25T13:52:42Z",
          "tree_id": "ee1089d235091d0b9dbe9bb56dfef62c8cd0826b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/210872dd1ece285d5f3031c66d70ae40a53eaffd"
        },
        "date": 1711376229762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 514.2349770108198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000632781530083098",
            "extra": "mean: 1.944636294117659 msec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1096.0610818878454,
            "unit": "iter/sec",
            "range": "stddev: 0.000035767085462606296",
            "extra": "mean: 912.3579119127278 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2924.341690786404,
            "unit": "iter/sec",
            "range": "stddev: 0.000012988330544743862",
            "extra": "mean: 341.9573038098306 usec\nrounds: 3071"
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
          "id": "70dd0d469d16972ac6214ae3774a436523be69f3",
          "message": "Merge pull request #1511 from TeoZosa/dependabot/pip/typer-0.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1c3f6fc",
          "timestamp": "2024-03-25T14:19:56Z",
          "tree_id": "3429f0435f5f3f23fa77819c3573451535408db0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/70dd0d469d16972ac6214ae3774a436523be69f3"
        },
        "date": 1711377599908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 508.6025724315196,
            "unit": "iter/sec",
            "range": "stddev: 0.00006315652371002759",
            "extra": "mean: 1.9661717305502702 msec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1094.200404634237,
            "unit": "iter/sec",
            "range": "stddev: 0.000036580793698663906",
            "extra": "mean: 913.9093677581616 usec\nrounds: 1191"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2892.9141948888755,
            "unit": "iter/sec",
            "range": "stddev: 0.000013019251604758766",
            "extra": "mean: 345.67219510581185 usec\nrounds: 3024"
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
          "id": "9509c3669c01b0141631a1591137062c15cc969c",
          "message": "Merge pull request #1514 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-3.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dd7a26d",
          "timestamp": "2024-03-25T14:35:38Z",
          "tree_id": "a353f69c215f801e31621285d5ee74cd8b5bf98a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9509c3669c01b0141631a1591137062c15cc969c"
        },
        "date": 1711377870298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 510.3671290565133,
            "unit": "iter/sec",
            "range": "stddev: 0.00006567703104248538",
            "extra": "mean: 1.9593738371212173 msec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1115.4285747227657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003321289039017892",
            "extra": "mean: 896.5163907949418 usec\nrounds: 1195"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2924.054732390688,
            "unit": "iter/sec",
            "range": "stddev: 0.000009895568616804205",
            "extra": "mean: 341.990862524795 usec\nrounds: 3026"
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
          "id": "6dbd9bdf46c5624bc30852eb422934b721b7bcda",
          "message": "Merge pull request #1515 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/emoji-2.11.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ed09e35",
          "timestamp": "2024-03-26T13:09:51Z",
          "tree_id": "f80302a46a0012327a549327b787b5ca5a1eddcd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6dbd9bdf46c5624bc30852eb422934b721b7bcda"
        },
        "date": 1711459141790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.81080185742604,
            "unit": "iter/sec",
            "range": "stddev: 0.00006171680852101448",
            "extra": "mean: 1.9888196441005535 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1102.3650210611504,
            "unit": "iter/sec",
            "range": "stddev: 0.00003341822162769433",
            "extra": "mean: 907.1405395622835 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2895.418468995025,
            "unit": "iter/sec",
            "range": "stddev: 0.000014985664449307029",
            "extra": "mean: 345.373220039966 usec\nrounds: 3004"
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
          "id": "04db6a556f619d565eb001c47b1c5ab01ceac464",
          "message": "Merge pull request #1516 from TeoZosa/dependabot/pip/emoji-2.11.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8e63a16",
          "timestamp": "2024-03-26T13:28:26Z",
          "tree_id": "8eadce7c0a46c43e5c78d4909333716b00aba159",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/04db6a556f619d565eb001c47b1c5ab01ceac464"
        },
        "date": 1711459993437,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.0469249647548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007251795789518003",
            "extra": "mean: 1.991845682692316 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1101.7971628508121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000371403064123849",
            "extra": "mean: 907.6080731707277 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2889.3297797722166,
            "unit": "iter/sec",
            "range": "stddev: 0.000013796663199516524",
            "extra": "mean: 346.1010255737703 usec\nrounds: 3050"
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
          "id": "77e2367efc65f084d88444f13bf5d29ecf07e52a",
          "message": "Merge pull request #1517 from TeoZosa/dependabot/pip/docs/emoji-2.11.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e4d0bd9",
          "timestamp": "2024-03-26T13:35:58Z",
          "tree_id": "33cdf604f658affe85146bee0188ef45270a19fd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/77e2367efc65f084d88444f13bf5d29ecf07e52a"
        },
        "date": 1711460694625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.33231250454975,
            "unit": "iter/sec",
            "range": "stddev: 0.00005323717996397792",
            "extra": "mean: 1.9907140653846407 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1098.901154257261,
            "unit": "iter/sec",
            "range": "stddev: 0.00003331228625123699",
            "extra": "mean: 909.9999541595646 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2844.7850738610928,
            "unit": "iter/sec",
            "range": "stddev: 0.00003304301057781713",
            "extra": "mean: 351.52040454245883 usec\nrounds: 3038"
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
          "id": "e82e80f009d332952bd07075568e3728b3156f22",
          "message": "Merge pull request #1507 from TeoZosa/dependabot/pip/pytest-cov-5.0.0\n\n⬆️ Bump pytest-cov from 4.1.0 to 5.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b03fc5",
          "timestamp": "2024-03-27T03:03:57Z",
          "tree_id": "a600cafde71a64af6c6f1da0056fb47cabac8b1c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e82e80f009d332952bd07075568e3728b3156f22"
        },
        "date": 1711508936883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 512.667377635074,
            "unit": "iter/sec",
            "range": "stddev: 0.00003565508181301586",
            "extra": "mean: 1.9505824704762436 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1107.432627744104,
            "unit": "iter/sec",
            "range": "stddev: 0.00019900799756124461",
            "extra": "mean: 902.9894685666346 usec\nrounds: 1193"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2896.729134728135,
            "unit": "iter/sec",
            "range": "stddev: 0.000012332077001628867",
            "extra": "mean: 345.2169510815696 usec\nrounds: 3005"
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
          "id": "1be3b94f98b31acf7602bb5edb740a47654fb6fa",
          "message": "Merge pull request #1519 from TeoZosa/dependabot/pip/typer-0.11.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9d0568d",
          "timestamp": "2024-03-27T13:30:27Z",
          "tree_id": "dfe69a4b6673cb43c9f81e5d03f36b175d4f3f6e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1be3b94f98b31acf7602bb5edb740a47654fb6fa"
        },
        "date": 1711546319792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 512.3013394979141,
            "unit": "iter/sec",
            "range": "stddev: 0.000048245946084415836",
            "extra": "mean: 1.9519761571969727 msec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1112.0436258589432,
            "unit": "iter/sec",
            "range": "stddev: 0.00004390734728034523",
            "extra": "mean: 899.2452964492282 usec\nrounds: 1211"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2945.156638445107,
            "unit": "iter/sec",
            "range": "stddev: 0.000009898303538651907",
            "extra": "mean: 339.54051439788583 usec\nrounds: 3056"
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
          "id": "6f0fd55f300cef97cc591ac96a5fcad2ab951e3d",
          "message": "Merge pull request #1520 from TeoZosa/dependabot/github_actions/actions/setup-python-5.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@77dedae",
          "timestamp": "2024-03-27T14:01:28Z",
          "tree_id": "c2c0270f2544dc89c1c7758aca919eeb4340ebde",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6f0fd55f300cef97cc591ac96a5fcad2ab951e3d"
        },
        "date": 1711548507942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 506.92204287395987,
            "unit": "iter/sec",
            "range": "stddev: 0.00003825752296138527",
            "extra": "mean: 1.972689911708255 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1106.23151320028,
            "unit": "iter/sec",
            "range": "stddev: 0.000033076575212044405",
            "extra": "mean: 903.9699087101968 usec\nrounds: 1194"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2911.9363299233473,
            "unit": "iter/sec",
            "range": "stddev: 0.000010337230149386961",
            "extra": "mean: 343.4141020611957 usec\nrounds: 3008"
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
          "id": "1ffa635a10c106a25d433b4bd335ea4671f10593",
          "message": "Merge pull request #1521 from TeoZosa/dependabot/pip/typer-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1154200",
          "timestamp": "2024-03-29T13:26:05Z",
          "tree_id": "c3bb56e177a90632d139d4325ed928b90fe3903e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1ffa635a10c106a25d433b4bd335ea4671f10593"
        },
        "date": 1711718897912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.3725916733546,
            "unit": "iter/sec",
            "range": "stddev: 0.00006550820738067701",
            "extra": "mean: 1.9945246641074914 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1094.6291588622244,
            "unit": "iter/sec",
            "range": "stddev: 0.00004011731454630218",
            "extra": "mean: 913.5513994889525 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2894.2625703658364,
            "unit": "iter/sec",
            "range": "stddev: 0.000015826911125078756",
            "extra": "mean: 345.5111537698528 usec\nrounds: 3024"
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
          "id": "7252837d8b7db1ee70615f5f2af9678df30d0efb",
          "message": "Merge pull request #1522 from TeoZosa/dependabot/pip/hypothesis-6.100.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@84e73ef",
          "timestamp": "2024-04-01T13:14:14Z",
          "tree_id": "11ea2178825334e65ffec68a910f1c79810dae65",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7252837d8b7db1ee70615f5f2af9678df30d0efb"
        },
        "date": 1711977640473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.45186495096647,
            "unit": "iter/sec",
            "range": "stddev: 0.00006002307786714937",
            "extra": "mean: 1.978427758095243 msec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1103.9035774871531,
            "unit": "iter/sec",
            "range": "stddev: 0.000028220504014139334",
            "extra": "mean: 905.8762199832055 usec\nrounds: 1191"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2883.687651655567,
            "unit": "iter/sec",
            "range": "stddev: 0.000013523528381306032",
            "extra": "mean: 346.778195421368 usec\nrounds: 3014"
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
          "id": "b22dd7da5706a2a73ddb32bb23ffba553e26fc03",
          "message": "Merge pull request #1523 from TeoZosa/dependabot/pip/typer-0.12.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0088736",
          "timestamp": "2024-04-01T13:21:42Z",
          "tree_id": "e2e97b1e0dff475bfe148c3b39d6511fd936fbb5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b22dd7da5706a2a73ddb32bb23ffba553e26fc03"
        },
        "date": 1711978242681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 510.65507244699535,
            "unit": "iter/sec",
            "range": "stddev: 0.000049169696122548124",
            "extra": "mean: 1.9582690037878696 msec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1106.9892660367077,
            "unit": "iter/sec",
            "range": "stddev: 0.000030494389561891856",
            "extra": "mean: 903.3511260504309 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2892.958617240714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001694021741518966",
            "extra": "mean: 345.6668871930819 usec\nrounds: 3014"
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
          "id": "5cc83918e43766574ea88749d800636b88a9a871",
          "message": "Merge pull request #1524 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinxcontrib-confluencebuilder-2.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@19e4781",
          "timestamp": "2024-04-01T14:14:14Z",
          "tree_id": "2b5875534717a8f2537cffc4d3e33fea8e953589",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5cc83918e43766574ea88749d800636b88a9a871"
        },
        "date": 1711981084428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.63087608652637,
            "unit": "iter/sec",
            "range": "stddev: 0.00006732294319131694",
            "extra": "mean: 1.9777273249999756 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.1440388689837,
            "unit": "iter/sec",
            "range": "stddev: 0.00003678169689305206",
            "extra": "mean: 918.1522042194208 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2868.036498792423,
            "unit": "iter/sec",
            "range": "stddev: 0.000013397101868537447",
            "extra": "mean: 348.6705976095655 usec\nrounds: 3012"
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
          "id": "2be2089fcb39cabb041243c3c270c750449bb79e",
          "message": "Merge pull request #1525 from TeoZosa/dependabot/pip/typer-0.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c18c192",
          "timestamp": "2024-04-05T14:02:47Z",
          "tree_id": "3b39c3a78f853f5e333276ba32c51e231039d9ef",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2be2089fcb39cabb041243c3c270c750449bb79e"
        },
        "date": 1712325896513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.65632241602583,
            "unit": "iter/sec",
            "range": "stddev: 0.00011560222273666205",
            "extra": "mean: 1.989430860420662 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1107.4539803176085,
            "unit": "iter/sec",
            "range": "stddev: 0.000028323542277582647",
            "extra": "mean: 902.9720582278356 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2874.214456614711,
            "unit": "iter/sec",
            "range": "stddev: 0.000023240808661897272",
            "extra": "mean: 347.92115031590714 usec\nrounds: 3007"
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
          "id": "66c9827d3c53ff50153d3ee5dc0017f79ca02181",
          "message": "Merge pull request #1526 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinxcontrib-confluencebuilder-2.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@92c98db",
          "timestamp": "2024-04-08T13:25:12Z",
          "tree_id": "6178b187d543cc0d34a7450ea27a75e632dfdedf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/66c9827d3c53ff50153d3ee5dc0017f79ca02181"
        },
        "date": 1712582840399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 502.18636188046327,
            "unit": "iter/sec",
            "range": "stddev: 0.00007071314630102793",
            "extra": "mean: 1.9912926274131526 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1093.9350666272462,
            "unit": "iter/sec",
            "range": "stddev: 0.000042765408270766215",
            "extra": "mean: 914.1310398643119 usec\nrounds: 1179"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2878.86651093265,
            "unit": "iter/sec",
            "range": "stddev: 0.000014038588616338232",
            "extra": "mean: 347.3589331781958 usec\nrounds: 3008"
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
          "id": "3c2d59dfbea356a290847a0849da626d341eb9ef",
          "message": "Merge pull request #1527 from TeoZosa/dependabot/pip/typer-0.12.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cdc1c3f",
          "timestamp": "2024-04-09T13:20:56Z",
          "tree_id": "beb58ff503100b73df781f4e0a4b8dcc82ce4c22",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3c2d59dfbea356a290847a0849da626d341eb9ef"
        },
        "date": 1712668988731,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 497.03988479081625,
            "unit": "iter/sec",
            "range": "stddev: 0.00005746417895884346",
            "extra": "mean: 2.011910976562493 msec\nrounds: 512"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1086.4025951052722,
            "unit": "iter/sec",
            "range": "stddev: 0.00003636884212605886",
            "extra": "mean: 920.4690825532316 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2823.463041480572,
            "unit": "iter/sec",
            "range": "stddev: 0.000016677500474201354",
            "extra": "mean: 354.1749919544257 usec\nrounds: 2983"
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
          "id": "e6efb4bd96e0523e1404ad2f35bf5a8f9fdd9913",
          "message": "Merge pull request #1528 from TeoZosa/dependabot/pip/hypothesis-6.100.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d8e9aa8",
          "timestamp": "2024-04-09T13:27:03Z",
          "tree_id": "6167bcbdcb1bcc780b13536f25931e9556fc53b5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e6efb4bd96e0523e1404ad2f35bf5a8f9fdd9913"
        },
        "date": 1712669366607,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.5302603909694,
            "unit": "iter/sec",
            "range": "stddev: 0.00004614756468434621",
            "extra": "mean: 2.001880725338493 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1078.9382210506521,
            "unit": "iter/sec",
            "range": "stddev: 0.000034362207937104276",
            "extra": "mean: 926.8371260647496 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2871.2958389420414,
            "unit": "iter/sec",
            "range": "stddev: 0.00001544962646788511",
            "extra": "mean: 348.27480555555024 usec\nrounds: 3024"
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
          "id": "4df213d44fbb66bb80012719ff4170af31de328d",
          "message": "Merge pull request #1529 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.12.3-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3f4e80c",
          "timestamp": "2024-04-10T13:57:13Z",
          "tree_id": "02d081310e6d3a53c51235157f9b1b4495cc5307",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4df213d44fbb66bb80012719ff4170af31de328d"
        },
        "date": 1712758549036,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.9633339000681,
            "unit": "iter/sec",
            "range": "stddev: 0.00005831690401634409",
            "extra": "mean: 1.960925293103443 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1102.0855437567404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003867145571574917",
            "extra": "mean: 907.3705808636635 usec\nrounds: 1181"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2893.164466546072,
            "unit": "iter/sec",
            "range": "stddev: 0.000012752028762679173",
            "extra": "mean: 345.64229291597223 usec\nrounds: 3035"
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
          "id": "f47393e43d8d4d1cbe375f40ec28cb75e072221c",
          "message": "Merge pull request #1530 from TeoZosa/dependabot/pip/typer-0.12.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d556f23",
          "timestamp": "2024-04-10T14:05:14Z",
          "tree_id": "37d6a44baf601a6c7fdb2fb88c9e0f39ebde4678",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f47393e43d8d4d1cbe375f40ec28cb75e072221c"
        },
        "date": 1712759098666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.84165456224304,
            "unit": "iter/sec",
            "range": "stddev: 0.00007463244866305135",
            "extra": "mean: 1.9926604157088175 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1094.8974530245682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003887049817757808",
            "extra": "mean: 913.3275424448001 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2923.002459467335,
            "unit": "iter/sec",
            "range": "stddev: 0.000014896775179815775",
            "extra": "mean: 342.1139783037446 usec\nrounds: 3042"
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
          "id": "e14bce959739aba21b0afa9cfb0d22934a520e22",
          "message": "Merge pull request #1533 from TeoZosa/dependabot/pip/black-24.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@95b876a",
          "timestamp": "2024-04-15T13:15:45Z",
          "tree_id": "eaa9feca4c475384d7a300510aa712ce2b16f495",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e14bce959739aba21b0afa9cfb0d22934a520e22"
        },
        "date": 1713187305308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 504.72195824935534,
            "unit": "iter/sec",
            "range": "stddev: 0.00008004740619190925",
            "extra": "mean: 1.9812888733205365 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1105.6727456050876,
            "unit": "iter/sec",
            "range": "stddev: 0.00004138852632576604",
            "extra": "mean: 904.4267428810888 usec\nrounds: 1194"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2887.0521232756087,
            "unit": "iter/sec",
            "range": "stddev: 0.000017027318694170773",
            "extra": "mean: 346.3740719947287 usec\nrounds: 3028"
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
          "id": "5e1259dd42e8e54a24665fadd9d5ca96d9c2cf75",
          "message": "Merge pull request #1534 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-7.3.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c8b4ca9",
          "timestamp": "2024-04-17T13:14:47Z",
          "tree_id": "a23336ba99f24b5ad3ca02f6c7fd6ba22ea235e9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5e1259dd42e8e54a24665fadd9d5ca96d9c2cf75"
        },
        "date": 1713360025596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 507.49685210953675,
            "unit": "iter/sec",
            "range": "stddev: 0.00005617283039989209",
            "extra": "mean: 1.9704555719769523 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1086.474509233772,
            "unit": "iter/sec",
            "range": "stddev: 0.00004261303221981422",
            "extra": "mean: 920.4081563820972 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2890.3573716550236,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154117850921262",
            "extra": "mean: 345.97797829664165 usec\nrounds: 3041"
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
          "id": "711de5d20897647572c5f3cbc5afc430480fe506",
          "message": "Merge pull request #1535 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f7cceec",
          "timestamp": "2024-04-17T13:44:22Z",
          "tree_id": "16ff2c1810d148855eb0146af5fc9ec232642f87",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/711de5d20897647572c5f3cbc5afc430480fe506"
        },
        "date": 1713361637629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 497.3797931868987,
            "unit": "iter/sec",
            "range": "stddev: 0.00009144285353058617",
            "extra": "mean: 2.0105360404624104 msec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1065.662366154464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003773990505369258",
            "extra": "mean: 938.3835178571497 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2847.2363367473135,
            "unit": "iter/sec",
            "range": "stddev: 0.000013991962413840983",
            "extra": "mean: 351.2177711044533 usec\nrounds: 2997"
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
          "id": "e7246a2089549f9f250dcb6f51f692adbb1e7739",
          "message": "Merge pull request #1536 from TeoZosa/dependabot/pip/docs/sphinx-7.3.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4519c97",
          "timestamp": "2024-04-17T13:55:36Z",
          "tree_id": "12f3e865a3147b2c9711f26b21fe575b90e7f5bb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e7246a2089549f9f250dcb6f51f692adbb1e7739"
        },
        "date": 1713362413711,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.9129119450823,
            "unit": "iter/sec",
            "range": "stddev: 0.00008035885758820495",
            "extra": "mean: 1.9923775145067733 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1091.276009888019,
            "unit": "iter/sec",
            "range": "stddev: 0.00006770336348327424",
            "extra": "mean: 916.3584564665862 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2864.693704191835,
            "unit": "iter/sec",
            "range": "stddev: 0.000013149352103719639",
            "extra": "mean: 349.07745932374024 usec\nrounds: 2987"
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
          "id": "8942512c1ae198cc786810e69c9e822eacf258f5",
          "message": "Merge pull request #1537 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/sphinx-7.3.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b2f2bc2",
          "timestamp": "2024-04-18T13:09:38Z",
          "tree_id": "ba739347b2d1c4f2ec628551d7bb3f985897a579",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8942512c1ae198cc786810e69c9e822eacf258f5"
        },
        "date": 1713446058986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 499.4480047071313,
            "unit": "iter/sec",
            "range": "stddev: 0.0001744316208354373",
            "extra": "mean: 2.0022104214559526 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1088.0898143508819,
            "unit": "iter/sec",
            "range": "stddev: 0.00004103638355464781",
            "extra": "mean: 919.0417802013584 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2902.822873343115,
            "unit": "iter/sec",
            "range": "stddev: 0.000015876863223384637",
            "extra": "mean: 344.492255860008 usec\nrounds: 3029"
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
          "id": "c955869215cedcf3ae977dd655100a7f04e29824",
          "message": "Merge pull request #1538 from TeoZosa/dependabot/pip/docs/sphinx-7.3.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d1f1f65",
          "timestamp": "2024-04-18T13:40:03Z",
          "tree_id": "a8a95e14b0bd877ba4ef8213567b0d9bb154ecbc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/c955869215cedcf3ae977dd655100a7f04e29824"
        },
        "date": 1713447733868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 505.749750682021,
            "unit": "iter/sec",
            "range": "stddev: 0.00005094859158948484",
            "extra": "mean: 1.9772624675572563 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1082.4343278893168,
            "unit": "iter/sec",
            "range": "stddev: 0.00004087136844257079",
            "extra": "mean: 923.8435757575622 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2881.046295924135,
            "unit": "iter/sec",
            "range": "stddev: 0.000018538666587233095",
            "extra": "mean: 347.0961231739722 usec\nrounds: 3012"
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
          "id": "168158d59ed7c096bab5a41bcd8cf033433c174e",
          "message": "Merge pull request #1540 from TeoZosa/dependabot/pip/docs/sphinx-7.3.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1ed6752",
          "timestamp": "2024-04-19T13:38:42Z",
          "tree_id": "94a413196b71fa815fe0935ca10b6b5fae28fff9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/168158d59ed7c096bab5a41bcd8cf033433c174e"
        },
        "date": 1713534190346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.4991448957386,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356720779602551",
            "extra": "mean: 1.9940213461538394 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1081.4958020308004,
            "unit": "iter/sec",
            "range": "stddev: 0.000051111608858497656",
            "extra": "mean: 924.6452904599629 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2917.29987491567,
            "unit": "iter/sec",
            "range": "stddev: 0.000011678201288444389",
            "extra": "mean: 342.7827247375133 usec\nrounds: 3048"
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
          "id": "69a29e4ea1c455aadca99d0d39745f73d3f98d7e",
          "message": "Merge pull request #1541 from TeoZosa/dependabot/pip/emoji-2.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5bce761",
          "timestamp": "2024-04-22T13:06:50Z",
          "tree_id": "c02b715bdeda2a11c172716e430d3f749b62bafa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/69a29e4ea1c455aadca99d0d39745f73d3f98d7e"
        },
        "date": 1713791569208,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 503.8966631879221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004083583730017755",
            "extra": "mean: 1.984533879771024 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1089.993743177477,
            "unit": "iter/sec",
            "range": "stddev: 0.000032625517757232345",
            "extra": "mean: 917.4364589331191 usec\nrounds: 1181"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2904.346015903177,
            "unit": "iter/sec",
            "range": "stddev: 0.000013474237410393465",
            "extra": "mean: 344.3115918435172 usec\nrounds: 3016"
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
          "id": "04c9c3a759b8c7a85c2494a2ac05a04109197e01",
          "message": "Merge pull request #1542 from TeoZosa/dependabot/pip/docs/emoji-2.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@34a507c",
          "timestamp": "2024-04-22T13:14:13Z",
          "tree_id": "d468fe130bc8415cf30153c8b552bbf0536dad32",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/04c9c3a759b8c7a85c2494a2ac05a04109197e01"
        },
        "date": 1713791780680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 492.78996570586537,
            "unit": "iter/sec",
            "range": "stddev: 0.00005428915672607871",
            "extra": "mean: 2.0292620986460514 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1070.6788417531018,
            "unit": "iter/sec",
            "range": "stddev: 0.00003945153360801856",
            "extra": "mean: 933.9868885076929 usec\nrounds: 1166"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2855.0607512640413,
            "unit": "iter/sec",
            "range": "stddev: 0.000014869411910895473",
            "extra": "mean: 350.2552439758989 usec\nrounds: 2988"
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
          "id": "5a652ffc485112eda1977d69c2abf06bafaa083a",
          "message": "Merge pull request #1543 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/emoji-2.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b7cb591",
          "timestamp": "2024-04-22T13:32:44Z",
          "tree_id": "e28e638fed9326cb22824e3d4e34479cc033e5c1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5a652ffc485112eda1977d69c2abf06bafaa083a"
        },
        "date": 1713793137304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 498.06793401110025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000856213386920871",
            "extra": "mean: 2.0077582428298095 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1074.9089334635764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003683990667435765",
            "extra": "mean: 930.3113676595797 usec\nrounds: 1175"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2830.7429587954707,
            "unit": "iter/sec",
            "range": "stddev: 0.000018645705792551555",
            "extra": "mean: 353.264148160424 usec\nrounds: 3017"
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
          "id": "f91f4c34f15e8234574bd395c8226df5c07cb06f",
          "message": "Merge pull request #1548 from TeoZosa/dependabot/pip/black-24.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8335ce8",
          "timestamp": "2024-04-25T13:10:41Z",
          "tree_id": "c277546dbe0c5dc33583f62ef6efbf9cc28c3aea",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f91f4c34f15e8234574bd395c8226df5c07cb06f"
        },
        "date": 1714050769054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 501.32495200321483,
            "unit": "iter/sec",
            "range": "stddev: 0.00008724971072512138",
            "extra": "mean: 1.994714198852778 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1086.2344574810102,
            "unit": "iter/sec",
            "range": "stddev: 0.00005019987777742362",
            "extra": "mean: 920.6115614478031 usec\nrounds: 1188"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2876.860600487957,
            "unit": "iter/sec",
            "range": "stddev: 0.000020966774257547018",
            "extra": "mean: 347.6011315356697 usec\nrounds: 3041"
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
          "id": "b2afcb3743f429872a1ae5bb0de01aa196bc36f8",
          "message": "Merge pull request #1550 from TeoZosa/dependabot/pip/black-24.4.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@538ff71",
          "timestamp": "2024-04-26T13:46:56Z",
          "tree_id": "ca7238bb9906630a150ecb7235a808565c2400ce",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b2afcb3743f429872a1ae5bb0de01aa196bc36f8"
        },
        "date": 1714139903780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 509.55622863109306,
            "unit": "iter/sec",
            "range": "stddev: 0.00006274601445695644",
            "extra": "mean: 1.9624919563567476 msec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1113.1594170196088,
            "unit": "iter/sec",
            "range": "stddev: 0.00002930110164465243",
            "extra": "mean: 898.3439251472321 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2885.6709213329923,
            "unit": "iter/sec",
            "range": "stddev: 0.000014484255711041707",
            "extra": "mean: 346.5398610102309 usec\nrounds: 3029"
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
          "id": "39a179819710e9289e286117107ff84c5b0f855a",
          "message": "Merge pull request #1552 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-4.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@357e6b9",
          "timestamp": "2024-04-29T13:19:52Z",
          "tree_id": "7eb565b61e1921f4942f389a9f119a649872ec72",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/39a179819710e9289e286117107ff84c5b0f855a"
        },
        "date": 1714397261575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 500.24541488527007,
            "unit": "iter/sec",
            "range": "stddev: 0.000051123221948045485",
            "extra": "mean: 1.9990188220502676 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1079.9246964387748,
            "unit": "iter/sec",
            "range": "stddev: 0.00003623304411010045",
            "extra": "mean: 925.990491094111 usec\nrounds: 1179"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2843.0960336612684,
            "unit": "iter/sec",
            "range": "stddev: 0.00001570501421651918",
            "extra": "mean: 351.7292374792647 usec\nrounds: 3015"
          }
        ]
      }
    ]
  }
}