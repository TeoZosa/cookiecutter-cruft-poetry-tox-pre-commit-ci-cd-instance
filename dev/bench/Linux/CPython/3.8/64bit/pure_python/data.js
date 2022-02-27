window.BENCHMARK_DATA = {
  "lastUpdate": 1645924870080,
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
      }
    ]
  }
}