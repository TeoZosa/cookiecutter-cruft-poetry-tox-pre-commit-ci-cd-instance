window.BENCHMARK_DATA = {
  "lastUpdate": 1626876304153,
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
        "date": 1626876038930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 942.6209959231451,
            "unit": "iter/sec",
            "range": "stddev: 0.0001978925781022899",
            "extra": "mean: 1.0608717653489794 msec\nrounds: 456"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1232.9505185289127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018251288151597742",
            "extra": "mean: 811.0625568276201 usec\nrounds: 1223"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8778.779770156856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000775367408002361",
            "extra": "mean: 113.91104756944284 usec\nrounds: 1871"
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
        "date": 1626876300401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 916.4099364806513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191061404664028",
            "extra": "mean: 1.0912147066414024 msec\nrounds: 542"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1302.717928938793,
            "unit": "iter/sec",
            "range": "stddev: 0.00022861062663901801",
            "extra": "mean: 767.6258826149801 usec\nrounds: 1346"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8888.84781152178,
            "unit": "iter/sec",
            "range": "stddev: 0.000027215042775346856",
            "extra": "mean: 112.50051988782998 usec\nrounds: 1056"
          }
        ]
      }
    ]
  }
}