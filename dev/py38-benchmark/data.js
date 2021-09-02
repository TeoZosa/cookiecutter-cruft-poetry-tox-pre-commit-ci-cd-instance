window.BENCHMARK_DATA = {
  "lastUpdate": 1630622672254,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f12bd549d6bf855a7753b86498aa1d5351fbbd70",
          "message": "Merge pull request #313 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.9.7-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef21523",
          "timestamp": "2021-09-02T21:28:50Z",
          "tree_id": "b4de2993b56364473d38f538e8dda2fa398265de"
        },
        "date": 1630618683071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.13552193572286,
            "unit": "iter/sec",
            "range": "stddev: 0.00023363172212595497",
            "extra": "mean: 3.4948474528256535 msec\nrounds: 106"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.755710317417,
            "unit": "iter/sec",
            "range": "stddev: 0.00022387002676075074",
            "extra": "mean: 1.2051739898451042 msec\nrounds: 788"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1606.9160847711928,
            "unit": "iter/sec",
            "range": "stddev: 0.00020144521938452034",
            "extra": "mean: 622.3100319158165 usec\nrounds: 564"
          }
        ]
      },
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
          "id": "660d3234195f7ab2fc7a1ef7e19b6860c7922e46",
          "message": ":bug: Fix ADR-related file removal\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@440e468",
          "timestamp": "2021-09-02T22:37:15Z",
          "tree_id": "1fa6c1e3b6b87368f51ed4615de495827d381a8a"
        },
        "date": 1630622669939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 379.32992118376615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002427529596775981",
            "extra": "mean: 2.6362275796207246 msec\nrounds: 157"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1085.6917964927572,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214532577218105",
            "extra": "mean: 921.0717104342338 usec\nrounds: 853"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2231.711595561589,
            "unit": "iter/sec",
            "range": "stddev: 0.00005920212590833071",
            "extra": "mean: 448.0865726506921 usec\nrounds: 819"
          }
        ]
      }
    ]
  }
}