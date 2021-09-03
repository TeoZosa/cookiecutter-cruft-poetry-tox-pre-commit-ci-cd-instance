window.BENCHMARK_DATA = {
  "lastUpdate": 1630646318070,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
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
          "id": "1fd369b182f343015a3eced9e7674877ea42eb5e",
          "message": ":boom: Conditionally exclude ADR management configurations\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3d5795b",
          "timestamp": "2021-09-03T05:08:10Z",
          "tree_id": "b609f3e1a5eac745696151911299c47232d3fd15"
        },
        "date": 1630646315900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.3802446164192,
            "unit": "iter/sec",
            "range": "stddev: 0.0004733684097928236",
            "extra": "mean: 3.4797103097143998 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 811.1182158710848,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282364019969617",
            "extra": "mean: 1.2328659132948572 msec\nrounds: 761"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1778.6178472789918,
            "unit": "iter/sec",
            "range": "stddev: 0.0001283471542616779",
            "extra": "mean: 562.2343223024801 usec\nrounds: 726"
          }
        ]
      }
    ]
  }
}