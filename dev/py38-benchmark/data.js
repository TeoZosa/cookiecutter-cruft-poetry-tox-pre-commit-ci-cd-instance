window.BENCHMARK_DATA = {
  "lastUpdate": 1624581328119,
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
          "id": "804d5e8984c75bfd90aa52f6e0c4b66347f2830f",
          "message": "Merge pull request #45 from TeoZosa/dependabot/github_actions/actions/setup-node-2.1.5\n\n⬆️ Bump actions/setup-node from 1 to 2.1.5",
          "timestamp": "2021-06-25T00:29:36Z",
          "tree_id": "092ec07e63ac98914fc01826083edb92451695a0"
        },
        "date": 1624581300060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1439.8855600398238,
            "unit": "iter/sec",
            "range": "stddev: 0.000014198328770732334",
            "extra": "mean: 694.4996378547905 usec\nrounds: 671"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2112.2612741342546,
            "unit": "iter/sec",
            "range": "stddev: 0.000014263853949030453",
            "extra": "mean: 473.42628123022644 usec\nrounds: 1625"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15364.94447734384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036626802843418372",
            "extra": "mean: 65.083215983926 usec\nrounds: 2102"
          }
        ]
      },
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
        "date": 1624581323781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1015.5839899942513,
            "unit": "iter/sec",
            "range": "stddev: 0.00016846765011492362",
            "extra": "mean: 984.6551440867638 usec\nrounds: 465"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1452.004191530733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015213876672935737",
            "extra": "mean: 688.7032460600401 usec\nrounds: 1142"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8114.77051741522,
            "unit": "iter/sec",
            "range": "stddev: 0.00015134216425048388",
            "extra": "mean: 123.2320738896912 usec\nrounds: 1800"
          }
        ]
      }
    ]
  }
}