window.BENCHMARK_DATA = {
  "lastUpdate": 1623176997842,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "860695ffd0855c6a8a80fe59df3db499cdffebba",
          "message": ":bulb: Backtick-quote sphinx extensions in comments\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@25194b0",
          "timestamp": "2021-06-08T18:09:05Z",
          "tree_id": "b1a6266c228478d68856e2a6c7c32c7d59716092"
        },
        "date": 1623176136187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1199.6257775612175,
            "unit": "iter/sec",
            "range": "stddev: 0.000016891558567994448",
            "extra": "mean: 833.5932910952887 usec\nrounds: 584"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1710.662637802494,
            "unit": "iter/sec",
            "range": "stddev: 0.000020532882338451633",
            "extra": "mean: 584.5687968520745 usec\nrounds: 1398"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11072.655529341588,
            "unit": "iter/sec",
            "range": "stddev: 0.00012867032298163184",
            "extra": "mean: 90.31257202484858 usec\nrounds: 1437"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "5ac27bd6e4bf55c47546f1bbfbd827d8dff4cfb2",
          "message": ":construction_worker: Remove deprecated `GITHUB_TOKEN` field\n\nsee: https://github.com/JamesIves/github-pages-deploy-action/releases/tag/4.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0baadd2",
          "timestamp": "2021-06-08T18:22:42Z",
          "tree_id": "3cb10c48f7dfff73be803944be4d86e8343fbc3d"
        },
        "date": 1623176995739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 904.2707444754252,
            "unit": "iter/sec",
            "range": "stddev: 0.0003509269816343962",
            "extra": "mean: 1.1058634884623058 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1317.8817245829625,
            "unit": "iter/sec",
            "range": "stddev: 0.00014738144908592484",
            "extra": "mean: 758.7934344536459 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8911.416339339103,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569523623798416",
            "extra": "mean: 112.21560770149844 usec\nrounds: 1662"
          }
        ]
      }
    ]
  }
}