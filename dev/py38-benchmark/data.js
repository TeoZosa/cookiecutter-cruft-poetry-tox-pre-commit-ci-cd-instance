window.BENCHMARK_DATA = {
  "lastUpdate": 1629306669676,
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
          "id": "913bf2cced9ffba2141b861050235f3f3d0dadfa",
          "message": "Merge pull request #288 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-4115592\n\n⬆️ Bump python from `182f0ef` to `4115592` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@be25a8b",
          "timestamp": "2021-08-18T17:01:04Z",
          "tree_id": "961e3897f0513134ff6b28f8e0ef84d6e764d5c3"
        },
        "date": 1629306668040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 420.16618160301954,
            "unit": "iter/sec",
            "range": "stddev: 0.00010927483712216131",
            "extra": "mean: 2.38001068097579 msec\nrounds: 163"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1220.9805224528952,
            "unit": "iter/sec",
            "range": "stddev: 0.00004253726197774383",
            "extra": "mean: 819.0138840143368 usec\nrounds: 1026"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2545.783158463497,
            "unit": "iter/sec",
            "range": "stddev: 0.000018868428932544356",
            "extra": "mean: 392.80643234498746 usec\nrounds: 909"
          }
        ]
      }
    ]
  }
}