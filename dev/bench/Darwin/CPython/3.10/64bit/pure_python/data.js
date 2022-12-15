window.BENCHMARK_DATA = {
  "lastUpdate": 1671079537898,
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
        "date": 1671036236625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.8382602171706,
            "unit": "iter/sec",
            "range": "stddev: 0.00016878613415054888",
            "extra": "mean: 3.176234042553199 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 599.7713792804183,
            "unit": "iter/sec",
            "range": "stddev: 0.00015978779914505375",
            "extra": "mean: 1.667301966292156 msec\nrounds: 712"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1660.5837057878482,
            "unit": "iter/sec",
            "range": "stddev: 0.000072796612579822",
            "extra": "mean: 602.1978877153678 usec\nrounds: 1799"
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
        "date": 1671079534662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.4200773365074,
            "unit": "iter/sec",
            "range": "stddev: 0.00024215010876664037",
            "extra": "mean: 3.4080830769230386 msec\nrounds: 325"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 628.2044033538821,
            "unit": "iter/sec",
            "range": "stddev: 0.00009119179711254264",
            "extra": "mean: 1.5918385714286005 msec\nrounds: 700"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1558.6443367881188,
            "unit": "iter/sec",
            "range": "stddev: 0.00005013106046174816",
            "extra": "mean: 641.5831863609687 usec\nrounds: 1701"
          }
        ]
      }
    ]
  }
}