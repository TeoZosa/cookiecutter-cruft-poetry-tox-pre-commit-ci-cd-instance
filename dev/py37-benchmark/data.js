window.BENCHMARK_DATA = {
  "lastUpdate": 1629730005860,
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
          "id": "a1db845bb99cbcd6216140a45f4a32317ca94e56",
          "message": "Merge pull request #181 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-23T13:27:52Z",
          "tree_id": "2934b1d95729572e71882a9c18be4a1f6f4047e6"
        },
        "date": 1629730003742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.9956877299878,
            "unit": "iter/sec",
            "range": "stddev: 0.0006373706577325581",
            "extra": "mean: 3.7736463131389915 msec\nrounds: 99"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.2840853800981,
            "unit": "iter/sec",
            "range": "stddev: 0.00018676130817211174",
            "extra": "mean: 1.2417977930459099 msec\nrounds: 633"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1566.162604486633,
            "unit": "iter/sec",
            "range": "stddev: 0.00024162903533305258",
            "extra": "mean: 638.5033055541425 usec\nrounds: 756"
          }
        ]
      }
    ]
  }
}