window.BENCHMARK_DATA = {
  "lastUpdate": 1626110273842,
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
          "id": "e151a207f4f61f779f30ac664bd64933e374d504",
          "message": "Merge pull request #244 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-2c018e2\n\n⬆️ Bump python from `8ffb28a` to `2c018e2` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5c3161b",
          "timestamp": "2021-07-12T17:11:52Z",
          "tree_id": "5a20cae0f515ab54da533ea9e50aed94d283d668"
        },
        "date": 1626110272018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1063.261177430757,
            "unit": "iter/sec",
            "range": "stddev: 0.00020480517155464193",
            "extra": "mean: 940.502692307811 usec\nrounds: 572"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1566.3874371152676,
            "unit": "iter/sec",
            "range": "stddev: 0.00020155989286193123",
            "extra": "mean: 638.4116574898269 usec\nrounds: 1235"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9484.559467016843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006884253720406966",
            "extra": "mean: 105.4345226552233 usec\nrounds: 1567"
          }
        ]
      }
    ]
  }
}