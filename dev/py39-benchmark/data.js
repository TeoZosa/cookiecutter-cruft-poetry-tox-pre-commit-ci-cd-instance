window.BENCHMARK_DATA = {
  "lastUpdate": 1620095660780,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "d1a15050c5d710ad6e4413a19de2d093e04ef91c",
          "message": "Merge pull request #157 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1.1\n\n⬆️ Bump pip from 21.1 to 21.1.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7892fcc",
          "timestamp": "2021-05-04T02:29:58Z",
          "tree_id": "c9822d66bf36a9629bf4efe08c5b7ace5fe90c12",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d1a15050c5d710ad6e4413a19de2d093e04ef91c"
        },
        "date": 1620095659246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 991.6021076841031,
            "unit": "iter/sec",
            "range": "stddev: 0.00014221512591060844",
            "extra": "mean: 1.0084690141850448 msec\nrounds: 423"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1396.2610084774149,
            "unit": "iter/sec",
            "range": "stddev: 0.00020149656964844393",
            "extra": "mean: 716.1984714379964 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9392.896943812953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003531137078745663",
            "extra": "mean: 106.46342720269001 usec\nrounds: 1566"
          }
        ]
      }
    ]
  }
}