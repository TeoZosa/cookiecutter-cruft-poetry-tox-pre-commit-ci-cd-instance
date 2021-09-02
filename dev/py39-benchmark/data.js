window.BENCHMARK_DATA = {
  "lastUpdate": 1630622743668,
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
        "date": 1630618676570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.3860431833968,
            "unit": "iter/sec",
            "range": "stddev: 0.0002603121236718253",
            "extra": "mean: 3.1909525703248676 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 867.8845410106086,
            "unit": "iter/sec",
            "range": "stddev: 0.0001578253953788642",
            "extra": "mean: 1.1522269988074099 msec\nrounds: 840"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1788.9022958040218,
            "unit": "iter/sec",
            "range": "stddev: 0.00009261180656402761",
            "extra": "mean: 559.0020217121752 usec\nrounds: 829"
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
        "date": 1630622740442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 318.51736416015615,
            "unit": "iter/sec",
            "range": "stddev: 0.000030367092339140843",
            "extra": "mean: 3.1395462619023253 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 907.6919215395878,
            "unit": "iter/sec",
            "range": "stddev: 0.000015504335608628073",
            "extra": "mean: 1.1016953839402286 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1958.7841087286447,
            "unit": "iter/sec",
            "range": "stddev: 0.000013003640724748532",
            "extra": "mean: 510.5207845743925 usec\nrounds: 752"
          }
        ]
      }
    ]
  }
}