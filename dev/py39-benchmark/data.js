window.BENCHMARK_DATA = {
  "lastUpdate": 1628864808727,
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
          "id": "c397f6e0dac285044504e2ea0f8e42861d565c3b",
          "message": "Merge pull request #282 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@05e51bd",
          "timestamp": "2021-08-13T13:53:01Z",
          "tree_id": "35b420eaeaf2f37a96d3b863469e1650981d3513"
        },
        "date": 1628864781644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 309.4574593358886,
            "unit": "iter/sec",
            "range": "stddev: 0.00005802752203769264",
            "extra": "mean: 3.2314619338827724 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.091109482115,
            "unit": "iter/sec",
            "range": "stddev: 0.000024861357475420262",
            "extra": "mean: 1.122219702743057 msec\nrounds: 693"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1919.5620513359352,
            "unit": "iter/sec",
            "range": "stddev: 0.000015732240342450824",
            "extra": "mean: 520.9521616162613 usec\nrounds: 693"
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
          "id": "cfb156b071a0a8a444414bcdcff93a884d9b89f6",
          "message": "Merge pull request #158 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-13T13:36:51Z",
          "tree_id": "fa100e3c09d2cf02724dfd032f498161abd0fb83"
        },
        "date": 1628864806831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.1225360466093,
            "unit": "iter/sec",
            "range": "stddev: 0.00002139148412720363",
            "extra": "mean: 2.6872868561627437 msec\nrounds: 146"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1048.1067427339701,
            "unit": "iter/sec",
            "range": "stddev: 0.000026499056289276366",
            "extra": "mean: 954.1012944841053 usec\nrounds: 961"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2281.4490802295622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000131957137512529",
            "extra": "mean: 438.31791323581893 usec\nrounds: 899"
          }
        ]
      }
    ]
  }
}