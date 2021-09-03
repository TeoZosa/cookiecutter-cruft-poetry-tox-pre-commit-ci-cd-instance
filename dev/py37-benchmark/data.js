window.BENCHMARK_DATA = {
  "lastUpdate": 1630646271906,
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
        "date": 1630646269195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.6023843294767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869137285627505",
            "extra": "mean: 3.26155323999501 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 839.9615375903439,
            "unit": "iter/sec",
            "range": "stddev: 0.00026205849506459264",
            "extra": "mean: 1.190530703190017 msec\nrounds: 721"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1753.206736322256,
            "unit": "iter/sec",
            "range": "stddev: 0.00008667224674216643",
            "extra": "mean: 570.3833890678085 usec\nrounds: 622"
          }
        ]
      }
    ]
  }
}