window.BENCHMARK_DATA = {
  "lastUpdate": 1628534271371,
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
        "date": 1628534268598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.582494422753,
            "unit": "iter/sec",
            "range": "stddev: 0.00044894640106357464",
            "extra": "mean: 3.4893966640015606 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 830.9377121321965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379681016101993",
            "extra": "mean: 1.2034596401142843 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1723.0131607082928,
            "unit": "iter/sec",
            "range": "stddev: 0.0001549502004970335",
            "extra": "mean: 580.3786197366722 usec\nrounds: 831"
          }
        ]
      }
    ]
  }
}