window.BENCHMARK_DATA = {
  "lastUpdate": 1645927792789,
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
      },
      {
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
        "date": 1638199527328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 337.75401980540965,
            "unit": "iter/sec",
            "range": "stddev: 0.000027608527228924687",
            "extra": "mean: 2.960734562318845 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1049.4022923385107,
            "unit": "iter/sec",
            "range": "stddev: 0.000024466697608610678",
            "extra": "mean: 952.9233996350231 usec\nrounds: 1096"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2323.274019753798,
            "unit": "iter/sec",
            "range": "stddev: 0.000012879947557206002",
            "extra": "mean: 430.42705746176773 usec\nrounds: 2419"
          }
        ]
      },
      {
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
        "date": 1638199656294,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.56185571989846,
            "unit": "iter/sec",
            "range": "stddev: 0.00003304331423394794",
            "extra": "mean: 3.453493546357601 msec\nrounds: 302"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 843.8083750130867,
            "unit": "iter/sec",
            "range": "stddev: 0.00002318568004990766",
            "extra": "mean: 1.1851031935828924 msec\nrounds: 935"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1704.941964218207,
            "unit": "iter/sec",
            "range": "stddev: 0.000014656357882986453",
            "extra": "mean: 586.5302285867222 usec\nrounds: 1868"
          }
        ]
      },
      {
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
        "date": 1638368880358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.9504469334627,
            "unit": "iter/sec",
            "range": "stddev: 0.000388953643641415",
            "extra": "mean: 3.5593465357142833 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 839.8633313967899,
            "unit": "iter/sec",
            "range": "stddev: 0.00011424276273953559",
            "extra": "mean: 1.1906699133261174 msec\nrounds: 923"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1533.509912199399,
            "unit": "iter/sec",
            "range": "stddev: 0.00016565256160242116",
            "extra": "mean: 652.098817258882 usec\nrounds: 1773"
          }
        ]
      },
      {
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
        "date": 1638369067205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.597658039093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693270844200805",
            "extra": "mean: 3.406021719242898 msec\nrounds: 317"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.1820819465398,
            "unit": "iter/sec",
            "range": "stddev: 0.000025636960658957873",
            "extra": "mean: 1.1762186256742126 msec\nrounds: 927"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1730.5984479785998,
            "unit": "iter/sec",
            "range": "stddev: 0.000021002648224694374",
            "extra": "mean: 577.8347953380147 usec\nrounds: 2145"
          }
        ]
      },
      {
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
        "date": 1638369298895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.21036364650155,
            "unit": "iter/sec",
            "range": "stddev: 0.00018842063959071054",
            "extra": "mean: 3.2657287888349527 msec\nrounds: 412"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 905.4818715175265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000799413828461293",
            "extra": "mean: 1.1043843410404974 msec\nrounds: 1211"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1852.7378817417507,
            "unit": "iter/sec",
            "range": "stddev: 0.00005538125213324292",
            "extra": "mean: 539.7417572419389 usec\nrounds: 2451"
          }
        ]
      },
      {
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
        "date": 1638454916549,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 379.9527627683531,
            "unit": "iter/sec",
            "range": "stddev: 0.00003111881268181923",
            "extra": "mean: 2.631906115681209 msec\nrounds: 389"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1113.4113473032094,
            "unit": "iter/sec",
            "range": "stddev: 0.00002350754512735948",
            "extra": "mean: 898.1406579177564 usec\nrounds: 1143"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2235.655788441954,
            "unit": "iter/sec",
            "range": "stddev: 0.00001209647605261767",
            "extra": "mean: 447.2960485106286 usec\nrounds: 2350"
          }
        ]
      },
      {
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
        "date": 1638541252136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.7008440105948,
            "unit": "iter/sec",
            "range": "stddev: 0.000024759148310015847",
            "extra": "mean: 2.978842674486811 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1042.6307274949966,
            "unit": "iter/sec",
            "range": "stddev: 0.000028988500914254585",
            "extra": "mean: 959.1123430656793 usec\nrounds: 1096"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2346.6988315190342,
            "unit": "iter/sec",
            "range": "stddev: 0.000012383658409849558",
            "extra": "mean: 426.1305228301039 usec\nrounds: 2431"
          }
        ]
      },
      {
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
        "date": 1638801007223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 337.6574237468554,
            "unit": "iter/sec",
            "range": "stddev: 0.000035620421810218117",
            "extra": "mean: 2.961581560693623 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 983.8254317356159,
            "unit": "iter/sec",
            "range": "stddev: 0.000014972990289621996",
            "extra": "mean: 1.0164404860279428 msec\nrounds: 1002"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1978.159348010662,
            "unit": "iter/sec",
            "range": "stddev: 0.00001207598005976179",
            "extra": "mean: 505.5204480901152 usec\nrounds: 2042"
          }
        ]
      },
      {
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
        "date": 1638801474946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 336.9203411388983,
            "unit": "iter/sec",
            "range": "stddev: 0.000059429282679740465",
            "extra": "mean: 2.968060630057778 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 983.7328129397017,
            "unit": "iter/sec",
            "range": "stddev: 0.000015358532736679936",
            "extra": "mean: 1.0165361842629677 msec\nrounds: 1004"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1992.8304141320018,
            "unit": "iter/sec",
            "range": "stddev: 0.000011401882008413938",
            "extra": "mean: 501.7988449536789 usec\nrounds: 2051"
          }
        ]
      },
      {
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
        "date": 1638973055103,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 220.68091781133154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008129787717282343",
            "extra": "mean: 4.531429404580136 msec\nrounds: 262"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 675.0989606853083,
            "unit": "iter/sec",
            "range": "stddev: 0.0003582988443211517",
            "extra": "mean: 1.4812643156565923 msec\nrounds: 792"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1247.1855241945607,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835099353514971",
            "extra": "mean: 801.8053293601251 usec\nrounds: 1594"
          }
        ]
      },
      {
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
        "date": 1638973444559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.7077395907783,
            "unit": "iter/sec",
            "range": "stddev: 0.0006427305083745815",
            "extra": "mean: 3.6402323483483277 msec\nrounds: 333"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 791.7092582256504,
            "unit": "iter/sec",
            "range": "stddev: 0.00023753134793807755",
            "extra": "mean: 1.2630899406698404 msec\nrounds: 1045"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1508.2526282534116,
            "unit": "iter/sec",
            "range": "stddev: 0.00017658869872928256",
            "extra": "mean: 663.0189009900956 usec\nrounds: 2020"
          }
        ]
      },
      {
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
        "date": 1639059582241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.4330119920086,
            "unit": "iter/sec",
            "range": "stddev: 0.000032344439852140456",
            "extra": "mean: 2.9547944927536003 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 990.5999385534914,
            "unit": "iter/sec",
            "range": "stddev: 0.00001491609845240426",
            "extra": "mean: 1.0094892610837782 msec\nrounds: 1015"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1997.4375425219,
            "unit": "iter/sec",
            "range": "stddev: 0.000010868525443460884",
            "extra": "mean: 500.64143619601356 usec\nrounds: 2061"
          }
        ]
      },
      {
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
        "date": 1639146299404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 339.5040983345169,
            "unit": "iter/sec",
            "range": "stddev: 0.00002380568615314911",
            "extra": "mean: 2.9454725433525977 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 991.5038546187628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000147888259330572",
            "extra": "mean: 1.0085689484127158 msec\nrounds: 1008"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1987.696548111552,
            "unit": "iter/sec",
            "range": "stddev: 0.00001009689658937267",
            "extra": "mean: 503.09490196079906 usec\nrounds: 2040"
          }
        ]
      },
      {
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
        "date": 1639146839011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.0478783504106,
            "unit": "iter/sec",
            "range": "stddev: 0.00020921010519997437",
            "extra": "mean: 2.9407623563218523 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 998.9786372035536,
            "unit": "iter/sec",
            "range": "stddev: 0.00001285273466322489",
            "extra": "mean: 1.001022407044965 msec\nrounds: 1022"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1980.3830453421504,
            "unit": "iter/sec",
            "range": "stddev: 0.00001509010255966802",
            "extra": "mean: 504.9528182701797 usec\nrounds: 2058"
          }
        ]
      },
      {
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
        "date": 1639406536135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 245.00075541899434,
            "unit": "iter/sec",
            "range": "stddev: 0.0011054370149550395",
            "extra": "mean: 4.081620068027237 msec\nrounds: 294"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 757.2495430117617,
            "unit": "iter/sec",
            "range": "stddev: 0.00039010114307634934",
            "extra": "mean: 1.320568641115004 msec\nrounds: 861"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1613.5980931013007,
            "unit": "iter/sec",
            "range": "stddev: 0.00011573493838622823",
            "extra": "mean: 619.7330080367296 usec\nrounds: 1742"
          }
        ]
      },
      {
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
        "date": 1639406864012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.38318392313886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114854999790972",
            "extra": "mean: 3.782388823529407 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 765.4892522193435,
            "unit": "iter/sec",
            "range": "stddev: 0.00027173266071102854",
            "extra": "mean: 1.3063540697674745 msec\nrounds: 1032"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1547.2416498367056,
            "unit": "iter/sec",
            "range": "stddev: 0.00013937729122948293",
            "extra": "mean: 646.3114537445001 usec\nrounds: 2043"
          }
        ]
      },
      {
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
        "date": 1639578111289,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.69011890176574,
            "unit": "iter/sec",
            "range": "stddev: 0.000035014530494232094",
            "extra": "mean: 2.9525514450867156 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 974.5785603599647,
            "unit": "iter/sec",
            "range": "stddev: 0.00002495143527381126",
            "extra": "mean: 1.0260845463608863 msec\nrounds: 1003"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1991.421613621354,
            "unit": "iter/sec",
            "range": "stddev: 0.00001029812076249551",
            "extra": "mean: 502.153834808252 usec\nrounds: 2034"
          }
        ]
      },
      {
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
        "date": 1639665025230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 254.41836946724047,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170472120740999",
            "extra": "mean: 3.930533797909441 msec\nrounds: 287"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 783.2606530059696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267826677155486",
            "extra": "mean: 1.2767142025610962 msec\nrounds: 859"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1672.169484074455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000162466079722132",
            "extra": "mean: 598.0255049047852 usec\nrounds: 1733"
          }
        ]
      },
      {
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
        "date": 1639665482675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 334.6795754395007,
            "unit": "iter/sec",
            "range": "stddev: 0.00006363953277806569",
            "extra": "mean: 2.987932558139533 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 983.9075260203807,
            "unit": "iter/sec",
            "range": "stddev: 0.000014684178640046808",
            "extra": "mean: 1.016355677290841 msec\nrounds: 1004"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1992.2067211113124,
            "unit": "iter/sec",
            "range": "stddev: 0.000012508071763985062",
            "extra": "mean: 501.9559413202713 usec\nrounds: 2045"
          }
        ]
      },
      {
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
        "date": 1639750938868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 254.83865916839102,
            "unit": "iter/sec",
            "range": "stddev: 0.0009233265884744787",
            "extra": "mean: 3.924051410658321 msec\nrounds: 319"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 776.982475374387,
            "unit": "iter/sec",
            "range": "stddev: 0.00031989537687210595",
            "extra": "mean: 1.2870303149606463 msec\nrounds: 1016"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1436.728645167741,
            "unit": "iter/sec",
            "range": "stddev: 0.00039385044118497186",
            "extra": "mean: 696.0256575682375 usec\nrounds: 2015"
          }
        ]
      },
      {
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
        "date": 1640010638313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.48122395595095,
            "unit": "iter/sec",
            "range": "stddev: 0.000026000310260412656",
            "extra": "mean: 2.954373623188438 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 989.1583732746525,
            "unit": "iter/sec",
            "range": "stddev: 0.000017623072679443007",
            "extra": "mean: 1.0109604558969216 msec\nrounds: 1009"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1998.219750119131,
            "unit": "iter/sec",
            "range": "stddev: 0.000010084196058473798",
            "extra": "mean: 500.44545898436917 usec\nrounds: 2048"
          }
        ]
      },
      {
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
        "date": 1640011292220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.177268629462,
            "unit": "iter/sec",
            "range": "stddev: 0.00002712123787495404",
            "extra": "mean: 2.939643804034566 msec\nrounds: 347"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 996.6035945871629,
            "unit": "iter/sec",
            "range": "stddev: 0.000012553614618881195",
            "extra": "mean: 1.0034079802955598 msec\nrounds: 1015"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1990.6154192484635,
            "unit": "iter/sec",
            "range": "stddev: 0.000010752557643082062",
            "extra": "mean: 502.3572058823596 usec\nrounds: 2040"
          }
        ]
      },
      {
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
        "date": 1640011560659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.9293832675338,
            "unit": "iter/sec",
            "range": "stddev: 0.000021288719008628254",
            "extra": "mean: 2.9331587392550467 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1002.5203558318204,
            "unit": "iter/sec",
            "range": "stddev: 0.000013916956479213939",
            "extra": "mean: 997.4859803921596 usec\nrounds: 1020"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1996.343080102928,
            "unit": "iter/sec",
            "range": "stddev: 0.00001241735364288387",
            "extra": "mean: 500.91590466927244 usec\nrounds: 2056"
          }
        ]
      },
      {
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
        "date": 1640269376926,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 333.5657890245168,
            "unit": "iter/sec",
            "range": "stddev: 0.00005389345876383995",
            "extra": "mean: 2.997909356725131 msec\nrounds: 342"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 968.1236782368385,
            "unit": "iter/sec",
            "range": "stddev: 0.000027884918991912445",
            "extra": "mean: 1.032925877632923 msec\nrounds: 997"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1984.7873652445414,
            "unit": "iter/sec",
            "range": "stddev: 0.00001163561387904819",
            "extra": "mean: 503.83230844317274 usec\nrounds: 2049"
          }
        ]
      },
      {
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
        "date": 1640700843551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 341.60524847832886,
            "unit": "iter/sec",
            "range": "stddev: 0.000039312315235523366",
            "extra": "mean: 2.9273554913294584 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 998.5602132298137,
            "unit": "iter/sec",
            "range": "stddev: 0.000012549029358560726",
            "extra": "mean: 1.0014418627450912 msec\nrounds: 1020"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2006.9682948503855,
            "unit": "iter/sec",
            "range": "stddev: 0.000009971455295963482",
            "extra": "mean: 498.26397485494283 usec\nrounds: 2068"
          }
        ]
      },
      {
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
        "date": 1640787563096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 309.9829051166595,
            "unit": "iter/sec",
            "range": "stddev: 0.0003585855468440813",
            "extra": "mean: 3.2259843478260786 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 842.5589021423314,
            "unit": "iter/sec",
            "range": "stddev: 0.00040634851056372336",
            "extra": "mean: 1.186860642570331 msec\nrounds: 996"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1794.0054134246323,
            "unit": "iter/sec",
            "range": "stddev: 0.00008973752071360778",
            "extra": "mean: 557.4119188921895 usec\nrounds: 2022"
          }
        ]
      },
      {
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
        "date": 1640788289130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.08424503016573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005422298438024415",
            "extra": "mean: 3.7582082317073335 msec\nrounds: 328"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 808.1867217825222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002949921831647947",
            "extra": "mean: 1.2373378243513056 msec\nrounds: 1002"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1636.9946263171298,
            "unit": "iter/sec",
            "range": "stddev: 0.00019981175557612802",
            "extra": "mean: 610.8755544602949 usec\nrounds: 2029"
          }
        ]
      },
      {
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
        "date": 1640874340021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 307.54813899448715,
            "unit": "iter/sec",
            "range": "stddev: 0.00014685787256294892",
            "extra": "mean: 3.2515234957020023 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 926.8344154983232,
            "unit": "iter/sec",
            "range": "stddev: 0.00008031958512994392",
            "extra": "mean: 1.0789413764510876 msec\nrounds: 1206"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1867.955664957189,
            "unit": "iter/sec",
            "range": "stddev: 0.000044031021297424035",
            "extra": "mean: 535.3446116307683 usec\nrounds: 2459"
          }
        ]
      },
      {
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
        "date": 1640874921670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.02500841734053,
            "unit": "iter/sec",
            "range": "stddev: 0.00008770630217104898",
            "extra": "mean: 3.401071240105519 msec\nrounds: 379"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 862.488525822286,
            "unit": "iter/sec",
            "range": "stddev: 0.00004325834349450134",
            "extra": "mean: 1.1594357142857201 msec\nrounds: 1120"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1742.9421922267404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003172186107561329",
            "extra": "mean: 573.742493847386 usec\nrounds: 2438"
          }
        ]
      },
      {
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
        "date": 1640960287000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.75313087354374,
            "unit": "iter/sec",
            "range": "stddev: 0.00006237765202823254",
            "extra": "mean: 2.9783787790697764 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 974.5607794479155,
            "unit": "iter/sec",
            "range": "stddev: 0.00002685503828861622",
            "extra": "mean: 1.0261032673267396 msec\nrounds: 1010"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1982.4640546435332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000171693761561265",
            "extra": "mean: 504.4227650219917 usec\nrounds: 2047"
          }
        ]
      },
      {
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
        "date": 1641219826318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.1875534602985,
            "unit": "iter/sec",
            "range": "stddev: 0.001037622084849246",
            "extra": "mean: 3.2134961340206063 msec\nrounds: 388"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1058.5703211543005,
            "unit": "iter/sec",
            "range": "stddev: 0.00018117687474971254",
            "extra": "mean: 944.6703539823094 usec\nrounds: 1130"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2190.1049410913624,
            "unit": "iter/sec",
            "range": "stddev: 0.00006844186140882765",
            "extra": "mean: 456.59912510935885 usec\nrounds: 2286"
          }
        ]
      },
      {
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
        "date": 1641220333988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 339.06218136582805,
            "unit": "iter/sec",
            "range": "stddev: 0.00003552140419174438",
            "extra": "mean: 2.949311527377508 msec\nrounds: 347"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 981.93729734217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002554135150465886",
            "extra": "mean: 1.0183949654491387 msec\nrounds: 1013"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1992.6411209622865,
            "unit": "iter/sec",
            "range": "stddev: 0.000012054337192803883",
            "extra": "mean: 501.846513895628 usec\nrounds: 2051"
          }
        ]
      },
      {
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
        "date": 1641392502177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.96229946541916,
            "unit": "iter/sec",
            "range": "stddev: 0.000029062096014223767",
            "extra": "mean: 2.9328755747126856 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 987.8086804323846,
            "unit": "iter/sec",
            "range": "stddev: 0.000019563707950534532",
            "extra": "mean: 1.0123417821781837 msec\nrounds: 1010"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1996.9317934813312,
            "unit": "iter/sec",
            "range": "stddev: 0.000011733607031654404",
            "extra": "mean: 500.7682301740812 usec\nrounds: 2068"
          }
        ]
      },
      {
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
        "date": 1641393064798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.67498279261184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081212782962644",
            "extra": "mean: 3.588409659090905 msec\nrounds: 352"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 798.5404850722473,
            "unit": "iter/sec",
            "range": "stddev: 0.000342211850311113",
            "extra": "mean: 1.2522846601941864 msec\nrounds: 1030"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1502.7633093927761,
            "unit": "iter/sec",
            "range": "stddev: 0.0003145801676375994",
            "extra": "mean: 665.440787481078 usec\nrounds: 1981"
          }
        ]
      },
      {
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
        "date": 1641478766591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.2747691090476,
            "unit": "iter/sec",
            "range": "stddev: 0.000510245337101672",
            "extra": "mean: 3.6459788235293877 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.0625875972933,
            "unit": "iter/sec",
            "range": "stddev: 0.00015116175393536553",
            "extra": "mean: 1.1722469306930523 msec\nrounds: 1010"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1676.8834849965622,
            "unit": "iter/sec",
            "range": "stddev: 0.00012263091806697667",
            "extra": "mean: 596.3443548387323 usec\nrounds: 1984"
          }
        ]
      },
      {
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
        "date": 1641485003105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 337.5906614399134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003654529524181379",
            "extra": "mean: 2.9621672463768274 msec\nrounds: 345"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 972.108466286267,
            "unit": "iter/sec",
            "range": "stddev: 0.000014529106047457761",
            "extra": "mean: 1.0286917917918015 msec\nrounds: 999"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1986.2086764863348,
            "unit": "iter/sec",
            "range": "stddev: 0.00001077440953039817",
            "extra": "mean: 503.47177103718593 usec\nrounds: 2044"
          }
        ]
      },
      {
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
        "date": 1641485562256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 228.81015550994323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005724416935271715",
            "extra": "mean: 4.370435384615364 msec\nrounds: 260"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 724.8074040854103,
            "unit": "iter/sec",
            "range": "stddev: 0.0003460090580527791",
            "extra": "mean: 1.3796768553459222 msec\nrounds: 795"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1410.2784658934224,
            "unit": "iter/sec",
            "range": "stddev: 0.0003155382210664605",
            "extra": "mean: 709.0798194713213 usec\nrounds: 1551"
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
        "date": 1641520290002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 382.5138219898352,
            "unit": "iter/sec",
            "range": "stddev: 0.000029254250572974867",
            "extra": "mean: 2.6142846153846264 msec\nrounds: 390"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1097.0563076402475,
            "unit": "iter/sec",
            "range": "stddev: 0.000018700467748406655",
            "extra": "mean: 911.530240549809 usec\nrounds: 1164"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2241.7524678275613,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656695650991773",
            "extra": "mean: 446.0795803066877 usec\nrounds: 2478"
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
        "date": 1641520651047,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 383.09098919175204,
            "unit": "iter/sec",
            "range": "stddev: 0.00003044215652322379",
            "extra": "mean: 2.6103459183673485 msec\nrounds: 392"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1090.5981081307982,
            "unit": "iter/sec",
            "range": "stddev: 0.000029534666555348503",
            "extra": "mean: 916.9280530973261 usec\nrounds: 1130"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2270.280391330839,
            "unit": "iter/sec",
            "range": "stddev: 0.00000951387861920683",
            "extra": "mean: 440.4742268041173 usec\nrounds: 2328"
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
        "date": 1641523342503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 319.97619128611655,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477928472413642",
            "extra": "mean: 3.125232524271843 msec\nrounds: 412"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 945.6537353754222,
            "unit": "iter/sec",
            "range": "stddev: 0.00011140544179533409",
            "extra": "mean: 1.05746951827246 msec\nrounds: 1204"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1843.207723951915,
            "unit": "iter/sec",
            "range": "stddev: 0.00004263838268453609",
            "extra": "mean: 542.5324487334276 usec\nrounds: 2487"
          }
        ]
      },
      {
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
        "date": 1641565389575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 241.71607824460628,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256361709168604",
            "extra": "mean: 4.137085159010577 msec\nrounds: 283"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 704.2452014462089,
            "unit": "iter/sec",
            "range": "stddev: 0.00029419933396865306",
            "extra": "mean: 1.4199599769319566 msec\nrounds: 867"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1392.659535998373,
            "unit": "iter/sec",
            "range": "stddev: 0.00014167696011681199",
            "extra": "mean: 718.0505889281243 usec\nrounds: 1698"
          }
        ]
      },
      {
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
        "date": 1641565883617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 259.31136316432367,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033507024579749",
            "extra": "mean: 3.85636783439493 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 782.729374941612,
            "unit": "iter/sec",
            "range": "stddev: 0.00022702466747058235",
            "extra": "mean: 1.2775807731434576 msec\nrounds: 983"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1539.445707500739,
            "unit": "iter/sec",
            "range": "stddev: 0.00009489084712912232",
            "extra": "mean: 649.5844544095557 usec\nrounds: 2007"
          }
        ]
      },
      {
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
        "date": 1641566687752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 343.49186746095404,
            "unit": "iter/sec",
            "range": "stddev: 0.000026776632280084747",
            "extra": "mean: 2.9112770773639163 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 993.621768934008,
            "unit": "iter/sec",
            "range": "stddev: 0.000030197304856169045",
            "extra": "mean: 1.0064191740412802 msec\nrounds: 1017"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2033.139986853641,
            "unit": "iter/sec",
            "range": "stddev: 0.000009221847039903235",
            "extra": "mean: 491.8500479386748 usec\nrounds: 2086"
          }
        ]
      },
      {
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
        "date": 1641825998808,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 250.51549026385993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004363880126242736",
            "extra": "mean: 3.991769127516754 msec\nrounds: 298"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 745.8686288059804,
            "unit": "iter/sec",
            "range": "stddev: 0.00014179221738772253",
            "extra": "mean: 1.3407186753528493 msec\nrounds: 921"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1504.8074768916833,
            "unit": "iter/sec",
            "range": "stddev: 0.00011343688681227729",
            "extra": "mean: 664.5368363437367 usec\nrounds: 1827"
          }
        ]
      },
      {
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
        "date": 1641826311501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 341.02204109727415,
            "unit": "iter/sec",
            "range": "stddev: 0.000026037237892045582",
            "extra": "mean: 2.9323617816091745 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 989.3908504402984,
            "unit": "iter/sec",
            "range": "stddev: 0.000015797299186867963",
            "extra": "mean: 1.0107229105211357 msec\nrounds: 1017"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1997.9624470392996,
            "unit": "iter/sec",
            "range": "stddev: 0.000011624142922354843",
            "extra": "mean: 500.50990772216954 usec\nrounds: 2059"
          }
        ]
      },
      {
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
        "date": 1641826664213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 381.7592873930807,
            "unit": "iter/sec",
            "range": "stddev: 0.00002447859538136343",
            "extra": "mean: 2.6194516624040745 msec\nrounds: 391"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1107.0441049705523,
            "unit": "iter/sec",
            "range": "stddev: 0.000014231550022087078",
            "extra": "mean: 903.3063773250483 usec\nrounds: 1129"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2236.829923873971,
            "unit": "iter/sec",
            "range": "stddev: 0.000010066929027685281",
            "extra": "mean: 447.0612581345021 usec\nrounds: 2305"
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
        "date": 1641848345653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.06799914917104,
            "unit": "iter/sec",
            "range": "stddev: 0.00024511273268334907",
            "extra": "mean: 3.4121773885350133 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 869.3010753746418,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628308295026949",
            "extra": "mean: 1.1503494339622564 msec\nrounds: 1060"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1761.5747072589718,
            "unit": "iter/sec",
            "range": "stddev: 0.00003159814540630483",
            "extra": "mean: 567.67390896297 usec\nrounds: 2131"
          }
        ]
      },
      {
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
        "date": 1641911223645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 343.0086938983518,
            "unit": "iter/sec",
            "range": "stddev: 0.00002977658743562426",
            "extra": "mean: 2.915378000000032 msec\nrounds: 350"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1001.2600170175036,
            "unit": "iter/sec",
            "range": "stddev: 0.000012518735615212716",
            "extra": "mean: 998.7415686274412 usec\nrounds: 1020"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1996.816953228748,
            "unit": "iter/sec",
            "range": "stddev: 0.000011769246538904143",
            "extra": "mean: 500.7970301849915 usec\nrounds: 2054"
          }
        ]
      },
      {
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
        "date": 1641911553000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 258.49362575820334,
            "unit": "iter/sec",
            "range": "stddev: 0.00041465453447110456",
            "extra": "mean: 3.868567346938786 msec\nrounds: 294"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 764.9867763412944,
            "unit": "iter/sec",
            "range": "stddev: 0.00036057204627997126",
            "extra": "mean: 1.3072121387283377 msec\nrounds: 865"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1462.8826651388088,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055145879842688",
            "extra": "mean: 683.5818236352626 usec\nrounds: 1667"
          }
        ]
      },
      {
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
        "date": 1641997148457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.1097883981389,
            "unit": "iter/sec",
            "range": "stddev: 0.000055192117622454416",
            "extra": "mean: 3.4588936111110837 msec\nrounds: 360"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 843.5931487877641,
            "unit": "iter/sec",
            "range": "stddev: 0.000035671692048642965",
            "extra": "mean: 1.1854055493895264 msec\nrounds: 901"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1702.506476795813,
            "unit": "iter/sec",
            "range": "stddev: 0.00001689188794022472",
            "extra": "mean: 587.3692779613039 usec\nrounds: 2119"
          }
        ]
      },
      {
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
        "date": 1642083600226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 252.0986684529676,
            "unit": "iter/sec",
            "range": "stddev: 0.0004830974029132743",
            "extra": "mean: 3.9667008403361064 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 761.6365457015605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002186851387709624",
            "extra": "mean: 1.3129622070312783 msec\nrounds: 1024"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1455.9931253202508,
            "unit": "iter/sec",
            "range": "stddev: 0.00017831900196928527",
            "extra": "mean: 686.8164296998631 usec\nrounds: 1899"
          }
        ]
      },
      {
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
        "date": 1642084484536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.05895362607112,
            "unit": "iter/sec",
            "range": "stddev: 0.00022702775005437503",
            "extra": "mean: 3.951648363636386 msec\nrounds: 275"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 748.2911521267438,
            "unit": "iter/sec",
            "range": "stddev: 0.0001055718075183536",
            "extra": "mean: 1.3363782227784813 msec\nrounds: 799"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1428.0179921543336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001341605247003778",
            "extra": "mean: 700.2712889432031 usec\nrounds: 1637"
          }
        ]
      },
      {
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
        "date": 1642430852589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.1705807951478,
            "unit": "iter/sec",
            "range": "stddev: 0.000041612180130685474",
            "extra": "mean: 3.4822508532423333 msec\nrounds: 293"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 832.3728356751601,
            "unit": "iter/sec",
            "range": "stddev: 0.000030059878613815334",
            "extra": "mean: 1.2013847126436712 msec\nrounds: 870"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1710.7629332366232,
            "unit": "iter/sec",
            "range": "stddev: 0.000013354265168802785",
            "extra": "mean: 584.5345258375935 usec\nrounds: 1761"
          }
        ]
      },
      {
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
        "date": 1642431828181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.3997394671214,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012850212910495",
            "extra": "mean: 3.3738221288515224 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 836.102299499418,
            "unit": "iter/sec",
            "range": "stddev: 0.00031793653616873045",
            "extra": "mean: 1.1960258937198343 msec\nrounds: 1035"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1685.5884481004996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769400732480561",
            "extra": "mean: 593.2646258503411 usec\nrounds: 2058"
          }
        ]
      },
      {
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
        "date": 1642432156923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 248.51188496541997,
            "unit": "iter/sec",
            "range": "stddev: 0.00030016386240606815",
            "extra": "mean: 4.023952416356861 msec\nrounds: 269"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 724.3395773253322,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462223312896685",
            "extra": "mean: 1.3805679425837265 msec\nrounds: 836"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1384.1631306169222,
            "unit": "iter/sec",
            "range": "stddev: 0.00030776125154875983",
            "extra": "mean: 722.4581972171875 usec\nrounds: 1653"
          }
        ]
      },
      {
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
        "date": 1642432374377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 221.64773780777506,
            "unit": "iter/sec",
            "range": "stddev: 0.0010948137725720706",
            "extra": "mean: 4.511663461538481 msec\nrounds: 260"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 643.1941354025195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729352006170416",
            "extra": "mean: 1.5547405440414763 msec\nrounds: 772"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1314.6856595209033,
            "unit": "iter/sec",
            "range": "stddev: 0.00041668912516626736",
            "extra": "mean: 760.6380983606524 usec\nrounds: 1525"
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
        "date": 1645920504424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.94307200223653,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960412588777102",
            "extra": "mean: 3.760203236245952 msec\nrounds: 309"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 763.2296934277074,
            "unit": "iter/sec",
            "range": "stddev: 0.00028392561756122826",
            "extra": "mean: 1.3102215605749612 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1413.531830270006,
            "unit": "iter/sec",
            "range": "stddev: 0.00017060324718813736",
            "extra": "mean: 707.4478116343407 usec\nrounds: 1805"
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
        "date": 1645924107117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 290.70069249057815,
            "unit": "iter/sec",
            "range": "stddev: 0.0001452748288044244",
            "extra": "mean: 3.4399642857142863 msec\nrounds: 350"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.8084384767675,
            "unit": "iter/sec",
            "range": "stddev: 0.00003280312173384904",
            "extra": "mean: 1.1725962770562364 msec\nrounds: 1155"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1744.4332099690992,
            "unit": "iter/sec",
            "range": "stddev: 0.00003060365174079432",
            "extra": "mean: 573.2520994700129 usec\nrounds: 2453"
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
        "date": 1645924867019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 270.30658261224625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004008131591861777",
            "extra": "mean: 3.699502950819722 msec\nrounds: 305"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 791.0806906485639,
            "unit": "iter/sec",
            "range": "stddev: 0.00016750245842202794",
            "extra": "mean: 1.2640935517970417 msec\nrounds: 946"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1518.8977829963599,
            "unit": "iter/sec",
            "range": "stddev: 0.0001515349566639931",
            "extra": "mean: 658.3721506441863 usec\nrounds: 2018"
          }
        ]
      },
      {
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
        "date": 1645925638903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 237.6088029897221,
            "unit": "iter/sec",
            "range": "stddev: 0.00044799353647256195",
            "extra": "mean: 4.208598281786957 msec\nrounds: 291"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 649.5326656857436,
            "unit": "iter/sec",
            "range": "stddev: 0.0003810963013417062",
            "extra": "mean: 1.539568451025093 msec\nrounds: 878"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1386.9268468491503,
            "unit": "iter/sec",
            "range": "stddev: 0.0001449386740169235",
            "extra": "mean: 721.0185614849271 usec\nrounds: 1724"
          }
        ]
      },
      {
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
        "date": 1645926165440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.6216550013447,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307731870217074",
            "extra": "mean: 3.4291006269592317 msec\nrounds: 319"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.4048413555412,
            "unit": "iter/sec",
            "range": "stddev: 0.00002660353894492907",
            "extra": "mean: 1.1717768069039876 msec\nrounds: 927"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1711.5071795531999,
            "unit": "iter/sec",
            "range": "stddev: 0.000017861579185522192",
            "extra": "mean: 584.28034188034 usec\nrounds: 1872"
          }
        ]
      },
      {
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
        "date": 1645926741912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 267.35050830637994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003413755890064105",
            "extra": "mean: 3.740408074534177 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 784.8344415236757,
            "unit": "iter/sec",
            "range": "stddev: 0.00019987279528069002",
            "extra": "mean: 1.2741540726202107 msec\nrounds: 1019"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1546.5408498784436,
            "unit": "iter/sec",
            "range": "stddev: 0.00011979808707057042",
            "extra": "mean: 646.6043234995047 usec\nrounds: 1966"
          }
        ]
      },
      {
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
        "date": 1645927135270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 341.3958178327541,
            "unit": "iter/sec",
            "range": "stddev: 0.000030325992792500867",
            "extra": "mean: 2.929151289398303 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 998.1086868857163,
            "unit": "iter/sec",
            "range": "stddev: 0.000014232866633181959",
            "extra": "mean: 1.0018948969577501 msec\nrounds: 1019"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2002.8364071499013,
            "unit": "iter/sec",
            "range": "stddev: 0.000009467752815606188",
            "extra": "mean: 499.29190243901706 usec\nrounds: 2050"
          }
        ]
      },
      {
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
        "date": 1645927789642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 337.06442751370975,
            "unit": "iter/sec",
            "range": "stddev: 0.000031241765665425506",
            "extra": "mean: 2.9667918604650914 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 975.6106101690568,
            "unit": "iter/sec",
            "range": "stddev: 0.00002503460098935937",
            "extra": "mean: 1.0249991026919203 msec\nrounds: 1003"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1994.0101651594293,
            "unit": "iter/sec",
            "range": "stddev: 0.000011653443569409696",
            "extra": "mean: 501.5019569471682 usec\nrounds: 2044"
          }
        ]
      }
    ]
  }
}