window.BENCHMARK_DATA = {
  "lastUpdate": 1624731459769,
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
          "id": "cc4b111e54f3b9195e9c80ab172e192d3bbb05dc",
          "message": ":construction_worker: :pushpin: Pin template `ahmadnassri/action-dependabot-auto-merge` version\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fdb09b0",
          "timestamp": "2021-06-26T18:11:44Z",
          "tree_id": "c5a3a4a37eafd785b2e5fb38791cef4113f32f8a"
        },
        "date": 1624731457762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1285.2046519473695,
            "unit": "iter/sec",
            "range": "stddev: 0.00009251894376094407",
            "extra": "mean: 778.0861969996596 usec\nrounds: 533"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1911.2004211032813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000739577478398314",
            "extra": "mean: 523.2313623197763 usec\nrounds: 1460"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14065.373817729585,
            "unit": "iter/sec",
            "range": "stddev: 0.000011799769387796166",
            "extra": "mean: 71.09658178721756 usec\nrounds: 1502"
          }
        ]
      }
    ]
  }
}