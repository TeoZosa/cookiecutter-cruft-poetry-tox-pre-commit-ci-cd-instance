window.BENCHMARK_DATA = {
  "lastUpdate": 1624581319145,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "aa478984aafa3f4911aa64f3793b8f46a27b71d5",
          "message": "Merge pull request #67 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.4\n\n⬆️ Bump JamesIves/github-pages-deploy-action from 3.7.1 to 4.1.4",
          "timestamp": "2021-06-25T00:29:07Z",
          "tree_id": "65e3c68256f14a302f13fa58a5d0c4bf81cb910e"
        },
        "date": 1624581317426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1017.1108811608999,
            "unit": "iter/sec",
            "range": "stddev: 0.0004396730411150157",
            "extra": "mean: 983.1769756102008 usec\nrounds: 574"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1458.5999197027024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011445048239824673",
            "extra": "mean: 685.5889586253535 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9720.305732421959,
            "unit": "iter/sec",
            "range": "stddev: 0.000028037224895261383",
            "extra": "mean: 102.87742253461356 usec\nrounds: 1846"
          }
        ]
      }
    ]
  }
}