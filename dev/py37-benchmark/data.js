window.BENCHMARK_DATA = {
  "lastUpdate": 1630622660709,
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
        "date": 1630618678975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.4468303607162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004116504792236688",
            "extra": "mean: 3.2954702437038823 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 874.3441011385677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002108284706520624",
            "extra": "mean: 1.1437144697354322 msec\nrounds: 760"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1825.7255370834505,
            "unit": "iter/sec",
            "range": "stddev: 0.000015133800214306365",
            "extra": "mean: 547.7274539290688 usec\nrounds: 738"
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
        "date": 1630622658672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.63605370973,
            "unit": "iter/sec",
            "range": "stddev: 0.000025847828567473118",
            "extra": "mean: 2.8039789852932566 msec\nrounds: 136"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1032.9282954876744,
            "unit": "iter/sec",
            "range": "stddev: 0.000013423805365795365",
            "extra": "mean: 968.1214120752418 usec\nrounds: 944"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2146.207046297395,
            "unit": "iter/sec",
            "range": "stddev: 0.000010736433245280279",
            "extra": "mean: 465.9382708323436 usec\nrounds: 816"
          }
        ]
      }
    ]
  }
}