window.BENCHMARK_DATA = {
  "lastUpdate": 1638199282213,
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
        "date": 1633123057058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.842968047427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040435216877879",
            "extra": "mean: 3.462088783950605 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.6841405828465,
            "unit": "iter/sec",
            "range": "stddev: 0.00018906740463795328",
            "extra": "mean: 1.1645725741728885 msec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1719.4351643525135,
            "unit": "iter/sec",
            "range": "stddev: 0.00009634922550437933",
            "extra": "mean: 581.5863376137065 usec\nrounds: 1869"
          }
        ]
      },
      {
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
        "date": 1633354944374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.57841486822605,
            "unit": "iter/sec",
            "range": "stddev: 0.00022242096249935168",
            "extra": "mean: 3.709495808441544 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 781.8178620443452,
            "unit": "iter/sec",
            "range": "stddev: 0.00014551933689667043",
            "extra": "mean: 1.279070290598297 msec\nrounds: 936"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1583.0693373376641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007690948731909058",
            "extra": "mean: 631.6842708113819 usec\nrounds: 1898"
          }
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
        "date": 1633355650867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.0268330905031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566402722792269",
            "extra": "mean: 3.40105013372094 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 769.6744923855292,
            "unit": "iter/sec",
            "range": "stddev: 0.00040500972157981295",
            "extra": "mean: 1.2992505401869299 msec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1714.2575653935578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272851939377408",
            "extra": "mean: 583.3429119330857 usec\nrounds: 2271"
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
        "date": 1634060811576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 246.2173335748447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007081456571764779",
            "extra": "mean: 4.06145247972975 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 716.0438698133105,
            "unit": "iter/sec",
            "range": "stddev: 0.00046307891994044046",
            "extra": "mean: 1.3965624763476063 msec\nrounds: 909"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1433.8139066280685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003964553068930574",
            "extra": "mean: 697.4405781512622 usec\nrounds: 1785"
          }
        ]
      },
      {
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
        "date": 1634132154952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.2615832034172,
            "unit": "iter/sec",
            "range": "stddev: 0.00041988959074521696",
            "extra": "mean: 3.517886549180307 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 803.1764221751166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023133317505413022",
            "extra": "mean: 1.2450564687791221 msec\nrounds: 1073"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1661.2334747014806,
            "unit": "iter/sec",
            "range": "stddev: 0.00011676008814129522",
            "extra": "mean: 601.9623461895972 usec\nrounds: 2152"
          }
        ]
      },
      {
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
        "date": 1634133169988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.72010330717967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005198702652274939",
            "extra": "mean: 3.5370671851852173 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.8242719523605,
            "unit": "iter/sec",
            "range": "stddev: 0.00012468999434638305",
            "extra": "mean: 1.2050744161137399 msec\nrounds: 1055"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1664.2702473112276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026481765683047427",
            "extra": "mean: 600.8639532044668 usec\nrounds: 1966"
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
        "date": 1634143208991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.55657497266617,
            "unit": "iter/sec",
            "range": "stddev: 0.00003122632702022177",
            "extra": "mean: 2.86076724512533 msec\nrounds: 359"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1028.0475149828094,
            "unit": "iter/sec",
            "range": "stddev: 0.000013200163554382181",
            "extra": "mean: 972.7176861243828 usec\nrounds: 1045"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2121.5883508423444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001024604207383376",
            "extra": "mean: 471.3449711405915 usec\nrounds: 2183"
          }
        ]
      },
      {
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
        "date": 1634217683585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.97214871608344,
            "unit": "iter/sec",
            "range": "stddev: 0.00007327447822733268",
            "extra": "mean: 3.2897750804598274 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.4187196100529,
            "unit": "iter/sec",
            "range": "stddev: 0.000040681816487124485",
            "extra": "mean: 1.1218072696941406 msec\nrounds: 1079"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1844.4764276945186,
            "unit": "iter/sec",
            "range": "stddev: 0.000021131944249188593",
            "extra": "mean: 542.1592734855052 usec\nrounds: 2278"
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
        "date": 1634230167988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.17936824454597,
            "unit": "iter/sec",
            "range": "stddev: 0.00020039599552762",
            "extra": "mean: 3.674047766550499 msec\nrounds: 287"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 795.3437335719373,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686668162308534",
            "extra": "mean: 1.2573180095465628 msec\nrounds: 838"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1579.9180934526557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001157722378357983",
            "extra": "mean: 632.9442039711447 usec\nrounds: 1662"
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
        "date": 1634232582072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 267.84297571243707,
            "unit": "iter/sec",
            "range": "stddev: 0.000483785981559686",
            "extra": "mean: 3.733530802292255 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 818.819948027278,
            "unit": "iter/sec",
            "range": "stddev: 0.00019308484204812068",
            "extra": "mean: 1.2212697094266276 msec\nrounds: 1029"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1684.9143252617675,
            "unit": "iter/sec",
            "range": "stddev: 0.00011495407097236012",
            "extra": "mean: 593.5019870192157 usec\nrounds: 2080"
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
        "date": 1634234973918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.93298438801315,
            "unit": "iter/sec",
            "range": "stddev: 0.0009034945008305673",
            "extra": "mean: 3.5979896456043976 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 803.5261264193275,
            "unit": "iter/sec",
            "range": "stddev: 0.00025866742712999855",
            "extra": "mean: 1.2445146052141445 msec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1625.7332920148656,
            "unit": "iter/sec",
            "range": "stddev: 0.00022307174263623664",
            "extra": "mean: 615.1070442560981 usec\nrounds: 2124"
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
        "date": 1634236601127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.5144429956374,
            "unit": "iter/sec",
            "range": "stddev: 0.00050117813755156",
            "extra": "mean: 3.7521418680351557 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 807.5936108706528,
            "unit": "iter/sec",
            "range": "stddev: 0.00015037577556184119",
            "extra": "mean: 1.238246546950659 msec\nrounds: 1033"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1565.3383354768907,
            "unit": "iter/sec",
            "range": "stddev: 0.00010826050956845808",
            "extra": "mean: 638.8395258302694 usec\nrounds: 2168"
          }
        ]
      },
      {
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
        "date": 1634563235250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.0229151260175,
            "unit": "iter/sec",
            "range": "stddev: 0.00038787484546146063",
            "extra": "mean: 3.662696222910213 msec\nrounds: 323"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 775.3871763065852,
            "unit": "iter/sec",
            "range": "stddev: 0.00043923536215643207",
            "extra": "mean: 1.289678280163617 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1570.7638721485523,
            "unit": "iter/sec",
            "range": "stddev: 0.00022591846830729247",
            "extra": "mean: 636.6329260120815 usec\nrounds: 2149"
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
        "date": 1635462455498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 239.74203215585234,
            "unit": "iter/sec",
            "range": "stddev: 0.0012493037626148337",
            "extra": "mean: 4.171150094155857 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 710.2150328042471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005098756380944915",
            "extra": "mean: 1.4080242656249502 msec\nrounds: 960"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1429.745431324049,
            "unit": "iter/sec",
            "range": "stddev: 0.00040384854687949996",
            "extra": "mean: 699.4252110139123 usec\nrounds: 1943"
          }
        ]
      },
      {
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
        "date": 1635514823662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.215683686944,
            "unit": "iter/sec",
            "range": "stddev: 0.00009561316414037053",
            "extra": "mean: 3.2656720516717175 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.256615296762,
            "unit": "iter/sec",
            "range": "stddev: 0.00003975927252666287",
            "extra": "mean: 1.1095618972746448 msec\nrounds: 954"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1873.4572233415208,
            "unit": "iter/sec",
            "range": "stddev: 0.00002732587160487306",
            "extra": "mean: 533.7725289592618 usec\nrounds: 2210"
          }
        ]
      },
      {
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
        "date": 1635516597732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.8737287920164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004364928993246419",
            "extra": "mean: 3.0499546385869194 msec\nrounds: 368"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 971.2941350440923,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477267571208665",
            "extra": "mean: 1.0295542451253497 msec\nrounds: 1077"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1966.985723655843,
            "unit": "iter/sec",
            "range": "stddev: 0.00009308106681094459",
            "extra": "mean: 508.3920986174716 usec\nrounds: 2170"
          }
        ]
      },
      {
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
        "date": 1635517557280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.70952085736207,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852877654461664",
            "extra": "mean: 3.5879649784614998 msec\nrounds: 325"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 791.9356143835739,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631677556510685",
            "extra": "mean: 1.2627289161359148 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1475.3535201810755,
            "unit": "iter/sec",
            "range": "stddev: 0.0002105761991993159",
            "extra": "mean: 677.8036493092627 usec\nrounds: 1882"
          }
        ]
      },
      {
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
        "date": 1635517961946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.39469990928174,
            "unit": "iter/sec",
            "range": "stddev: 0.0008062757201780578",
            "extra": "mean: 3.946412455974855 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 784.2212006592057,
            "unit": "iter/sec",
            "range": "stddev: 0.0003406537713493397",
            "extra": "mean: 1.2751504284242936 msec\nrounds: 971"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1563.8204661777927,
            "unit": "iter/sec",
            "range": "stddev: 0.00013195958007470817",
            "extra": "mean: 639.4595937500084 usec\nrounds: 2112"
          }
        ]
      },
      {
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
        "date": 1635774308251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.9390176651396,
            "unit": "iter/sec",
            "range": "stddev: 0.000243142178239387",
            "extra": "mean: 3.175217880000041 msec\nrounds: 350"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 859.6251833621244,
            "unit": "iter/sec",
            "range": "stddev: 0.00016028231774839813",
            "extra": "mean: 1.1632977015503994 msec\nrounds: 1032"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1868.391707119736,
            "unit": "iter/sec",
            "range": "stddev: 0.00013334217814734223",
            "extra": "mean: 535.2196737918377 usec\nrounds: 2152"
          }
        ]
      },
      {
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
        "date": 1635945780748,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.84311495610825,
            "unit": "iter/sec",
            "range": "stddev: 0.00003181785490868219",
            "extra": "mean: 2.8584241256983467 msec\nrounds: 358"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1022.8152647785151,
            "unit": "iter/sec",
            "range": "stddev: 0.000012946415111515568",
            "extra": "mean: 977.6936602686941 usec\nrounds: 1042"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2113.753742265293,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295594429445464",
            "extra": "mean: 473.0920068902198 usec\nrounds: 2177"
          }
        ]
      },
      {
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
        "date": 1636381270095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 301.6205032873647,
            "unit": "iter/sec",
            "range": "stddev: 0.00010288768132353506",
            "extra": "mean: 3.31542447910865 msec\nrounds: 359"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 878.6158843453442,
            "unit": "iter/sec",
            "range": "stddev: 0.00003264785932563911",
            "extra": "mean: 1.1381537914547255 msec\nrounds: 983"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1798.791100570219,
            "unit": "iter/sec",
            "range": "stddev: 0.000020131197287290123",
            "extra": "mean: 555.9289234214017 usec\nrounds: 2233"
          }
        ]
      },
      {
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
        "date": 1636381551983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.73543404674115,
            "unit": "iter/sec",
            "range": "stddev: 0.000030114581753037423",
            "extra": "mean: 3.48753548135592 msec\nrounds: 295"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 830.4907542480714,
            "unit": "iter/sec",
            "range": "stddev: 0.000017897495809132626",
            "extra": "mean: 1.20410732435595 msec\nrounds: 854"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1734.9928141252274,
            "unit": "iter/sec",
            "range": "stddev: 0.000015976702462335202",
            "extra": "mean: 576.3712632459483 usec\nrounds: 1793"
          }
        ]
      },
      {
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
        "date": 1636467941327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.1109742476848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005541229036567308",
            "extra": "mean: 3.582804304615389 msec\nrounds: 325"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 864.1885089953117,
            "unit": "iter/sec",
            "range": "stddev: 0.00014133326370403208",
            "extra": "mean: 1.157154937367288 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1703.4600570691182,
            "unit": "iter/sec",
            "range": "stddev: 0.00008314978066749811",
            "extra": "mean: 587.0404743863182 usec\nrounds: 1874"
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
        "date": 1636490908562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 350.3484648525435,
            "unit": "iter/sec",
            "range": "stddev: 0.000034277521036158294",
            "extra": "mean: 2.8543010754189697 msec\nrounds: 358"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1024.9259291371473,
            "unit": "iter/sec",
            "range": "stddev: 0.000014493505977999015",
            "extra": "mean: 975.6802629062847 usec\nrounds: 1046"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2121.2730273130287,
            "unit": "iter/sec",
            "range": "stddev: 0.000010133857493557605",
            "extra": "mean: 471.41503574703853 usec\nrounds: 2182"
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
          "id": "01c6b460d7d3f67f91785d6ac24edcc6a2970003",
          "message": ":recycle: Mark Make target as private: `_validate-req-env-vars`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6b155d8",
          "timestamp": "2021-11-10T19:25:27Z",
          "tree_id": "78d00f1e1c3d0a61ee50b04fae28816f17860c04"
        },
        "date": 1636572477387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.6509865405053,
            "unit": "iter/sec",
            "range": "stddev: 0.00005350677877648039",
            "extra": "mean: 2.859994790502772 msec\nrounds: 358"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1022.7586050231708,
            "unit": "iter/sec",
            "range": "stddev: 0.00001589998437571057",
            "extra": "mean: 977.747823473306 usec\nrounds: 1048"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2120.0730796877133,
            "unit": "iter/sec",
            "range": "stddev: 0.000012138018859860245",
            "extra": "mean: 471.6818536025654 usec\nrounds: 2179"
          }
        ]
      },
      {
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
        "date": 1636640817014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 245.30017616303232,
            "unit": "iter/sec",
            "range": "stddev: 0.00043288503890847663",
            "extra": "mean: 4.076637920289858 msec\nrounds: 276"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 719.2245341769396,
            "unit": "iter/sec",
            "range": "stddev: 0.00023617813321981807",
            "extra": "mean: 1.390386384892128 msec\nrounds: 834"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1403.4328913364352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613728115002217",
            "extra": "mean: 712.5385233402492 usec\nrounds: 1928"
          }
        ]
      },
      {
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
        "date": 1636641222464,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 351.9864391357847,
            "unit": "iter/sec",
            "range": "stddev: 0.000018593664313116984",
            "extra": "mean: 2.8410185416666955 msec\nrounds: 360"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1019.0378107890708,
            "unit": "iter/sec",
            "range": "stddev: 0.00001731168862085662",
            "extra": "mean: 981.3178563273042 usec\nrounds: 1051"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2133.8194143332,
            "unit": "iter/sec",
            "range": "stddev: 0.000011672885880673574",
            "extra": "mean: 468.64321942280736 usec\nrounds: 2183"
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
        "date": 1636661823852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.61844899017086,
            "unit": "iter/sec",
            "range": "stddev: 0.00007268554170323243",
            "extra": "mean: 2.8602609584487744 msec\nrounds: 361"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1022.836697352486,
            "unit": "iter/sec",
            "range": "stddev: 0.000021993542589444577",
            "extra": "mean: 977.6731736242975 usec\nrounds: 1054"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1908.011792783115,
            "unit": "iter/sec",
            "range": "stddev: 0.000880355327889635",
            "extra": "mean: 524.1057753324226 usec\nrounds: 2181"
          }
        ]
      },
      {
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
        "date": 1636986216692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 393.7804709996709,
            "unit": "iter/sec",
            "range": "stddev: 0.000020912386670711802",
            "extra": "mean: 2.539486017326735 msec\nrounds: 404"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1127.9652342119364,
            "unit": "iter/sec",
            "range": "stddev: 0.00003652032576149559",
            "extra": "mean: 886.5521468830194 usec\nrounds: 1171"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2392.1860346069093,
            "unit": "iter/sec",
            "range": "stddev: 0.000009956467440656775",
            "extra": "mean: 418.0276891234017 usec\nrounds: 2464"
          }
        ]
      },
      {
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
        "date": 1637072465691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 390.09471499680313,
            "unit": "iter/sec",
            "range": "stddev: 0.000049272638433727595",
            "extra": "mean: 2.5634799999999878 msec\nrounds: 404"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1133.3737475277244,
            "unit": "iter/sec",
            "range": "stddev: 0.000013274116535761188",
            "extra": "mean: 882.3214779602421 usec\nrounds: 1157"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2349.67200266828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001246861609912606",
            "extra": "mean: 425.5913160919495 usec\nrounds: 2436"
          }
        ]
      },
      {
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
        "date": 1637159543130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 341.28602942637633,
            "unit": "iter/sec",
            "range": "stddev: 0.000024054644991307397",
            "extra": "mean: 2.9300935689655128 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 977.4488038847087,
            "unit": "iter/sec",
            "range": "stddev: 0.00003595526171531041",
            "extra": "mean: 1.0230714857143057 msec\nrounds: 1015"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2016.444212576878,
            "unit": "iter/sec",
            "range": "stddev: 0.000012170742531833987",
            "extra": "mean: 495.92247271848316 usec\nrounds: 2071"
          }
        ]
      },
      {
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
        "date": 1637245242822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 260.3933691220481,
            "unit": "iter/sec",
            "range": "stddev: 0.0002786493027296764",
            "extra": "mean: 3.840343567010315 msec\nrounds: 291"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 789.8267818353473,
            "unit": "iter/sec",
            "range": "stddev: 0.00014831769181343355",
            "extra": "mean: 1.2661003944134004 msec\nrounds: 895"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1472.1013668705116,
            "unit": "iter/sec",
            "range": "stddev: 0.00011531162533731398",
            "extra": "mean: 679.3010471322806 usec\nrounds: 1761"
          }
        ]
      },
      {
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
        "date": 1637245532524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 342.6848842455204,
            "unit": "iter/sec",
            "range": "stddev: 0.000030689609513997844",
            "extra": "mean: 2.918132797720774 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 989.3927543307211,
            "unit": "iter/sec",
            "range": "stddev: 0.00002395173229598443",
            "extra": "mean: 1.0107209655850515 msec\nrounds: 1017"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2033.8604506697204,
            "unit": "iter/sec",
            "range": "stddev: 0.000010465919315174578",
            "extra": "mean: 491.6758176160585 usec\nrounds: 2089"
          }
        ]
      },
      {
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
        "date": 1637591379926,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.5603924777151,
            "unit": "iter/sec",
            "range": "stddev: 0.0001256705482213029",
            "extra": "mean: 3.3606623236151707 msec\nrounds: 343"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 872.7762680686129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540677701922872",
            "extra": "mean: 1.1457690092936685 msec\nrounds: 1076"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1743.7731103442509,
            "unit": "iter/sec",
            "range": "stddev: 0.000027932311058559545",
            "extra": "mean: 573.4691021830143 usec\nrounds: 2153"
          }
        ]
      },
      {
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
        "date": 1637591871067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 263.2617411133092,
            "unit": "iter/sec",
            "range": "stddev: 0.00029246797283708886",
            "extra": "mean: 3.7985010498338796 msec\nrounds: 301"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 804.9635771658595,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236786255712081",
            "extra": "mean: 1.242292233296854 msec\nrounds: 913"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1524.0292303264675,
            "unit": "iter/sec",
            "range": "stddev: 0.00010314010950058246",
            "extra": "mean: 656.1553939393843 usec\nrounds: 1815"
          }
        ]
      },
      {
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
        "date": 1637677660878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 271.0552581587442,
            "unit": "iter/sec",
            "range": "stddev: 0.0002540241814428527",
            "extra": "mean: 3.689284638095261 msec\nrounds: 315"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.8573035519157,
            "unit": "iter/sec",
            "range": "stddev: 0.00026050295613969",
            "extra": "mean: 1.240914483981688 msec\nrounds: 874"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1570.5723365510496,
            "unit": "iter/sec",
            "range": "stddev: 0.00006470305512735829",
            "extra": "mean: 636.7105651408474 usec\nrounds: 1704"
          }
        ]
      },
      {
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
        "date": 1637936807105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.8936020590297,
            "unit": "iter/sec",
            "range": "stddev: 0.00023925168093375763",
            "extra": "mean: 3.1857928719806896 msec\nrounds: 414"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.1143024729637,
            "unit": "iter/sec",
            "range": "stddev: 0.00009113756661139283",
            "extra": "mean: 1.122190494782615 msec\nrounds: 1150"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1878.998826047858,
            "unit": "iter/sec",
            "range": "stddev: 0.00006088611651811977",
            "extra": "mean: 532.1983101518606 usec\nrounds: 2502"
          }
        ]
      },
      {
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
        "date": 1637937139712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.4452321052873,
            "unit": "iter/sec",
            "range": "stddev: 0.00046931728015095747",
            "extra": "mean: 3.7113293569405017 msec\nrounds: 353"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 827.6887230869606,
            "unit": "iter/sec",
            "range": "stddev: 0.00019684396775944654",
            "extra": "mean: 1.2081836711153735 msec\nrounds: 1049"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1636.2326310187334,
            "unit": "iter/sec",
            "range": "stddev: 0.00017601731408795906",
            "extra": "mean: 611.1600398638859 usec\nrounds: 2057"
          }
        ]
      },
      {
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
        "date": 1637937440339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 384.3707290907953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003084773014385365",
            "extra": "mean: 2.601654924050634 msec\nrounds: 395"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1119.55993180032,
            "unit": "iter/sec",
            "range": "stddev: 0.00001495670549595057",
            "extra": "mean: 893.2081004291922 usec\nrounds: 1165"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2265.0940856736242,
            "unit": "iter/sec",
            "range": "stddev: 0.000012833732615975164",
            "extra": "mean: 441.48276503163726 usec\nrounds: 2528"
          }
        ]
      },
      {
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
        "date": 1638198036912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.565139665249,
            "unit": "iter/sec",
            "range": "stddev: 0.000026680223806166984",
            "extra": "mean: 2.953641361271673 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1062.200473102962,
            "unit": "iter/sec",
            "range": "stddev: 0.000026902224095922934",
            "extra": "mean: 941.4418702702529 usec\nrounds: 1110"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2347.483802287253,
            "unit": "iter/sec",
            "range": "stddev: 0.000010910758656799382",
            "extra": "mean: 425.9880298324775 usec\nrounds: 2447"
          }
        ]
      },
      {
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
        "date": 1638198377004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.33015266233633,
            "unit": "iter/sec",
            "range": "stddev: 0.000028696826127781636",
            "extra": "mean: 2.93832324928366 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 996.0151880740153,
            "unit": "iter/sec",
            "range": "stddev: 0.000013315075013294572",
            "extra": "mean: 1.00400075417895 msec\nrounds: 1017"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1959.1364996825753,
            "unit": "iter/sec",
            "range": "stddev: 0.000014415427268328979",
            "extra": "mean: 510.4289569215941 usec\nrounds: 2066"
          }
        ]
      },
      {
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
        "date": 1638199006115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 276.09422968656776,
            "unit": "iter/sec",
            "range": "stddev: 0.000734201991794686",
            "extra": "mean: 3.621951828313241 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 830.6255846953002,
            "unit": "iter/sec",
            "range": "stddev: 0.00019797929507307568",
            "extra": "mean: 1.2039118688678867 msec\nrounds: 1060"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1640.4046894888772,
            "unit": "iter/sec",
            "range": "stddev: 0.00016382593630747227",
            "extra": "mean: 609.6056701176485 usec\nrounds: 2125"
          }
        ]
      },
      {
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
        "date": 1638199279165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 250.71806986074608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465452554027461",
            "extra": "mean: 3.988543787671229 msec\nrounds: 292"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 768.7138638340465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010988618049815669",
            "extra": "mean: 1.3008741575342324 msec\nrounds: 876"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1513.4220548479877,
            "unit": "iter/sec",
            "range": "stddev: 0.00006817660853356148",
            "extra": "mean: 660.7542138008837 usec\nrounds: 1768"
          }
        ]
      }
    ]
  }
}