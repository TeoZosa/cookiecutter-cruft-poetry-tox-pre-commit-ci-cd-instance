window.BENCHMARK_DATA = {
  "lastUpdate": 1631548335589,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
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
          "id": "ad221c71292383e6aae28abbc19a0c81b5cc77ac",
          "message": "Merge pull request #218 from TeoZosa/dependabot/pip/sphinx-4.2.0",
          "timestamp": "2021-09-13T14:23:20Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631548332801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.00727398357685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002936193933500219",
            "extra": "mean: 3.484232250006395 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 812.6679328597542,
            "unit": "iter/sec",
            "range": "stddev: 0.00033266911286022123",
            "extra": "mean: 1.2305148998324935 msec\nrounds: 609"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1572.8610962602645,
            "unit": "iter/sec",
            "range": "stddev: 0.00012919147397664744",
            "extra": "mean: 635.7840513556247 usec\nrounds: 701"
          }
        ]
      }
    ]
  }
}