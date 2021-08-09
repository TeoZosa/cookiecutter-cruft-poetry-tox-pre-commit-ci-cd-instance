window.BENCHMARK_DATA = {
  "lastUpdate": 1628534200187,
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
          "id": "fa58366f36b9b5af83f984b1123126f335a14583",
          "message": "Merge pull request #278 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-74f44a8\n\n⬆️ Bump python from `5f8d373` to `74f44a8` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@34f48ec",
          "timestamp": "2021-08-09T18:23:23Z",
          "tree_id": "08d8456c3e63cff0ea96b8d4d66032eb451fcdbe"
        },
        "date": 1628534198179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.98501685841865,
            "unit": "iter/sec",
            "range": "stddev: 0.000023623155386552747",
            "extra": "mean: 2.8170203037015433 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1028.3331364443786,
            "unit": "iter/sec",
            "range": "stddev: 0.000013180360806282745",
            "extra": "mean: 972.4475119586783 usec\nrounds: 920"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2146.1227573998226,
            "unit": "iter/sec",
            "range": "stddev: 0.000011250792367956658",
            "extra": "mean: 465.9565705419245 usec\nrounds: 808"
          }
        ]
      }
    ]
  }
}