window.BENCHMARK_DATA = {
  "lastUpdate": 1626876285254,
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
          "id": "ca37ad7c2a6cef5ef098fb8262590b3eb629acd7",
          "message": "Merge pull request #120 from TeoZosa/dependabot/pip/mutmut-2.2.0",
          "timestamp": "2021-07-21T13:25:29Z",
          "tree_id": "8764bcbb5241fe57a470a23e13ba66e956c629d7"
        },
        "date": 1626876069068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 910.1315415566021,
            "unit": "iter/sec",
            "range": "stddev: 0.00019591786614904825",
            "extra": "mean: 1.0987422744295792 msec\nrounds: 481"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1284.3915434362775,
            "unit": "iter/sec",
            "range": "stddev: 0.00027482895734580443",
            "extra": "mean: 778.5787792751945 usec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7708.5518917232885,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049215334855605",
            "extra": "mean: 129.72605153942146 usec\nrounds: 1591"
          }
        ]
      },
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
          "id": "d4152bcdc2e2d948fbb4d2f6a5355dc08c5e944b",
          "message": "Merge pull request #121 from TeoZosa/dependabot/pip/pylint-2.9.5",
          "timestamp": "2021-07-21T13:56:25Z",
          "tree_id": "4fd12739fb563c23a68abc65dcbad2a73d0fa2b9"
        },
        "date": 1626876283158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 940.8799821528876,
            "unit": "iter/sec",
            "range": "stddev: 0.00008372687814449759",
            "extra": "mean: 1.0628348131201986 msec\nrounds: 503"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1321.930236989812,
            "unit": "iter/sec",
            "range": "stddev: 0.00006685642682128548",
            "extra": "mean: 756.4695715540296 usec\nrounds: 1146"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8418.307102622262,
            "unit": "iter/sec",
            "range": "stddev: 0.00002774146243462124",
            "extra": "mean: 118.78872887501393 usec\nrounds: 1645"
          }
        ]
      }
    ]
  }
}