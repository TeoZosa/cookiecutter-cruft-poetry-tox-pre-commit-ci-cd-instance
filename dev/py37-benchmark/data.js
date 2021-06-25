window.BENCHMARK_DATA = {
  "lastUpdate": 1624581339464,
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
        "date": 1624581324164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1216.149271966947,
            "unit": "iter/sec",
            "range": "stddev: 0.000015635145345678498",
            "extra": "mean: 822.2674823318715 usec\nrounds: 566"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1747.4073725031265,
            "unit": "iter/sec",
            "range": "stddev: 0.000018020727533746792",
            "extra": "mean: 572.2763997312887 usec\nrounds: 1491"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13348.062800451862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051501889353028884",
            "extra": "mean: 74.91723817527647 usec\nrounds: 1776"
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
        "date": 1624581337789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 990.6605665608867,
            "unit": "iter/sec",
            "range": "stddev: 0.00016160076887521038",
            "extra": "mean: 1.0094274807682468 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1329.8222136718236,
            "unit": "iter/sec",
            "range": "stddev: 0.00019546944713617247",
            "extra": "mean: 751.9802194000515 usec\nrounds: 1299"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8376.92938728325,
            "unit": "iter/sec",
            "range": "stddev: 0.000030215771781820677",
            "extra": "mean: 119.37548399513409 usec\nrounds: 1312"
          }
        ]
      }
    ]
  }
}