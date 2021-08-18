window.BENCHMARK_DATA = {
  "lastUpdate": 1629306867302,
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
        "date": 1629306865336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.74581315165824,
            "unit": "iter/sec",
            "range": "stddev: 0.00033670855929193656",
            "extra": "mean: 3.347327246030224 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.3182231998608,
            "unit": "iter/sec",
            "range": "stddev: 0.0002857232753992509",
            "extra": "mean: 1.1760303057329133 msec\nrounds: 785"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1656.0848056118768,
            "unit": "iter/sec",
            "range": "stddev: 0.00016842336862020883",
            "extra": "mean: 603.8338112947833 usec\nrounds: 726"
          }
        ]
      }
    ]
  }
}