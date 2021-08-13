window.BENCHMARK_DATA = {
  "lastUpdate": 1628864867319,
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
        "date": 1628864692484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.813051443594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002908321762304956",
            "extra": "mean: 3.23820510605153 msec\nrounds: 132"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 926.2484425293045,
            "unit": "iter/sec",
            "range": "stddev: 0.00010121197400961156",
            "extra": "mean: 1.0796239476196066 msec\nrounds: 840"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1864.2211239896835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006739604030282583",
            "extra": "mean: 536.4170522109875 usec\nrounds: 747"
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
        "date": 1628864864778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.30338517750425,
            "unit": "iter/sec",
            "range": "stddev: 0.00020785285832847827",
            "extra": "mean: 3.202014603305144 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 910.7085556640942,
            "unit": "iter/sec",
            "range": "stddev: 0.00016845832958977707",
            "extra": "mean: 1.098046124394641 msec\nrounds: 828"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1676.0663104002022,
            "unit": "iter/sec",
            "range": "stddev: 0.00009201144428926546",
            "extra": "mean: 596.6351055413943 usec\nrounds: 758"
          }
        ]
      }
    ]
  }
}