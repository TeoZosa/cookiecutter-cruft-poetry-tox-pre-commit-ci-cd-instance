window.BENCHMARK_DATA = {
  "lastUpdate": 1614969814360,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "447c51a2b98cb3a4b500bf2b38eb4961208ceae2",
          "message": "Merge pull request #96 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1d26b58",
          "timestamp": "2021-03-04T14:24:17Z",
          "tree_id": "0ec79250d1c25fd3f042d9506104c7f5abce3dfb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/447c51a2b98cb3a4b500bf2b38eb4961208ceae2"
        },
        "date": 1614868108113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1126.3620185255213,
            "unit": "iter/sec",
            "range": "stddev: 0.00005000291475695658",
            "extra": "mean: 887.8140274199435 usec\nrounds: 547"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1632.692935641256,
            "unit": "iter/sec",
            "range": "stddev: 0.000034219282332928696",
            "extra": "mean: 612.4850412286743 usec\nrounds: 1334"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13260.367661964458,
            "unit": "iter/sec",
            "range": "stddev: 0.00000761417946894164",
            "extra": "mean: 75.4126903184112 usec\nrounds: 1818"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "5edb5fc5e083c67a8aebbccfe727eda8c5511541",
          "message": ":art: Move misc. helper targets to correct section\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b727aa0",
          "timestamp": "2021-03-05T18:39:06Z",
          "tree_id": "846966d49722001ce75e7ec5c46926d88a54b331",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5edb5fc5e083c67a8aebbccfe727eda8c5511541"
        },
        "date": 1614969813434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1007.7091049915961,
            "unit": "iter/sec",
            "range": "stddev: 0.00022114704862870774",
            "extra": "mean: 992.3498706586953 usec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1360.559812587911,
            "unit": "iter/sec",
            "range": "stddev: 0.00018343777956856763",
            "extra": "mean: 734.9915753412613 usec\nrounds: 1241"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9667.790177791821,
            "unit": "iter/sec",
            "range": "stddev: 0.000035253082011219765",
            "extra": "mean: 103.43625395357988 usec\nrounds: 2150"
          }
        ]
      }
    ]
  }
}