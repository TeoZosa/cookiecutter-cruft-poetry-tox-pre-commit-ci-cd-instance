window.BENCHMARK_DATA = {
  "lastUpdate": 1623176949414,
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
        "date": 1623176115675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1241.3025604359175,
            "unit": "iter/sec",
            "range": "stddev: 0.00006281738821227975",
            "extra": "mean: 805.605363166916 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1746.2933147390404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004678824391508213",
            "extra": "mean: 572.6414867192207 usec\nrounds: 1619"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13609.188020273863,
            "unit": "iter/sec",
            "range": "stddev: 0.000009239683551708355",
            "extra": "mean: 73.47976958730243 usec\nrounds: 1736"
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
        "date": 1623176947481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1164.7711635475828,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176328843141665",
            "extra": "mean: 858.5377379658561 usec\nrounds: 561"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1700.5378754916278,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698890401514664",
            "extra": "mean: 588.0492368985892 usec\nrounds: 1393"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13789.251343437683,
            "unit": "iter/sec",
            "range": "stddev: 0.000008854224541578295",
            "extra": "mean: 72.52025328234377 usec\nrounds: 2057"
          }
        ]
      }
    ]
  }
}